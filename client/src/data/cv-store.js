// ─────────────────────────────────────────────────────────────────────────────
// cv-store.js  —  THE ONLY FILE YOU NEED TO EDIT
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW IT WORKS
// ─────────────────────────────────────────────────────────────────────────────
// Each key in `cvStore` is a URL slug  →  /cv/<slug>
//
// Two kinds of entries:
//   PUBLIC  (noindex: false)  — shown in the version-switcher banner,
//                               Google can index them.
//   PRIVATE (noindex: true)   — NOT shown in banner, NOT indexed by Google.
//                               Share the URL directly with a specific recruiter.
//
// HOW TO ADD A NEW JOB-SPECIFIC VERSION
// ─────────────────────────────────────────────────────────────────────────────
// 1. Copy the template block at the bottom of this file.
// 2. Choose a slug:  company-role  (e.g. 'wix-pm', 'intel-data-analyst')
// 3. Adjust title, bio, skills, experience bullets for that role.
// 4. Set  noindex: true  so it stays private (not indexed by Google).
// 5. Save → git add . && git commit -m "add cv for <company>" && git push
//    Vercel will redeploy automatically in ~30 seconds.
//
// SHARED BASE DATA (contact, education, languages)
// ─────────────────────────────────────────────────────────────────────────────
// Edit these once — they apply to every version automatically.

const base = {
  name: 'David Monsonego',
  location: 'Israel',

  contact: {
    email: 'dudimonsonego@gmail.com',
    phone: '052-3594646',
    linkedin: 'https://linkedin.com/in/david-monsonego',
    github: 'https://github.com/dudimonsonego',
  },

  education: [
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
  ],

  languages: [
    { language: 'English', proficiency: 'Full professional proficiency' },
    { language: 'Hebrew',  proficiency: 'Native / bilingual proficiency' },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC VERSIONS  (shown in banner, indexable)
// ─────────────────────────────────────────────────────────────────────────────

const hrTech = {
  ...base,
  noindex: false,
  label: 'HR Technology',           // text shown in the switcher banner
  title: 'HR Technology & Solutions Specialist',
  bio: 'Analytical and impact-driven B.Sc. Computer Science graduate specializing in HR technology and digital transformation. Experienced in the full lifecycle of system implementation: from gathering business requirements and writing functional documentation to developing SQL-based backends and BI dashboards. Proven ability to transform complex business needs into smart, data-driven solutions and automated workflows. Highly proficient in bridging technical execution with global business goals.',
  skills: [
    'SQL', 'Power BI', 'Looker Studio', 'Tableau', 'ETL Processes', 'Advanced Excel',
    'API Integrations', 'Make', 'Google Apps Script',
    'JavaScript', 'TypeScript', 'React',
    'Cursor / Claude Code', 'Priority ERP', 'Docker', 'GitHub',
  ],
  experience: [
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
  ],
}

const technicalPm = {
  ...base,
  noindex: false,
  label: 'Project Manager',
  title: 'Technical Project Manager',
  bio: 'Results-oriented Technical Project Manager with a B.Sc. in Computer Science and hands-on experience leading end-to-end digital transformation initiatives. Skilled at bridging technical teams and business stakeholders, translating complex requirements into actionable roadmaps. Experienced in matrix environments with a strong track record of delivering data-driven systems under operational pressure.',
  skills: [
    'Project Lifecycle Management', 'Requirements Analysis', 'Functional Documentation',
    'Stakeholder Management', 'Matrix Leadership', 'Cross-functional Coordination',
    'SQL', 'Looker Studio', 'Power BI', 'ETL Processes',
    'API Integrations', 'Make', 'Priority ERP', 'Docker', 'GitHub',
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

const fullstackDev = {
  ...base,
  noindex: false,
  label: 'Full Stack Dev',
  title: 'Full Stack Developer',
  bio: 'B.Sc. Computer Science graduate with hands-on full-stack development experience, specialising in building data-driven applications and automating complex workflows. Proficient in JavaScript/TypeScript, React, and cloud-backed architectures (Supabase, AWS, Vercel). Experienced in translating real-world business problems into robust, scalable technical solutions and accelerating delivery with AI-assisted tooling.',
  skills: [
    'JavaScript', 'TypeScript', 'React', 'HTML / CSS',
    'SQL', 'Supabase', 'REST APIs', 'API Integrations',
    'Google Apps Script', 'Make', 'ETL Processes',
    'Looker Studio', 'Power BI', 'AWS', 'Vercel', 'Docker', 'GitHub',
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

// ─────────────────────────────────────────────────────────────────────────────
// PRIVATE / JOB-SPECIFIC VERSIONS  (noindex: true — not indexed by Google)
// ─────────────────────────────────────────────────────────────────────────────
// These don't show up in the switcher banner. Share the URL directly.
// URL for this example:  /cv/intel-automation-lead

const intelAutomationLead = {
  ...base,
  noindex: true,                          // keep off Google
  label: 'Intel — Automation Lead',       // shown only in the page title bar
  title: 'HR Automation & Systems Lead',
  bio: 'B.Sc. Computer Science graduate with deep experience designing and deploying automated HR workflows and data pipelines at scale. Proven ability to own the full delivery lifecycle — from requirements and architecture to implementation and stakeholder training. At ease working with cross-functional engineering and HR teams inside large, complex organisations.',
  skills: [
    'SQL', 'ETL Processes', 'Looker Studio', 'Power BI', 'Advanced Excel',
    'API Integrations', 'Make', 'Google Apps Script',
    'JavaScript', 'TypeScript', 'React', 'Supabase',
    'Cursor / Claude Code', 'Priority ERP', 'Docker', 'GitHub',
  ],
  experience: [
    {
      title: 'Technical Project Manager (HR & Ops)',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Designed and implemented automated ETL pipelines and Looker Studio dashboards that replaced manual HR reporting, reducing workload by 50%.',
        'Built a full-stack HR management application (React + Supabase) handling real-time personnel data for a multi-unit command.',
        'Led requirements-gathering sessions with senior stakeholders and translated them into technical specifications and delivery plans.',
        'Produced end-to-end functional documentation for automated workflows and handoff to non-technical operators.',
      ],
    },
    {
      title: 'Branch Manager & ERP Operations',
      company: 'Ivory Computers',
      year: '2013 – 2019',
      bullets: [
        'Automated sales and inventory workflows using Priority ERP integrations, significantly reducing manual errors.',
        'Managed technical interfaces between sales systems, procurement, and supply chain platforms.',
        'Trained and supervised multi-disciplinary teams on new system processes.',
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// STORE  —  add every new version here
// ─────────────────────────────────────────────────────────────────────────────
export const cvStore = {
  // Public role versions
  'hr-tech':       hrTech,
  'technical-pm':  technicalPm,
  'fullstack-dev': fullstackDev,

  // Private job-specific versions  ← paste new ones below this line
  'intel-automation-lead': intelAutomationLead,
}

// The slug shown when someone visits / or uses an unknown slug
export const defaultSlug = 'hr-tech'

// Only public versions (noindex: false) appear in the switcher banner
// Order here controls the order of buttons in the banner
export const bannerVersions = [
  { slug: 'hr-tech',       label: hrTech.label },
  { slug: 'technical-pm',  label: technicalPm.label },
  { slug: 'fullstack-dev', label: fullstackDev.label },
]

// ─────────────────────────────────────────────────────────────────────────────
// ✂  TEMPLATE — copy this block to add a new job-specific version
// ─────────────────────────────────────────────────────────────────────────────
//
// const companyRoleName = {
//   ...base,                         // inherits contact, education, languages
//   noindex: true,                   // keep off Google
//   label: 'Company — Role Name',    // shown in browser tab / title bar
//   title: 'Your tailored job title',
//   bio: 'One paragraph tailored to the specific job description.',
//   skills: [
//     // List skills most relevant to this role first
//   ],
//   experience: [
//     {
//       title: 'Your role title',
//       company: 'Your company',
//       year: '2023 – Present',
//       bullets: [
//         // 3-4 bullets emphasising what this employer cares about
//       ],
//     },
//   ],
// }
//
// Then add to cvStore:
//   'company-role-slug': companyRoleName,
// ─────────────────────────────────────────────────────────────────────────────
