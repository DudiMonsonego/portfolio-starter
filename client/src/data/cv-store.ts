// =============================================================================
// cv-store.ts — THE single source of truth for all CV versions.
//
// HOW TO ADD A NEW JOB APPLICATION:
//   1. Scroll to the "JOB-SPECIFIC VERSIONS" section at the bottom.
//   2. Copy one of the existing job blocks and paste it below.
//   3. Change the slug (key), title, bio, skills, and bullets.
//   4. Set isPrivate: true  → the page will be noindex + no switcher banner.
//   5. Share the link:  https://your-domain.com/cv/<slug>
//
// PUBLIC versions (hr-tech / technical-pm / fullstack-dev):
//   These appear in the version switcher banner and are indexed by Google.
//
// PRIVATE versions (any job-specific entry with isPrivate: true):
//   These are hidden from Google and have no banner — only you and the
//   recruiter who receives the link can see them.
// =============================================================================


// ─── TypeScript Interfaces ────────────────────────────────────────────────────

export interface ContactInfo {
  email: string
  phone: string
  linkedin?: string
  github?: string
}

export interface ExperienceItem {
  title: string
  company: string
  year: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  year: string
  description?: string | null
}

export interface Language {
  language: string
  proficiency: string
}

export interface CvEntry {
  name: string
  title: string
  location: string
  bio: string
  contact: ContactInfo
  skills: string[]
  experience: ExperienceItem[]
  education: EducationItem[]
  languages: Language[]
  /**
   * When true:
   *  - <meta name="robots" content="noindex"> is injected into the <head>
   *  - The version switcher banner is hidden
   * Use this for every job-specific CV so recruiters can't find each other's links.
   */
  isPrivate?: boolean
}

// Exported type for the full store object (slug → CvEntry)
export type CvStore = Record<string, CvEntry>


// ─── Shared base data (edit once, applies to all versions) ───────────────────

const baseContact: ContactInfo = {
  email: 'dudimonsonego@gmail.com',
  phone: '052-3594646',
  linkedin: 'https://linkedin.com/in/david-monsonego',
  github: 'https://github.com/dudimonsonego',
}

const baseLanguages: Language[] = [
  { language: 'English', proficiency: 'Full professional proficiency' },
  { language: 'Hebrew',  proficiency: 'Native / bilingual proficiency' },
]

const baseEducation: EducationItem[] = [
  {
    degree: 'Project Management Course',
    institution: 'TechTroop / Elevation',
    year: '2025 – Present',
    description: 'Project lifecycle, matrix leadership, and AI-driven data visualization.',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Haifa',
    year: '2020 – 2024',
    description: null,
  },
]

// Shared experience used as the base for all public versions
const baseExperience: ExperienceItem[] = [
  {
    title: 'Technical Project Manager (HR & Ops)',
    company: 'Reserve Duty IDF — Alexandroni Brigade',
    year: '2023 – Present',
    bullets: [
      'Requirement Analysis & Design: Performed comprehensive requirements analysis for senior command to lead a large-scale digital transformation of unit personnel systems.',
      'Development & Implementation: Developed and deployed a full-stack HR management application using Cursor (Claude Code), utilizing a Supabase backend for secure, real-time data storage.',
      'Data-Driven Insights: Engineered automated ETL pipelines and interactive dashboards in Looker Studio, reducing administrative workload by 50% and improving decision-making accuracy.',
      'Functional Documentation: Produced technical documentation and process designs to streamline high-pressure operational workflows.',
    ],
  },
  {
    title: 'Branch Manager & ERP Operations',
    company: 'Ivory Computers',
    year: '2013 – 2019',
    bullets: [
      'Business Solutions Specialist: Collaborated closely with business clients to identify complex technical needs, translating them into tailored hardware and software solutions.',
      'Process Optimization: Leveraged Priority ERP to streamline sales and inventory management processes, significantly improving efficiency and reducing operational errors.',
      'Stakeholder Management: Managed complex interfaces with procurement, operations, and supply chain to ensure delivery of high-quality technical service.',
      'Operational Excellence: Supervised multi-disciplinary teams, maintaining rigorous service standards and consistent operational performance.',
    ],
  },
]


// ─── PUBLIC VERSIONS ──────────────────────────────────────────────────────────
// These are shown in the version-switcher banner and are indexable by Google.

const hrTech: CvEntry = {
  name: 'David Monsonego',
  title: 'HR Technology & Solutions Specialist',
  location: 'Israel',
  bio: 'Analytical and impact-driven B.Sc. Computer Science graduate specializing in HR technology and digital transformation. Experienced in the full lifecycle of system implementation: from gathering business requirements and writing functional documentation to developing SQL-based backends and BI dashboards. Proven ability to transform complex business needs into smart, data-driven solutions and automated workflows. Highly proficient in bridging technical execution with global business goals.',
  contact: baseContact,
  skills: [
    'SQL', 'Power BI', 'Looker Studio', 'Tableau', 'ETL Processes', 'Advanced Excel',
    'API Integrations', 'Make', 'Google Apps Script',
    'JavaScript', 'TypeScript', 'React',
    'Cursor / Claude Code', 'Priority ERP', 'Docker', 'GitHub',
  ],
  experience: baseExperience,
  education: baseEducation,
  languages: baseLanguages,
}

const technicalPm: CvEntry = {
  ...hrTech,
  title: 'Technical Project Manager',
  bio: 'Results-oriented Technical Project Manager with a B.Sc. in Computer Science and hands-on experience leading end-to-end digital transformation initiatives. Skilled at bridging technical teams and business stakeholders, translating complex requirements into actionable roadmaps. Experienced in matrix environments with a strong track record of delivering data-driven systems under operational pressure.',
  skills: [
    'Project Lifecycle Management', 'Requirements Analysis', 'Functional Documentation',
    'Stakeholder Management', 'Matrix Leadership', 'Cross-functional Coordination',
    'SQL', 'Looker Studio', 'Power BI', 'ETL Processes',
    'API Integrations', 'Make', 'Priority ERP', 'Docker', 'GitHub', 'Linux / Windows CLI',
  ],
  experience: [
    {
      title: 'Technical Project Manager (HR & Ops)',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Performed end-to-end requirements analysis for senior command to drive a large-scale digital transformation of unit personnel systems.',
        'Managed the full project lifecycle: scope definition, technical documentation, development coordination, and stakeholder training.',
        'Coordinated cross-functional teams across development, operations, and command leadership under tight operational deadlines.',
        'Delivered automated BI dashboards and ETL pipelines that cut administrative overhead by 50% and improved decision accuracy.',
      ],
    },
    {
      title: 'Branch Manager & ERP Operations',
      company: 'Ivory Computers',
      year: '2013 – 2019',
      bullets: [
        'Managed multi-disciplinary teams and complex vendor/client interfaces across procurement, sales, and operations.',
        'Led ERP implementation and optimisation projects with Priority ERP, improving process efficiency and reducing errors.',
        'Served as primary technical liaison for business clients, translating requirements into tailored solutions.',
        'Oversaw service quality and operational KPIs across the branch.',
      ],
    },
  ],
}

const fullstackDev: CvEntry = {
  ...hrTech,
  title: 'Full Stack Developer',
  bio: 'B.Sc. Computer Science graduate with hands-on full-stack development experience, specialising in building data-driven applications and automating complex workflows. Proficient in JavaScript/TypeScript, React, and cloud-backed architectures (Supabase, AWS, Vercel). Experienced in translating real-world business problems into robust, scalable technical solutions and accelerating delivery with AI-assisted tooling.',
  skills: [
    'JavaScript', 'TypeScript', 'React', 'HTML / CSS',
    'SQL', 'Supabase', 'REST APIs', 'API Integrations',
    'Google Apps Script', 'Make', 'ETL Processes',
    'Looker Studio', 'Power BI', 'AWS', 'Vercel', 'Docker', 'GitHub', 'Linux / Windows CLI',
  ],
  experience: [
    {
      title: 'Full Stack Developer (HR Systems)',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Developed and deployed a full-stack HR management application using React and Supabase, serving real-time personnel data securely.',
        'Built automated ETL pipelines integrating multiple data sources into Looker Studio dashboards.',
        'Utilised Cursor (Claude Code) to accelerate development cycles while maintaining clean, documented code.',
        'Gathered stakeholder requirements and delivered functional specifications before each development sprint.',
      ],
    },
    {
      title: 'Branch Manager & ERP Operations',
      company: 'Ivory Computers',
      year: '2013 – 2019',
      bullets: [
        'Used Priority ERP and custom integrations to automate and optimise sales and inventory workflows.',
        'Translated complex client requirements into software and hardware solutions.',
        'Managed technical interfaces with supply chain and operations systems.',
        'Supervised teams and maintained consistent operational performance standards.',
      ],
    },
  ],
}


// ─── JOB-SPECIFIC VERSIONS ────────────────────────────────────────────────────
// isPrivate: true → noindex + no banner. Safe to share with individual recruiters.
//
// TEMPLATE — copy this block and customise:
//
// const myNewJob: CvEntry = {
//   ...hrTech,                  // start from the closest public version
//   isPrivate: true,
//   title: 'Job Title Here',
//   bio: 'Tailored bio for this specific company and role...',
//   skills: [ /* skills most relevant to this job */ ],
//   experience: [
//     {
//       ...baseExperience[0],   // reuse the IDF entry
//       bullets: [ /* reorder/rewrite bullets to match job requirements */ ],
//     },
//     baseExperience[1],        // keep Ivory Computers as-is
//   ],
// }

const intelAutomationLead: CvEntry = {
  ...hrTech,
  isPrivate: true,
  title: 'HR Automation Lead',
  bio: 'Analytical B.Sc. Computer Science graduate with deep expertise in HR process automation and data-driven workforce intelligence. Proven track record designing end-to-end ETL pipelines, BI dashboards, and HRIS integrations at scale. Experienced working in complex, cross-functional environments and delivering measurable efficiency gains — including a 50% reduction in administrative overhead through automated reporting.',
  skills: [
    'ETL Processes', 'Looker Studio', 'Power BI', 'SQL', 'Advanced Excel',
    'API Integrations', 'Make', 'Google Apps Script',
    'Custom HRIS', 'Process Automation',
    'JavaScript', 'TypeScript', 'React', 'Supabase',
    'Docker', 'GitHub',
  ],
  experience: [
    {
      title: 'HR Automation Project Lead',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Architected and delivered an end-to-end HR automation system replacing manual personnel processes for a 500+ person unit.',
        'Built real-time ETL pipelines and Looker Studio dashboards that reduced weekly reporting time from 8 hours to under 1 hour.',
        'Integrated multiple data sources (Google Sheets, Supabase, government APIs) via Make and Google Apps Script.',
        'Wrote full functional documentation and trained non-technical staff on the new automated workflows.',
      ],
    },
    baseExperience[1],
  ],
}

const wixHrTech: CvEntry = {
  ...hrTech,
  isPrivate: true,
  title: 'HR Technology Specialist',
  bio: 'B.Sc. Computer Science graduate with a passion for building people-centric technology. Experienced in the full lifecycle of HR system implementation — from requirements gathering and functional documentation to React-based frontends and Supabase backends. Thrives at the intersection of product thinking and technical execution, and brings a strong focus on user experience for non-technical HR stakeholders.',
  skills: [
    'JavaScript', 'TypeScript', 'React', 'HTML / CSS',
    'SQL', 'Supabase', 'API Integrations', 'REST APIs',
    'ETL Processes', 'Looker Studio', 'Make', 'Google Apps Script',
    'Cursor / Claude Code', 'Vercel', 'GitHub',
  ],
  experience: [
    {
      title: 'HR Technology Developer & Project Lead',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Designed and built a React + Supabase HR management application from scratch, serving real-time data for 500+ personnel records.',
        'Led the product lifecycle end-to-end: user research with command staff, UX wireframes, development, testing, and rollout.',
        'Created automated Looker Studio dashboards that gave commanders instant access to workforce insights, cutting report prep time by 50%.',
        'Wrote user-facing documentation and ran onboarding sessions for non-technical administrators.',
      ],
    },
    baseExperience[1],
  ],
}


// ─── EXPORTS ──────────────────────────────────────────────────────────────────

/**
 * The full CV store. Add every new job here.
 * Key = URL slug  →  value = CvEntry
 */
export const cvStore: CvStore = {
  // Public versions (appear in the switcher banner)
  'hr-tech':       hrTech,
  'technical-pm':  technicalPm,
  'fullstack-dev': fullstackDev,

  // Job-specific private versions (noindex, no banner)
  'intel-automation-lead': intelAutomationLead,
  'wix-hr-tech':           wixHrTech,
}

/** Slug used when no matching entry is found in cvStore */
export const defaultSlug = 'hr-tech'

/**
 * Ordered list of PUBLIC versions displayed in the switcher banner.
 * Only add entries here that should be publicly visible.
 */
export const publicVersions: Array<{ slug: string; label: string }> = [
  { slug: 'hr-tech',       label: 'HR Technology' },
  { slug: 'technical-pm',  label: 'Project Manager' },
  { slug: 'fullstack-dev', label: 'Full Stack Dev' },
]
