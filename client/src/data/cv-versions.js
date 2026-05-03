// cv-versions.js
// Stores multiple CV versions keyed by a UUID.
//
// Data model per version:
// - id: unique UUID (string)
// - slug: readable unique slug (string) used in URLs: /cv/<slug>
// - created_at: ISO date string
// - company_name: string
// - company_website: string
// - role_title: string
// - status: string (default: "Sent")
// - content: resume object used by the UI (ProfileHeader/About/Experience/etc.)

const baseContent = {
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

  projects: [
    {
      name: 'IDF Unit HR Management System',
      tech: ['React', 'Supabase', 'Looker Studio', 'Cursor / Claude Code'],
      year: '2023 – Present',
      description:
        'Full-stack personnel management application built for a reserve-duty IDF unit. Features real-time data storage, role-based access, and automated reporting dashboards that replaced a fully manual process and reduced administrative workload by 50%.',
      link: null,
    },
    {
      name: 'Resume Portfolio Website',
      tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
      year: '2025',
      description:
        'Dynamic multi-version portfolio site with per-company/per-role CV routing by UUID, Google Analytics 4, and automated deployment via GitHub. Each CV version is privately shareable with individual recruiters.',
      link: 'https://portfolio-starter-client.vercel.app',
    },
  ],

  languages: [
    { language: 'English', proficiency: 'Full professional proficiency' },
    { language: 'Hebrew', proficiency: 'Native / bilingual proficiency' },
  ],
}

// Versions are stored in a flat array to make JSON-like editing easy.
// At runtime we index them by id for fast lookup.
export const cvVersions = [
  {
    id: '148af4f0-3845-46be-9970-67c9901aa2cc',
    slug: 'elbit-verification-engineer-ry0',
    created_at: '2026-05-03T12:00:00.000Z',
    company_name: 'Elbit',
    company_website: 'https://elbitsystems.com',
    role_title: 'Verification Engineer',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Elbit — Verification Engineer',
      title: 'Verification Engineer',
      bio:
        'A B.Sc. in Computer Science graduate with a solid academic foundation in hardware fundamentals, including Verilog and digital systems. Experienced in full-stack software development, technical operations, and automation. Quick learner with practical skills in C and OOP concepts, seeking to leverage academic knowledge and analytical skills in an entry-level hardware verification role.',
      education: [
        {
          degree: 'Project Management Course',
          institution: 'TechTroop / Elevation',
          year: '2025 – 2026',
          description: 'Project lifecycle, matrix leadership, and AI-driven data visualization.',
        },
        {
          degree: 'B.Sc. Computer Science',
          institution: 'University of Haifa',
          year: '2020 – 2024',
          bullets: [
            'Core hardware coursework: Digital Systems, Introduction to Hardware (Verilog).',
            'Core software coursework: Data Structures, Algorithms, C Programming.',
          ],
        },
      ],
      skills: [
        'Verilog (academic)',
        'Digital systems design (academic)',
        'Computer architecture (academic)',
        'C',
        'Python',
        'JavaScript',
        'TypeScript',
        'Java',
        'SQL',
        'PostgreSQL',
        'Looker Studio',
        'Advanced Excel',
        'Linux CLI & shell scripting',
        'Docker',
        'GitHub',
        'Cursor / Claude Code',
        'Make',
        'Zapier',
        'Google Apps Script',
      ],
      experience: [
        {
          title: 'Technical Project Manager (HR & Operations)',
          company: 'Reserve Duty IDF — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Led the digital transformation of unit personnel systems, reducing administrative workload by 50% through workflow automation.',
            'Developed a full-stack internal management application using Cursor (Claude Code), React, and Supabase (PostgreSQL).',
            'Created automated data pipelines and interactive dashboards using Looker Studio and Google Sheets to improve reporting accuracy.',
            'Optimized operational efficiency by integrating customized scripts and digital tools to streamline processes.',
          ],
        },
        {
          title: 'Branch Manager & ERP Operations',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily technical operations and workflows using Priority ERP to ensure system consistency.',
            'Handled inventory management and logistics, maintaining high data accuracy and reducing operational errors.',
            'Directly supervised and trained a team of technicians, ensuring high service standards.',
          ],
        },
      ],
      projects: [
        {
          name: 'Interactive CV & portfolio',
          tech: ['React', 'Vite', 'Wix Design System', 'Tailwind CSS', 'Vercel'],
          description:
            'Multi-version resume site with readable per-role links for sharing tailored CVs with recruiters and hiring teams.',
          link: null,
        },
        {
          name: 'IDF unit personnel systems (internal)',
          tech: ['React', 'Supabase (PostgreSQL)', 'Looker Studio', 'Automation'],
          description:
            'Full-stack internal application and reporting workflows supporting digital transformation and reduced manual workload.',
          link: null,
        },
      ],
    },
  },
  {
    id: '865e425b-bf24-4f74-8cfe-7f276d4a2195',
    slug: 'iscar-software-engineer-axp',
    created_at: '2026-05-03T00:00:00.000Z',
    company_name: 'Iscar',
    company_website: 'https://www.iscar.com',
    role_title: 'Software Engineer',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Iscar — Software Engineer',
      title: 'Software Engineer',
      bio:
        'B.Sc. in Computer Science graduate with hands-on software development experience and a background in enterprise operations and ERP workflows. Skilled in building practical tools, writing complex SQL queries, and using JavaScript to automate internal workflows. Experienced in analyzing operational bottlenecks and implementing technical solutions to improve system performance. Quick learner eager to expand into new technologies and enterprise platforms.',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'React',
        'Java',
        'C',
        'Priority ERP (expert)',
        'SQL',
        'PostgreSQL',
        'Looker Studio',
        'Power BI',
        'Advanced Excel',
        'API integrations',
        'GitHub',
        'Docker',
        'Linux / Windows CLI',
        'Shell scripting',
      ],
      experience: [
        {
          title: 'Technical Project Manager (HR & Operations)',
          company: 'Reserve Duty IDF — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Built a full-stack HR management application using Cursor, deployed on Vercel with a Supabase (PostgreSQL) backend.',
            'Automated data pipelines and built interactive dashboards using Google Sheets and Looker Studio, reducing manual reporting time.',
            'Led a digital transformation initiative for internal systems, cutting administrative workloads by 50% through custom-built workflows.',
            'Optimized routine operations by writing scripts that improved cross-team data sharing and day-to-day coordination.',
          ],
        },
        {
          title: 'Branch Manager & ERP Operations',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily branch workflows inside Priority ERP, analyzing and improving overall process efficiency.',
            'Handled inventory management and supply chain synchronization through Priority ERP, maintaining accurate stock levels and reducing input errors.',
            'Supervised team performance, standardizing operational routines and ensuring alignment with organization-wide goals.',
          ],
        },
      ],
      projects: [
        {
          name: 'IDF Unit HR Management System',
          tech: ['React', 'Supabase (PostgreSQL)', 'Looker Studio', 'Google Sheets', 'Vercel', 'Cursor'],
          description:
            'Full-stack personnel management application with secure data storage, role-based access, and automated reporting workflows that replaced manual processes and reduced administrative overhead.',
          link: null,
        },
        {
          name: 'Resume Portfolio Website',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
          description:
            'Dynamic resume portfolio with role-specific CV routing, analytics, and automated deployments—useful for sharing tailored versions with recruiters.',
          link: 'https://portfolio-starter-client.vercel.app',
        },
      ],
    },
  },
  {
    id: '7795e9f0-3e7e-4d62-81df-a6e89b905db2',
    slug: 'nvidia-qa-engineer-w12',
    created_at: '2026-05-01T14:14:18.034Z',
    company_name: 'NVIDIA',
    company_website: 'https://www.nvidia.com',
    role_title: 'QA Engineer',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      title: 'QA Engineer',
      bio: 'Write a short tailored summary for NVIDIA.',
      skills: [],
      experience: [],
    },
  },
  {
    id: '55ab4ee6-e9a8-40ac-aab1-eb17db6cd798',
    slug: 'wix-tpm-j8q',
    created_at: '2026-05-01T14:03:25.028Z',
    company_name: 'Wix',
    company_website: 'https://www.wix.com',
    role_title: 'TPM',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      title: 'TPM',
      bio: 'Write a short tailored summary for Wix.',
      skills: [],
      experience: [],
    },
  },
  {
    id: '7f56990d-6c39-45d6-bc4b-45ed5194cf13',
    slug: 'intel-hr-automation-lead-x8y',
    created_at: '2026-05-01T14:41:00.000Z',
    company_name: 'Intel',
    company_website: 'https://www.intel.com',
    role_title: 'HR Automation Lead',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      title: 'HR Automation Lead',
      bio: 'Write a short tailored summary for Intel.',
      skills: [],
      experience: [],
    },
  },
  {
    id: '8b6d1f9e-3b54-4f25-8a0e-51a3d9b6c2b1',
    slug: 'general-hr-technology-solutions-specialist-p3k',
    created_at: '2026-05-01T14:41:00.000Z',
    company_name: 'General',
    company_website: '',
    role_title: 'HR Technology & Solutions Specialist',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: false,
      title: 'HR Technology & Solutions Specialist',
      bio:
        'Analytical and impact-driven B.Sc. Computer Science graduate specializing in HR technology and digital transformation. Experienced in the full lifecycle of system implementation: from gathering business requirements and writing functional documentation to developing SQL-based backends and BI dashboards. Proven ability to transform complex business needs into smart, data-driven solutions and automated workflows. Highly proficient in bridging technical execution with global business goals.',
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
    },
  },
]

export const cvVersionsById = Object.fromEntries(cvVersions.map((v) => [v.id, v]))
export const cvVersionsBySlug = Object.fromEntries(cvVersions.map((v) => [v.slug, v]))

export function getCvVersionById(id) {
  if (!id) return null
  return cvVersionsById[id] ?? null
}

export function getCvVersionBySlug(slug) {
  if (!slug) return null
  return cvVersionsBySlug[slug] ?? null
}

