// cvData.js
// Central data store for all CV versions.
// Each key in `cvVersions` is a URL slug (e.g. /cv/hr-tech).
// Shared pieces (contact, languages) are defined once and reused across versions.

const baseContact = {
  email: 'dudimonsonego@gmail.com',
  phone: '052-3594646',
  linkedin: 'https://linkedin.com/in/david-monsonego',
  github: 'https://github.com/dudimonsonego',
}

const baseLanguages = [
  { language: 'English', proficiency: 'Full professional proficiency' },
  { language: 'Hebrew', proficiency: 'Native / bilingual proficiency' },
]

const baseEducation = [
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

// ─── Version 1: HR Technology & Solutions Specialist ─────────────────────────
// Emphasises HRIS, BI dashboards, ETL, and automation tooling.
const hrTech = {
  name: 'David Monsonego',
  title: 'HR Technology & Solutions Specialist',
  location: 'Israel',
  bio: 'Analytical and impact-driven B.Sc. Computer Science graduate specializing in HR technology and digital transformation. Experienced in the full lifecycle of system implementation: from gathering business requirements and writing functional documentation to developing SQL-based backends and BI dashboards. Proven ability to transform complex business needs into smart, data-driven solutions and automated workflows. Highly proficient in bridging technical execution with global business goals.',
  contact: baseContact,
  skills: [
    'SQL',
    'Power BI',
    'Looker Studio',
    'Tableau',
    'ETL Processes',
    'Advanced Excel',
    'API Integrations',
    'Make',
    'Google Apps Script',
    'JavaScript',
    'TypeScript',
    'React',
    'Cursor / Claude Code',
    'Priority ERP',
    'Docker',
    'GitHub',
  ],
  experience: [
    {
      title: 'Technical Project Manager (HR & Ops)',
      company: 'Reserve Duty IDF — Alexandroni Brigade',
      year: '2023 – Present',
      bullets: [
        'Led large-scale digital transformation of unit HR systems through comprehensive requirements analysis with senior command.',
        'Developed a full-stack HR management application using Cursor/Claude Code and Supabase for secure, real-time data storage.',
        'Built automated ETL pipelines and Looker Studio dashboards, reducing administrative workload by 50%.',
        'Produced technical documentation and process designs to streamline high-pressure operational workflows.',
      ],
    },
    {
      title: 'Branch Manager & ERP Operations',
      company: 'Ivory Computers',
      year: '2013 – 2019',
      bullets: [
        'Leveraged Priority ERP to streamline sales and inventory management, significantly reducing operational errors.',
        'Collaborated with business clients to translate complex technical needs into tailored hardware and software solutions.',
        'Managed procurement, operations, and supply chain interfaces to ensure high-quality technical service.',
        'Supervised multi-disciplinary teams, maintaining rigorous service standards and operational performance.',
      ],
    },
  ],
  education: baseEducation,
  languages: baseLanguages,
}

// ─── Version 2: Technical Project Manager ────────────────────────────────────
// Emphasises stakeholder management, project lifecycle, and cross-functional leadership.
const technicalPm = {
  ...hrTech,
  title: 'Technical Project Manager',
  bio: 'Results-oriented Technical Project Manager with a B.Sc. in Computer Science and hands-on experience leading end-to-end digital transformation initiatives. Skilled at bridging technical teams and business stakeholders, translating complex requirements into actionable roadmaps. Experienced in matrix environments with a strong track record of delivering data-driven systems under operational pressure.',
  skills: [
    'Project Lifecycle Management',
    'Requirements Analysis',
    'Functional Documentation',
    'Stakeholder Management',
    'Matrix Leadership',
    'Cross-functional Coordination',
    'SQL',
    'Looker Studio',
    'Power BI',
    'ETL Processes',
    'API Integrations',
    'Make (Integromat)',
    'Priority ERP',
    'Docker',
    'GitHub',
    'Linux / Windows CLI',
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

// ─── Version 3: Full Stack Developer ─────────────────────────────────────────
// Emphasises JavaScript stack, cloud backends, and building data-driven applications.
const fullstackDev = {
  ...hrTech,
  title: 'Full Stack Developer',
  bio: 'B.Sc. Computer Science graduate with hands-on full-stack development experience, specialising in building data-driven applications and automating complex workflows. Proficient in JavaScript/TypeScript, React, and cloud-backed architectures (Supabase, AWS, Vercel). Experienced in translating real-world business problems into robust, scalable technical solutions and accelerating delivery with AI-assisted tooling.',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML / CSS',
    'SQL',
    'Supabase',
    'REST APIs',
    'API Integrations',
    'Google Apps Script',
    'Make (Integromat)',
    'ETL Processes',
    'Looker Studio',
    'Power BI',
    'AWS',
    'Vercel',
    'Docker',
    'GitHub',
    'Linux / Windows CLI',
  ],
  experience: [
    {
      // Reframed title to highlight the development role
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

// ─── Exported versions map ────────────────────────────────────────────────────
// Keys are the URL slugs used in /cv/:role
export const cvVersions = {
  'hr-tech': hrTech,
  'technical-pm': technicalPm,
  'fullstack-dev': fullstackDev,
}

// Fallback used when an unknown slug is requested
export const defaultVersion = 'hr-tech'
