import { useMemo, useState } from 'react'
import { cvVersions } from '../data/cv-versions'

const isDev = process.env.NODE_ENV === 'development'

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toISOString().slice(0, 10)
}

function normalizeWebsite(url) {
  if (!url) return ''
  const trimmed = String(url).trim()
  if (!trimmed) return ''
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  return `https://${trimmed}`
}

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

const AdminPanel = () => {
  const [copiedId, setCopiedId] = useState(null)

  const rows = useMemo(() => {
    return [...cvVersions].sort((a, b) => String(b.created_at ?? '').localeCompare(String(a.created_at ?? '')))
  }, [])

  if (!isDev) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-xl w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Not found</h2>
          <p className="mt-2 text-sm text-slate-600">
            This page is available only in development mode.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Admin Panel</h1>
            <p className="mt-1 text-sm text-slate-600">CV versions (development only)</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            Total: <span className="font-medium text-slate-700">{rows.length}</span>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Company</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Pretty Link</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((v) => {
                  const website = normalizeWebsite(v.company_website)
                  const prettyPath = `/cv/${v.slug}`
                  const shareUrl = `${window.location.origin}${prettyPath}`
                  return (
                    <tr key={v.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700 whitespace-nowrap">
                        {formatDate(v.created_at)}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-900">
                        <div className="font-medium">{v.company_name}</div>
                        {website ? (
                          <a
                            className="text-xs text-sky-700 hover:text-sky-900 hover:underline"
                            href={website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {website}
                          </a>
                        ) : (
                          <div className="text-xs text-slate-400">—</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {v.role_title}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                          {v.status || 'Sent'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700 whitespace-nowrap">
                        <span className="font-mono text-xs text-slate-600">{prettyPath}</span>
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <button
                          className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800 active:bg-slate-950"
                          onClick={async () => {
                            await copyToClipboard(shareUrl)
                            setCopiedId(v.id)
                            window.setTimeout(() => setCopiedId((prev) => (prev === v.id ? null : prev)), 1200)
                          }}
                          type="button"
                        >
                          {copiedId === v.id ? 'Copied' : 'Copy Shareable Link'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Tip: generate a new version via <span className="font-mono">yarn workspace client cv:new</span>.
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

