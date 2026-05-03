import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import crypto from 'node:crypto'
import readline from 'node:readline/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
const company = getArgValue(args, '--company') ?? 'Company'
const role = getArgValue(args, '--role') ?? 'Role'
let website = getArgValue(args, '--website')
const baseUrl = getArgValue(args, '--baseUrl') ?? 'http://localhost:5173'

if (website === null) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  website = (await rl.question('Company website (optional): ')).trim()
  rl.close()
}

const targetPath = path.resolve(__dirname, '../src/data/cv-versions.js')
const src = await fs.readFile(targetPath, 'utf8')

const id = crypto.randomUUID()
const createdAt = new Date().toISOString()
const slug = await generateUniqueSlug({ company, role, existingSource: src })
const safeSlug = escapeJsString(slug)
const safeCompany = escapeJsString(company)
const safeWebsite = escapeJsString(website)
const safeRole = escapeJsString(role)

const newEntry = `  {\n    id: '${id}',\n    slug: '${safeSlug}',\n    created_at: '${createdAt}',\n    company_name: '${safeCompany}',\n    company_website: '${safeWebsite}',\n    role_title: '${safeRole}',\n    status: 'Sent',\n    content: {\n      ...baseContent,\n      noindex: true,\n      title: '${safeRole}',\n      bio: 'Write a short tailored summary for ${safeCompany}.',\n      skills: [],\n      experience: [],\n    },\n  },\n`

const marker = 'export const cvVersions = [\n'
const idx = src.indexOf(marker)
if (idx === -1) {
  throw new Error('Could not find cvVersions array in src/data/cv-versions.js')
}

const insertAt = idx + marker.length
const updated = src.slice(0, insertAt) + newEntry + src.slice(insertAt)
await fs.writeFile(targetPath, updated, 'utf8')

console.log('Created CV version:')
console.log(`- id: ${id}`)
console.log(`- slug: ${slug}`)
console.log(`- created_at: ${createdAt}`)
console.log(`- company_name: ${company}`)
console.log(`- company_website: ${website}`)
console.log(`- role_title: ${role}`)
console.log(`- status: Sent`)
console.log(`- pretty_link: ${baseUrl.replace(/\/$/, '')}/cv/${slug}`)
console.log('')
console.log('Next steps:')
console.log('- Edit: client/src/data/cv-versions.js (fill bio/skills/experience)')
console.log('- Restart dev server if it is running')

function getArgValue(argv, key) {
  const i = argv.indexOf(key)
  if (i === -1) return null
  return argv[i + 1] ?? null
}

function escapeJsString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function randomShortId() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const bytes = crypto.randomBytes(3)
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join('')
}

async function generateUniqueSlug({ company, role, existingSource }) {
  const base = `${slugify(company)}-${slugify(role)}`.replace(/-+/g, '-')
  for (let attempt = 0; attempt < 50; attempt += 1) {
    const candidate = `${base}-${randomShortId()}`
    if (!existingSource.includes(`slug: '${candidate}'`)) return candidate
  }
  throw new Error('Failed to generate a unique slug after multiple attempts.')
}

