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
    phone: '052-359-4646',
    linkedin: 'https://linkedin.com/in/david-monsonego',
    github: 'https://github.com/dudimonsonego',
  },

  education: [
    {
      degree: 'Wix Jumpstart — Reservists Tech Training',
      institution: 'Wix & Milumentor',
      year: '2026',
      description:
        'Industry-focused program bridging academic theory and professional R&D workflows. Bi-weekly in-person workshops at Wix Campus (Tel Aviv) covering React, AI agent workflows (LangChain / Claude API), API integration, Python automation, CI/CD, and mock technical interviews.',
      link: 'https://www.wixjumpstart.com/',
      linkLabel: 'Program website',
    },
    {
      degree: 'TechTroop Project Management Course',
      institution: 'Elevation',
      year: '2025 – 2026',
      description: 'Project lifecycle, matrix leadership, and AI-driven data visualization.',
      link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
      linkLabel: 'Course page',
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
      name: 'AssetFlow',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
      year: '2026',
      description:
        'Full-stack B2B SaaS for hardware lifecycle management — multi-tenant architecture with PostgreSQL Row Level Security, asset CRUD, warranty monitoring, automated cron jobs, and AI-powered category suggestions.',
      link: 'https://github.com/DudiMonsonego/AssetFlow',
    },
    {
      name: 'IDF Unit HR Management System',
      tech: ['React', 'Supabase', 'Looker Studio', 'Cursor / Claude Code'],
      year: '2023 – Present',
      description:
        'Full-stack personnel management application built for a reserve-duty IDF unit. Features real-time data storage, role-based access, and automated reporting dashboards that replaced a fully manual process and reduced administrative workload by 50%.',
      link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
    },
    {
      name: 'Resume Portfolio Website',
      tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
      year: '2025',
      description:
        'Dynamic multi-version portfolio site with per-role CV routing, Google Analytics 4, and automated deployment via GitHub. Each CV version is privately shareable with individual recruiters.',
      link: 'https://github.com/DudiMonsonego/portfolio-starter',
    },
  ],

  languages: [
    { language: 'English', proficiency: 'High proficiency' },
    { language: 'Hebrew', proficiency: 'Native proficiency' },
  ],
}

// Versions are stored in a flat array to make JSON-like editing easy.
// At runtime we index them by id for fast lookup.
export const cvVersions = [
  {
    id: 'd4e8f1a2-6c3b-4d9e-9f0a-1b2c3d4e5f6a',
    slug: 'abra-ai-adoption-specialist-a7k',
    created_at: '2026-06-01T00:00:00.000Z',
    company_name: 'Abra',
    company_website: 'https://www.abra-it.com',
    role_title: 'AI Adoption Specialist',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Abra — AI Adoption Specialist',
      title: 'AI Adoption Specialist',
      bio:
        'Technological Project Manager and B.Sc. Computer Science graduate with hands-on expertise driving digital transformation and organizational AI adoption. Proven at bridging complex technology and business workflows—building prompt libraries, secure data pipelines, and automated workflows that cut operational load while meeting strict data-privacy requirements. A service-oriented instructor who trains diverse audiences (from frontline staff to senior leadership), champions daily use of AI dev tools (Cursor, Claude Code), and translates field needs into measurable value—aligned with helping enterprises implement tailored AI solutions at scale.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      projects: [
        {
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio', 'Cursor / Claude Code'],
          year: '2023 – Present',
          description:
            'Full-stack personnel management application for a reserve-duty unit—secure data storage, role-based access, and automated reporting dashboards that replaced manual HR workflows and reduced administrative workload by 50%.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'Text-to-SQL RAG Agent',
          tech: ['Python', 'LangChain (LCEL)', 'Google Gemini', 'SQLite', 'SQLAlchemy', 'pandas', 'Streamlit', 'pytest'],
          year: '2026',
          description:
            'A production-style, local natural-language interface for querying CSV-backed data. Upload a dataset, ask questions in plain English, and receive agentic reasoning, generated SQL, and a grounded natural-language answer—with read-only SQL guardrails, schema grounding, few-shot prompting, and Pydantic-validated structured outputs.',
          link: 'https://github.com/DudiMonsonego/SQL_Agent',
          liveLink: null,
        },
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description:
            'Full-stack B2B SaaS for hardware lifecycle management—multi-tenant architecture with PostgreSQL Row Level Security, asset tracking, warranty monitoring, and AI-powered category suggestions.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
      ],
      skills: [
        'AI & Automation: Advanced Prompt Engineering, ChatGPT, Claude, Gemini, Cursor, Claude Code, Make, Zapier, API Integration, Airtable, Google Apps Script',
        'Data & Analytics: SQL, Looker Studio, Power BI, Advanced Excel, Supabase, Data Privacy & Sensitivity',
        'Frameworks & Systems: Priority ERP, Workflow Optimization, Knowledge Management, System Implementation, Technical Training & Instruction',
        'Programming: Python, JavaScript, TypeScript, React, Java, C, GitHub',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Developer',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Led large-scale digital transformation and secure implementation of unit information systems, cutting administrative workload by 50% through AI-driven automation.',
            'Championed daily adoption of advanced AI development tools (Cursor, Claude Code) and productivity workflows, optimizing cross-team coordination in a high-pressure environment.',
            'Engineered secure data pipelines and automated workflows using Supabase, Google Sheets, and Looker Studio, maintaining strict compliance with information security and sensitive personnel data protocols.',
            'Served as the focal point for technological implementation across the unit—mentoring commanders and training staff on digital tools while simplifying complex data for senior command decision-making.',
          ],
        },
        {
          title: 'Branch & Technical Operations Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily technical operations and personnel workflows utilizing Priority ERP, optimizing supply chain, inventory control, and operational accuracy.',
            'Supervised, coached, and guided a multi-disciplinary team, establishing high-quality service standards, patience-driven customer success, and clear technical instruction.',
            'Translated complex hardware and software specifications into simple, tailored solutions for specific client and business needs.',
            'Evaluated and deployed internal technical tool upgrades, mitigating operational risks and driving user adoption across the branch.',
          ],
        },
      ],
      languages: [
        { language: 'English', proficiency: 'Full professional proficiency' },
        { language: 'Hebrew', proficiency: 'Native proficiency' },
      ],
    },
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    slug: 'general',
    created_at: '2026-05-17T00:00:00.000Z',
    company_name: 'General',
    company_website: '',
    role_title: 'General CV',
    status: 'Active',
    content: {
      ...baseContent,
      noindex: false,
      label: 'General CV',
      title: 'Technical Project Manager & Software Developer',
      bio:
        'Results-driven B.Sc. Computer Science and Project Management graduate with a strong technical background and a data-driven approach to solving complex operational challenges. Proven track record in leading digital transformation initiatives, optimizing cross-functional workflows, and deploying full-stack and AI-driven automation solutions. Adept at bridging the gap between technical development and business goals to deliver high-impact results in high-pressure environments.',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'Java',
        'C',
        'SQL',
        'Looker Studio',
        'Power BI',
        'Advanced Excel',
        'Cursor',
        'Claude Code',
        'Make',
        'Zapier',
        'API Integration',
        'Airtable',
        'Google Apps Script',
        'Docker',
        'Linux & Windows (CLI & Shell Scripting)',
        'Priority ERP',
        'GitHub',
        'AWS (familiarity)',
        'VMware (familiarity)',
        'Project Management',
        'Agile / Scrum',
        'Lean Management',
        'Digital Transformation',
        'Process Optimization',
      ],
      experience: [
        {
          title: 'Technical Project Manager (Operations & HR)',
          company: 'IDF Reserve Duty — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Led a large-scale digital transformation of unit personnel management systems, cutting administrative workload by 50% through workflow automation.',
            'Developed and deployed a full-stack HR application using React and Vercel, integrated with a Supabase (PostgreSQL) backend and engineered utilizing advanced AI development environments (Cursor / Claude Code).',
            'Engineered automated data pipelines and interactive dashboards using Looker Studio and Google Sheets, significantly accelerating reporting speed and data accuracy for senior leadership decision-making.',
            'Optimized operational efficiency by embedding custom scripts and digital tools, enhancing cross-team collaboration and streamlining end-to-end reporting processes in a high-pressure environment.',
          ],
        },
        {
          title: 'Branch Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed end-to-end branch operations and workflow optimization using Priority ERP, driving organizational efficiency and cost-effective resource management.',
            'Onboarded and mentored new employees across all regional branches, establishing standardized training practices and ensuring operational alignment with corporate procedures.',
            'Streamlined inventory tracking and resource allocation (BOM) within the enterprise system, ensuring high data accuracy and minimizing operational errors.',
            'Led and mentored a cross-functional team, fostering operational excellence, improving service delivery standards, and consistently achieving organizational targets.',
          ],
        },
      ],
    },
  },
  {
    id: 'd7c2e4f8-1a3b-4c5d-9e0f-2b4a6c8d0e1f',
    slug: 'elbit-technical-manager-tm0',
    created_at: '2026-05-26T00:00:00.000Z',
    company_name: 'Elbit',
    company_website: 'https://elbitsystems.com',
    role_title: 'Technical Manager',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Elbit — Technical Manager',
      title: 'Technical Manager',
      bio:
        'Certified Project Manager and Computer Science graduate (B.Sc.) with a robust technical foundation and hands-on experience leading complex, multidisciplinary operations. Proven track record in matrix structures, cross-functional leadership, and driving end-to-end systems optimization within military and high-pressure operational environments—transferable to defense and aerospace technical management. Skilled at aligning high-level requirements with technical design and execution. Seeking to contribute as a Technical Manager at Elbit.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      skills: [
        'Technical Project Management',
        'Matrix Leadership',
        'Agile',
        'Lean',
        'Requirements & Design',
        'Systems Architecture',
        'Resource & Budget Control',
        'SQL',
        'Looker Studio',
        'Power BI',
        'Advanced Excel',
        'Priority ERP',
        'Python',
        'JavaScript',
        'TypeScript',
        'Data Pipelines',
        'API Integrations',
        'Cursor / Claude Code',
        'GitHub',
      ],
      experience: [
        {
          title: 'Technical Project Manager (Operations & HR)',
          company: 'IDF Reserve Duty — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Managed large-scale systems modernization and digital transformation, cutting administrative workload by 50%.',
            'Directed the full project lifecycle—requirements, design, testing, and deployment—of a custom full-stack application.',
            'Acted as primary technical liaison between senior command, operational departments, and deployment teams.',
            'Designed automated data pipelines and integrated telemetry dashboards using Looker Studio for project control.',
          ],
        },
        {
          title: 'Branch & Account Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Controlled daily technical workflows, supervised complex inventory management, and streamlined processes using Priority ERP.',
            'Monitored system data validation and resource allocation to align with organizational schedule requirements.',
            'Supervised and mentored a multidisciplinary branch team, maintaining high-quality service standards.',
          ],
        },
      ],
    },
  },
  {
    id: 'e8f1a2b3-c4d5-6789-abcd-ef0123456789',
    slug: 'fastsimon-application-engineer-fs9',
    created_at: '2026-05-26T12:00:00.000Z',
    company_name: 'Fast Simon',
    company_website: 'https://www.fastsimon.com',
    role_title: 'Application Engineer',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Fast Simon — Application Engineer',
      title: 'Application Engineer',
      bio:
        'Computer Science graduate (B.Sc.) and certified Project Manager with a strong technical background and hands-on experience in web development and automation. Fast learner and independent problem solver with a proven track record of managing technical operations, fixing system bottlenecks, and handling customer-facing environments. Experienced in working with JavaScript, TypeScript, and React to build practical, real-world tools.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description:
            'Intensive training in modern software methodologies and scalable architecture.',
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description:
            'Project lifecycle, matrix leadership, budget control, and predictive analytics.',
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
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
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description:
            'Full-stack B2B SaaS for hardware lifecycle management — multi-tenant PostgreSQL with Row Level Security, asset tracking, warranty monitoring, and automated cron jobs.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio'],
          year: '2023 – Present',
          description: 'Full-stack personnel management application for a reserve-duty IDF unit.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'Portfolio',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel'],
          year: '2025',
          description: 'Multi-version CV site with per-role routing and private recruiter links.',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
        },
      ],
      skills: [
        'Frontend: JavaScript, TypeScript, React, HTML, CSS',
        'Databases & Analytics: SQL, Supabase (PostgreSQL), Looker Studio, Power BI, Excel',
        'Automation & Tools: Cursor, Claude Code, Make, Zapier, API Integration, GitHub',
        'Systems & Ops: Docker, Linux, Windows, Priority ERP',
      ],
      experience: [
        {
          title: 'Technical Project Manager (HR & Ops)',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Built a full-stack web application from scratch using React, TypeScript, and Supabase (PostgreSQL) to manage unit data.',
            'Cut administrative workload by 50% by designing and implementing automated workflows and custom scripts.',
            'Created automated data pipelines and interactive Looker Studio dashboards to fix reporting delays and ensure data accuracy.',
            'Handled real-time technical issues and troubleshooting under pressure, adapting quickly to changing operational needs.',
          ],
        },
        {
          title: 'Branch & Account Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily technical operations and inventory using Priority ERP, reducing system errors and improving team efficiency.',
            'Solved complex technical and service issues for customers daily, maintaining high service standards.',
            'Led and trained a local team, with a focus on improving technical workflows and software adoption.',
          ],
        },
      ],
    },
  },
  {
    id: 'a9b3c7d1-e2f4-5678-90ab-cdef12345678',
    slug: 'checkpoint-rd-operations-cp9',
    created_at: '2026-05-26T14:00:00.000Z',
    company_name: 'Check Point',
    company_website: 'https://www.checkpoint.com',
    role_title: 'R&D Operations',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Check Point — R&D Operations',
      title: 'R&D Operations Specialist',
      bio:
        'B.Sc. Computer Science graduate and certified Project Manager with a strong technical background and hands-on experience in operations, automation, and tech problem-solving. Experienced in building and monitoring data pipelines, automating workflows, and fixing issues in live environments. Skilled at working under pressure, managing multiple tasks, and collaborating with different teams to get things done. Looking to bring a proactive, "can-do" approach to the R&D Operations Specialist role.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description: 'Intensive training in modern software methodologies and scalable architecture.',
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: 'Project lifecycle, matrix leadership, budget control, and predictive analytics.',
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
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
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio'],
          year: '2023 – Present',
          description: 'Full-stack personnel management application for a reserve-duty IDF unit.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description:
            'Full-stack B2B SaaS for hardware lifecycle management — multi-tenant PostgreSQL with Row Level Security, asset tracking, warranty monitoring, and automated cron jobs.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'Resume Portfolio Website',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel'],
          year: '2025',
          description:
            'Multi-version CV site with per-role routing and private shareable CV links (/cv/:slug). Includes a serverless API and automated deployments.',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
        },
      ],
      skills: [
        'Programming & Scripting: Python, JavaScript, TypeScript, React, Java, C',
        'Automation & AI Tools: Cursor, Claude Code, Make, Zapier, API Integration, Airtable, Google Apps Script',
        'Data & Analytics: SQL, Data Pipelines, Looker, Power BI, Advanced Excel',
        'Infrastructure & Operations: Docker, Linux & Windows (CLI & Shell Scripting), GitHub, Priority ERP, familiarity with AWS & VMware',
        'Methodologies: Operations, Troubleshooting, Process Optimization, Project Management',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Developer',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Built and deployed a full-stack HR and operations app using Cursor (Claude Code) with a Supabase (PostgreSQL) backend, hosted on Vercel.',
            'Created automated data pipelines and interactive dashboards (Looker Studio, Google Sheets) that made data tracking and reporting much faster and more accurate.',
            'Cut administrative workload by 50% across the unit by automating complex, manual workflows and integrating modern digital tools.',
            'Monitored systems and solved technical problems in a high-pressure environment, making sure daily operations ran smoothly without interruptions.',
            'Worked closely with cross-functional teams and command ranks to align technical solutions with operational goals.',
          ],
        },
        {
          title: 'Branch Manager & Account Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily branch operations, technical workflows, and key client accounts, focusing on troubleshooting real-time issues, service quality, and efficiency.',
            'Optimized logistics and inventory workflows using Priority ERP, minimizing data errors and ensuring accurate stock alignment.',
          ],
        },
      ],
    },
  },
  {
    id: 'c2d7a1f4-83e4-4a1c-9b6d-1b2c3d4e5f60',
    slug: 'sap-project-manager-sp9',
    created_at: '2026-05-28T11:30:00.000Z',
    company_name: 'SAP',
    company_website: 'https://www.sap.com',
    role_title: 'Project Manager',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'SAP — Project Manager',
      title: 'Project Manager',
      bio:
        'Results-oriented Project Management graduate with a B.Sc. in Computer Science, blending technical proficiency with data-driven operational control. Proven track record in leading cross-functional digital transformations, optimizing workflows, and managing multi-party stakeholder communication. Proficient in Agile methodologies, budgeting, and analytics tools including Advanced Excel and Power BI. Passionate about leveraging emerging AI solutions to drive operational excellence and long-term customer success as a trusted advisor.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description: null,
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
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
          name: 'Text-to-SQL RAG Agent',
          tech: ['Python', 'LangChain (LCEL)', 'Google Gemini', 'SQLite', 'SQLAlchemy', 'pandas', 'Streamlit', 'pytest'],
          year: '2026',
          description:
            'A production-style, local, and cost-free natural-language interface for querying CSV-backed data. Upload a dataset, ask questions in plain English, and receive agentic reasoning, generated SQL, and a grounded natural-language answer. Implements read-only SQL guardrails, schema grounding, few-shot prompting, and Pydantic-validated structured outputs (thought, sql_query, answer).',
          link: 'https://github.com/DudiMonsonego/SQL_Agent',
          liveLink: null,
        },
        {
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio'],
          year: '2023 – Present',
          description: 'Full-stack personnel management application for a reserve-duty IDF unit.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description: 'Full-stack B2B SaaS for hardware lifecycle management.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'Resume Portfolio Website',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel'],
          year: '2025',
          description:
            'Multi-version CV site with per-role routing and private shareable CV links (/cv/:slug).',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
        },
      ],
      skills: [
        'Management & Methodologies: Project Management, Agile, Risk Management, Budget/Resource Allocation, Process Optimization, Digital Transformation',
        'Data & Analytics: Advanced Excel, SQL, Looker Studio, Power BI, Data-Driven Reporting',
        'Automation & Emerging Tech: Artificial Intelligence (AI), Cursor, Claude Code, Make, Zapier, API Integration, Google Apps Script',
        'Programming & Infrastructure: Python, JavaScript, TypeScript, React, Java, C, Docker, GitHub, Priority ERP',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Developer',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Led a large-scale digital transformation of unit personnel systems, acting as a trusted coordinator across multi-party delivery teams to cut administrative workload by 50% through process automation (Make, Zapier) and workflow optimization.',
            'Oversaw sub-projects from initiation to closure, managing backlogs and milestones by engineering real-time data pipelines (Google Sheets, Looker Studio) to deliver clear, data-driven status updates to senior command.',
            'Developed and deployed a custom full-stack management application using Cursor/Claude Code on Vercel with a Supabase (PostgreSQL) backend to secure real-time data tracking and mitigate operational risks under tight schedules.',
          ],
        },
        {
          title: 'Branch Manager & Account Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Coordinated cross-functional activities across procurement, logistics, and supply chain departments using Priority ERP to optimize budget implementation, track bills of materials (BOM), and ensure accurate operational delivery.',
            'Led, supervised, and mentored multi-disciplinary teams to sustain high-quality service standards, driving operational consistency and securing excellent client acceptance in alignment with corporate goals.',
          ],
        },
      ],
      languages: [
        { language: 'English', proficiency: 'High proficiency' },
        { language: 'Hebrew', proficiency: 'Native proficiency' },
      ],
    },
  },
  {
    id: '9a2c7b14-6b4c-4a90-b3f5-2d0e7b4a1c9e',
    slug: 'microsoft-software-quality-engineering-ms9',
    created_at: '2026-05-28T12:00:00.000Z',
    company_name: 'Microsoft',
    company_website: 'https://www.microsoft.com',
    role_title: 'Software Quality Engineering',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Microsoft — Software Quality Engineering',
      title: 'Software Quality Engineering',
      bio:
        'Proficient Computer Science B.Sc. graduate and Project Management specialist with a strong technical foundation in full-stack development, distributed data architectures, and intelligent test automation. Experienced in designing end-to-end cloud-native applications, engineering robust data pipelines, and implementing automated testing frameworks to validate complex integration scenarios. Proven track record of driving digital transformation by embedding automated validation, API testing, and telemetry-driven scripts into mission-critical operations. Skilled in isolating root causes in high-pressure environments, collaborating across engineering layers, and delivering reliable, data-first solutions.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description: null,
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
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
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio'],
          year: '2023 – Present',
          description: 'Full-stack personnel management application for a reserve-duty IDF unit.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description: 'Full-stack B2B SaaS for hardware lifecycle management.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'Text-to-SQL RAG Agent',
          tech: ['Python', 'LangChain (LCEL)', 'Google Gemini', 'SQLite', 'SQLAlchemy', 'pandas', 'Streamlit', 'pytest'],
          year: '2026',
          description:
            'Local natural-language interface for querying CSV-backed data (CSV → SQLite). Exposes thought → SQL → answer with read-only SQL validation and structured outputs.',
          link: 'https://github.com/DudiMonsonego/SQL_Agent',
          liveLink: null,
        },
      ],
      skills: [
        'Programming & Test Automation: Python (PyTest), JavaScript, TypeScript, React, Java, C, Google Apps Script',
        'Data & Analytics Platform: SQL, PostgreSQL, Power BI, Looker Studio, Advanced Excel',
        'Infrastructure, Cloud & Ops: Docker, GitHub, Vercel, Supabase, Linux & Windows (CLI & Shell Scripting), familiarity with AWS',
        'Automation, Integration & Testing: Postman (API Testing), Cursor, Claude Code, API Integration, Make, Airtable',
        'Methodologies: Distributed Systems Validation, End-to-End Testing Integration, Root Cause Analysis, Agile',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Developer',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Designed and implemented a scalable, full-stack personnel management application using Cursor (Claude Code), deployed via Vercel with a Supabase (PostgreSQL) cloud backend for real-time, secure data validation.',
            'Engineered automated data pipelines, validation models, and integration workflows using Postman for API testing and custom scripts, cutting administrative and operational workload by 50%.',
            'Architected and monitored automated testing logic using PyTest and custom CLI/Shell configurations to isolate distributed system issues, ensure cross-workload interoperability, and achieve 100% data reporting accuracy.',
            'Partnered closely with technical units and operational stakeholders to embed reliability and performance tracking early in the lifecycle (Shift-Left), enabling faster, more confident system deployment under high-pressure conditions.',
          ],
        },
        {
          title: 'Branch & Technical Operations Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Optimized technical operations and end-to-end workflows utilizing Priority ERP, executing systematic root-cause analysis on inventory and configuration errors to ensure full system consistency.',
            'Supervised cross-functional team performance and aligned business requirements with technical execution, minimizing operational risk and driving high-quality service standards.',
          ],
        },
      ],
      languages: [
        { language: 'English', proficiency: 'High proficiency' },
        { language: 'Hebrew', proficiency: 'Native proficiency' },
      ],
    },
  },
  {
    id: 'b4e8c2a1-7f3d-4b9e-8c2a-1d4f6a8b0c2e',
    slug: 'rambam-ai-developer-rb9',
    created_at: '2026-05-28T15:00:00.000Z',
    company_name: 'Rambam',
    company_website: 'https://www.rambam.org.il',
    role_title: 'AI Developer',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Rambam — AI Developer',
      title: 'AI Developer',
      bio:
        'B.Sc. in Computer Science and Project Management graduate, leveraging a strong technical foundation and a data-driven mindset. Hands-on experience in optimizing workflows through AI-driven automation and no-code solutions. A detail-oriented problem-solver with a proven track record in managing complex projects, budgets, and technical operations. Skilled in bridging the gap between technical execution and business goals, with a focus on digital transformation. Seeking to contribute expertise in technical project management, data analysis, or software development.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description:
            'Industry-focused program bridging academic theory and professional R&D workflows. Bi-weekly in-person workshops at Wix Campus (Tel Aviv) covering React, AI agent workflows (LangChain / Claude API), API integration, Python automation, CI/CD, and mock technical interviews.',
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – Present',
          description:
            'Comprehensive training in the project lifecycle, from planning and budgeting to matrix leadership, with a focus on AI-driven data visualization and predictive analytics for optimized project control.',
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
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
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL', 'Supabase', 'Looker Studio', 'Cursor / Claude Code'],
          year: '2023 – Present',
          description:
            'Full-stack HR management application built with Cursor (Claude Code), deployed on Vercel with a Supabase (PostgreSQL) backend for secure, real-time data storage.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'Text-to-SQL RAG Agent',
          tech: ['Python', 'LangChain (LCEL)', 'Google Gemini', 'SQLite', 'SQLAlchemy', 'pandas', 'Streamlit', 'pytest'],
          year: '2026',
          description:
            'A production-style, local, and cost-free natural-language interface for querying CSV-backed data. Upload a dataset, ask questions in plain English, and receive agentic reasoning, generated SQL, and a grounded natural-language answer. Implements read-only SQL guardrails, schema grounding, few-shot prompting, and Pydantic-validated structured outputs (thought, sql_query, answer).',
          link: 'https://github.com/DudiMonsonego/SQL_Agent',
          liveLink: null,
        },
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description:
            'Full-stack B2B SaaS for hardware lifecycle management — multi-tenant PostgreSQL with Row Level Security, asset tracking, warranty monitoring, and automated cron jobs.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'Resume Portfolio Website',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel'],
          year: '2025',
          description:
            'Multi-version CV site with per-role routing and private shareable CV links (/cv/:slug).',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
        },
      ],
      skills: [
        'Programming: Python, JavaScript, TypeScript, React, Java, C',
        'Data & Analytics: SQL, Looker Studio, Power BI, Advanced Excel',
        'Automation & AI Tools: Cursor, Claude Code, Make, Zapier, API Integration, Airtable, Google Apps Script',
        'Infrastructure & Ops: Docker, Linux & Windows (CLI & Shell Scripting), Priority ERP, GitHub, familiarity with AWS & VMware',
        'Methodologies & Management: Project Management, Agile, Lean Management, Digital Transformation, Process Optimization',
      ],
      experience: [
        {
          title: 'HR and Operations Technical Project Manager',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Led a large-scale digital transformation of unit personnel systems, cutting administrative workload by 50% through workflow automation and custom-built tools.',
            'Developed a full-stack HR management application using Cursor (Claude Code), deployed on Vercel, with a Supabase (PostgreSQL) backend for secure, real-time data storage.',
            'Engineered automated data pipelines and interactive dashboards using Google Sheets and Looker Studio, significantly improving reporting speed, data accuracy, and decision-making for senior command.',
            'Optimized operational efficiency by integrating digital tools and custom scripts, enhancing team coordination and streamlining lead-to-report processes in a high-pressure environment.',
          ],
        },
        {
          title: 'Branch Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Optimized technical operations and daily workflows using Priority ERP, significantly improving overall process efficiency.',
            'Streamlined sales processes and inventory management via Priority ERP, reducing operational errors and ensuring accurate stock levels.',
            'Supervised team performance to maintain high-quality service standards and operational consistency.',
          ],
        },
      ],
      languages: [
        { language: 'English', proficiency: 'Full professional proficiency' },
        { language: 'Hebrew', proficiency: 'Native/bilingual proficiency' },
      ],
    },
  },
  {
    id: 'f3a8b2c1-4d5e-6f70-8192-a3b4c5d6e7f8',
    slug: 'ge-healthcare-pmo-release-manager-p8n',
    created_at: '2026-05-17T12:00:00.000Z',
    company_name: 'GE HealthCare',
    company_website: 'https://www.gehealthcare.com',
    role_title: 'PMO/Release Manager',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'GE HealthCare — PMO/Release Manager',
      title: 'PMO / Release Manager',
      bio:
        'Certified Project Manager and Computer Science graduate (B.Sc.) with a strong background in digital transformation, operations management, and resource optimization. Proven track record in leading cross-functional processes, managing plan-vs-actual tracking, and utilizing data-driven methodologies to improve organizational efficiency. Possesses deep technical orientation combined with exceptional interpersonal skills, leadership capabilities, and experience with advanced automated and AI-driven workflows. Highly qualified to bridge the gap between engineering challenges and structured project control.',
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description:
            'Industry-focused program bridging academic theory and professional R&D workflows. Bi-weekly in-person workshops at Wix Campus (Tel Aviv) covering React, AI agent workflows (LangChain / Claude API), API integration, Python automation, CI/CD, and mock technical interviews.',
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
        },
        {
          degree: 'B.Sc. Computer Science',
          institution: 'University of Haifa',
          year: '2020 – 2024',
          description: null,
        },
      ],
      skills: [
        'Plan-vs-Actual Tracking',
        'Resource Allocation',
        'Capacity Planning',
        'KPI & Dashboard Development',
        'Risk Management',
        'Change Control',
        'Project Management',
        'Digital Transformation',
        'JavaScript',
        'React',
        'SQL',
        'Supabase',
        'HTML / CSS',
        'Excel',
        'Jira',
        'Monday',
        'Git',
        'Airtable',
        'Make',
        'Cursor',
        'Claude Code',
        'Matrix Management',
        'Cross-functional Collaboration',
        'Stakeholder Communication',
      ],
      experience: [
        {
          title: 'Technical Project Manager (Operations & HR)',
          company: 'IDF Reserve Duty — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Led a large-scale brigade-wide digital transformation, optimizing resource allocation and personnel management systems.',
            'Managed plan-vs-actual tracking for digital implementation workflows, identifying dependencies, schedule deviations, and capacity bottlenecks.',
            'Conducted system-level analysis and requirement characterization to align field operations with technological capabilities.',
            'Defined core tracking methodologies and coordinated with technical stakeholders, ensuring transparency and data-driven decision-making.',
          ],
        },
        {
          title: 'Branch Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Directed all daily operations, resource utilization, and capacity planning for a high-volume branch.',
            'Monitored and analyzed cross-functional team performance, workloads, and efficiency trends to drive continuous operational improvements.',
            'Developed and monitored branch KPIs, establishing dashboards to present actionable insights and progress reports to executive leadership.',
          ],
        },
      ],
    },
  },
  {
    id: 'c7e8f9a0-1b2c-4d5e-8f90-a1b2c3d4e5f6',
    slug: 'amarel-account-manager-k2m',
    created_at: '2026-05-17T16:00:00.000Z',
    company_name: 'Amarel',
    company_website: 'https://www.amarel.net',
    role_title: 'Account Manager',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Amarel — Account Manager',
      title: 'Account Manager',
      bio:
        'Project and account manager with a B.Sc. in Computer Science and project management training (TechTroop/Elevation). Proven in end-to-end operational and business project delivery, matrix management, and ongoing B2B client relationships from initial requirements through fulfillment. Experienced handling orders, system implementations, upgrades, training, and reporting under strict deadlines in military and commercial environments. Strong professional English for international stakeholders.',
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description: null,
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
        },
        {
          degree: 'B.Sc. Computer Science',
          institution: 'University of Haifa',
          year: '2020 – 2024',
          description: null,
        },
      ],
      skills: [
        'Management & Methodologies: End-to-End Project Management, Account Management (B2B), Matrix Management, Cross-Functional Collaboration, Operational Execution, Client Training',
        'Data & Analytics: SQL, Looker Studio, Power BI, Advanced Excel, Data Pipelines',
        'Systems & Automation: Priority ERP, API Integrations, Make, Zapier, Linux / Windows Systems, Custom Scripting',
      ],
      experience: [
        {
          title: 'Technical Project Manager (Operations & HR)',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'End-to-end project management: Led unit-wide personnel-system transformation; defined requirements, coordinated delivery, and cut administrative workload by ~50% through process automation.',
            'Matrix management: Worked with senior command, cross-functional teams, and field stakeholders to align priorities and streamline lead-to-report workflows.',
            'Operational execution: Managed reporting pipelines and control dashboards (Looker Studio, Google Sheets), improving speed and accuracy for decision-making under tight deadlines.',
            'Implementation & training: Rolled out system upgrades and digital tools; trained users and supported ongoing operations in a high-pressure environment.',
          ],
        },
        {
          title: 'Branch & Account Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Account management: Managed ongoing B2B relationships with commercial clients and dealers as single point of contact from sale through order fulfillment and issue resolution.',
            'Operational delivery: Owned orders, inventory (BOM), logistics, and supply-chain coordination in Priority ERP; maintained stock accuracy and on-time execution.',
            'Cross-functional coordination: Partnered with procurement, operations, and technical teams to resolve discrepancies, improve workflows, and meet organizational schedules.',
          ],
        },
      ],
      projects: [
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
          year: '2026',
          description:
            'End-to-end B2B SaaS for organizational hardware lifecycle management — from procurement through maintenance to retirement. Built a multi-tenant platform with PostgreSQL Row Level Security, role-based access, asset tracking, warranty monitoring, automated cron jobs, and webhook integrations. Includes a public live demo with sandboxed tenant data for recruiters and stakeholders.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'IDF Unit HR Management System',
          tech: ['React', 'Supabase', 'PostgreSQL', 'Vercel', 'Looker Studio', 'Cursor / Claude Code'],
          year: '2023 – Present',
          description:
            'Led requirements gathering and delivery of a full-stack personnel management application for a reserve-duty IDF unit. Replaced manual HR workflows with real-time data storage, role-based permissions, and automated reporting dashboards — cutting administrative workload by ~50%. Coordinated rollout, user training, and ongoing support in a high-pressure operational environment.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'Resume Portfolio Website',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
          year: '2025',
          description:
            'Dynamic multi-version portfolio site with per-role CV routing, private shareable links for recruiters, Google Analytics 4, and automated deployment via GitHub. Demonstrates full project ownership from design through implementation, content management, and production release.',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
        },
      ],
      languages: [
        { language: 'English', proficiency: 'High proficiency (verbal & written)' },
        { language: 'Hebrew', proficiency: 'Native proficiency' },
      ],
    },
  },
  {
    id: '8c4d2e1f-9a3b-4c5d-8e7f-6a5b4c3d2e1f',
    slug: 'rambam-systems-analyst-heb-r7k',
    created_at: '2026-05-17T14:00:00.000Z',
    company_name: 'Rambam',
    company_website: 'https://www.rambam.org.il',
    role_title: 'Systems Analyst',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      dir: 'rtl',
      lang: 'he',
      label: 'Rambam — Systems Analyst (עברית)',
      name: 'דוד מונסונגו',
      location: 'ישראל',
      title: 'אנליסט מערכות',
      bio:
        'בוגר תואר ראשון .B.Sc במדעי המחשב וקורס ניהול פרויקטים, בעל רקע טכנולוגי ואופרטיבי חזק המשלב ניסיון בהובלת טרנספורמציה דיגיטלית וייעול מערכות מידע. מומחה באיסוף ואפיון דרישות פיתוח, בניית ארכיטקטורה לפתרונות תוכנה, וייעול תהליכי עבודה ארגוניים. בעל ניסיון מעשי בעבודה מול בסיסי נתונים (SQL), יישום מערכות ותמיכה שוטפת במשתמשי קצה בסביבה דינמית ועתירת לחץ, לצד תודעת שירות גבוהה ויכולת עבודה אפקטיבית מול צוותי פיתוח.',
      contact: {
        ...baseContent.contact,
        email: 'dudimonsonego@gmail.com',
        phone: '0523594646',
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'Wix Jumpstart — תוכנית הכשרה טכנולוגית למילואימניקים',
          institution: 'Wix & Milumentor',
          year: '2026',
          description:
            'תוכנית מעשית המגשרת בין תיאוריה אקדמית לעולם הפיתוח המקצועי. סדנאות פרונטליות בקמפוס Wix (תל אביב) בנושאי React, AI Agents, אינטגרציית API, אוטומציה ב-Python, CI/CD וראיונות טכניים מדומים.',
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'אתר התוכנית',
        },
        {
          degree: 'קורס ניהול פרויקטים TechTroop',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'עמוד הקורס',
        },
        {
          degree: 'תואר ראשון .B.Sc במדעי המחשב',
          institution: 'אוניברסיטת חיפה',
          year: '2020 – 2024',
          description: null,
        },
      ],
      experience: [
        {
          title: 'מנהל פרויקטים טכנולוגיים (HR ואופרציה)',
          company: 'שירות מילואים (צה״ל)',
          year: '2023 – היום',
          bullets: [
            'ניתוח תהליכים ואיסוף דרישות: הובלת טרנספורמציה דיגיטלית רחבת היקף במערכות כוח האדם של היחידה, שכללה איסוף דרישות מהשטח וצמצום של כ־50% בעומס העבודה האדמיניסטרטיבי באמצעות אוטומציה של תהליכים.',
            'אפיון ויישום פתרונות: אפיון דרישות פיתוח פונקציונליות וטכניות ובניית ארכיטקטורה לאפליקציית Full-stack ייעודית לניהול משאבי אנוש.',
            'עבודה מול בסיסי נתונים: יישום פתרון טכנולוגי מבוסס Vercel ועבודה שוטפת מול בסיס הנתונים (Supabase / PostgreSQL) לאחסון וניהול מידע מאובטח בזמן אמת.',
            'אוטומציה וייעול תהליכים: הנדסת Data Pipelines ולוחות בקרה אינטראקטיביים ב-Looker Studio ו-Google Sheets, ששיפרו משמעותית את מהירות הדיווח ודיוק הנתונים לקבלת החלטות.',
            'עבודה מול צוותים וטיפול בתקלות: אופטימיזציה של תהליכי הדיווח, שיפור התיאום בצוות ומתן מענה לצורכי המשתמשים בסביבה עתירת לחץ.',
          ],
        },
        {
          title: 'מנהל סניף ויישום תהליכי Priority ERP',
          company: 'אייבורי מחשבים',
          year: '2013 – 2019',
          bullets: [
            'יישום מערכות מידע (ERP): ניהול תהליכים במערכת Priority ERP; אחריות על אופטימיזציה וייעול תהליכי עבודה מקצה לקצה, תוך ממשק שוטף מול גורמי רכש ותפעול.',
            'ניהול נתונים ובקרה: פיקוח על רכיבי עץ מוצר וניהול לוגיסטי במערכת המידע, תוך הגדרת תהליכים להבטחת דיוק נתונים מרבי ועמידה בלוחות זמנים קשיחים.',
            'תמיכה במשתמשים והדרכה: הובלת צוותים למצוינות תפעולית, תוך דגש על הדרכה ושיפור שיטות עבודה ממוחשבות, איכות השירות ותמיכה טכנית ואופרטיבית במשתמשי המערכת.',
          ],
        },
      ],
      skills: [
        'SQL',
        'Looker Studio',
        'Power BI',
        'Advanced Excel',
        'Requirements Analysis',
        'Process Optimization',
        'Project Management',
        'Agile',
        'Priority ERP',
        'Make',
        'Zapier',
        'API Integration',
        'Google Apps Script',
        'Airtable',
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'Java',
        'C',
        'Docker',
        'Linux (CLI & Shell Scripting)',
        'Windows (CLI & Shell Scripting)',
        'GitHub',
      ],
      languages: [
        { language: 'עברית', proficiency: 'שפת אם' },
        { language: 'אנגלית', proficiency: 'רמה גבוהה' },
      ],
      projects: [
        {
          name: 'מערכת ניהול משאבי אנוש ליחידת מילואים',
          tech: ['React', 'Supabase', 'PostgreSQL', 'Vercel', 'Looker Studio', 'Cursor / Claude'],
          description:
            'אפליקציית Full-stack לניהול כוח אדם עם אחסון נתונים בזמן אמת, הרשאות מבוססות תפקידים ותהליכי אוטומציה ודיווח שהחליפו עבודה ידנית והפחיתו עומס אדמיניסטרטיבי בכ־50%.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'AssetFlow — ניהול מחזור חיים של ציוד',
          tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
          description:
            'אפליקציית B2B SaaS לניהול נכסי חומרה בארגון — ארכיטקטורה רב-דיירית, PostgreSQL RLS, מעקב אחריות ותחזוקה, ואוטומציה של תהליכי דיווח.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
        },
        {
          name: 'אתר פורטפוליו / קורות חיים דינמי',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
          description:
            'אתר עם גרסאות CV שונות לפי תפקיד/חברה, קישורים לשיתוף מול מגייסים, אנליטיקה ופריסה אוטומטית.',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
        },
      ],
    },
  },
  {
    id: 'b110c35d-ef93-4e35-8919-1b0713419889',
    slug: 'elbit-project-manager-7au',
    created_at: '2026-05-06T11:55:20.763Z',
    company_name: 'Elbit',
    company_website: 'https://elbitsystems.com',
    role_title: 'Project Manager',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Elbit — Project Manager',
      title: 'Project Manager',
      bio: 'Results-driven Project Manager with a B.Sc. in Computer Science and extensive experience leading complex, cross-functional technical projects. Proven track record in optimizing operational workflows, managing end-to-end delivery, and leveraging Priority ERP for inventory and process control. Expert in digital transformation and data-driven decision-making within high-pressure defense environments. Strong matrix leadership skills with a focus on OTD (On-Time Delivery) and operational excellence.',
      contact: {
        ...baseContent.contact,
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description:
            'Project lifecycle, budget control, matrix leadership, and predictive analytics.',
        },
        {
          degree: 'B.Sc. Computer Science',
          institution: 'University of Haifa',
          year: '2020 – 2024',
          description: null,
        },
      ],
      experience: [
        {
          title: 'Technical Project Manager & Software Developer',
          company: 'IDF Reserve Duty — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Project ownership: Led large-scale digital transformation initiatives from requirements characterization to final delivery in a mission-critical environment.',
            'Operational efficiency: Built automated data pipelines and interactive dashboards (Looker Studio), reducing administrative workload by 50% and improving reporting accuracy.',
            'Cross-functional leadership: Managed multiple interfaces and stakeholders to deliver objectives under tight schedules and dynamic conditions.',
            'Risk management: Identified bottlenecks in data flow and system integration, implementing scripts to streamline lead-to-report processes.',
          ],
        },
        {
          title: 'Branch Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Operations & supply chain: Managed end-to-end technical workflows and inventory using Priority ERP, ensuring accurate stock levels and reducing operational errors.',
            'Project delivery: Accountable for order intake through customer delivery, maintaining quality standards and meeting strict KPIs.',
            'Interface management: Coordinated between procurement, logistics, and technical teams to optimize supply chain processes and resource allocation.',
            'Process optimization: Applied Lean principles to streamline daily operations and enhance team performance.',
          ],
        },
      ],
      skills: [
        'Project Lifecycle Management',
        'Matrix Leadership',
        'NPI-to-Serial Transition',
        'Risk Management',
        'OTD / OTQ',
        'Priority ERP',
        'SQL',
        'Looker Studio',
        'Power BI',
        'Data Analytics',
        'Workflow Automation (Make, Zapier)',
        'Python',
        'Shell Scripting',
        'AI-driven tools (Cursor, Claude Code)',
      ],
    },
  },
  {
    id: '2f66a77f-2dc5-4fb1-8b4a-8f7d5ab2c5a9',
    slug: 'elad-software-data-engineer-heb',
    created_at: '2026-05-04T12:00:00.000Z',
    company_name: 'ELAD software',
    company_website: 'https://eladsoft.com',
    role_title: 'Data Engineer',
    status: 'Draft',
    content: {
      ...baseContent,
      noindex: true,
      dir: 'rtl',
      lang: 'he',
      label: 'ELAD software — Data Engineer (עברית)',
      name: 'דוד מונסונגו',
      location: 'ישראל',
      title: 'מהנדס דאטה',
      bio:
        'בוגר תואר ראשון .B.Sc במדעי המחשב בעל רקע טכנולוגי חזק ומומחיות בניהול, עיבוד ומידול נתונים בסביבה ביטחונית דינאמית. בעל ניסיון מוכח בהנדסת צינורות נתונים (Data Pipelines), אינטגרציות API מורכבות ואוטומציה מבוססת Python המייעלת תהליכים ומקצרת זמני עבודה. בעל יכולת מוכחת בגישור בין צרכים עסקיים ותפעוליים לפתרונות טכנולוגיים מתקדמים, חשיבה אנליטית מפותחת ויכולת עבודה תחת לחץ.',
      contact: {
        ...baseContent.contact,
        email: 'dudimonsonego@gmail.com',
        phone: '0523594646',
        // "another link" → shows up as Website in the Contact card
        website: 'https://portfolio-david-monsonego.vercel.app',
      },
      education: [
        {
          degree: 'קורס ניהול פרויקטים',
          institution: 'TechTroop, Elevation',
          year: '2025 – 2026',
          description: 'הכשרה בתכנון, תקצוב והובלת פרויקטים עם דגש על ויזואליזציה של נתונים.',
        },
        {
          degree: 'תואר ראשון .B.Sc במדעי המחשב',
          institution: 'אוניברסיטת חיפה',
          year: '2020 – 2024',
          description: null,
        },
      ],
      experience: [
        {
          title: 'מנהל פרויקטים טכנולוגיים ודאטה (HR ואופרציה)',
          company: 'שירות מילואים (צה״ל)',
          year: '2023 – היום',
          bullets: [
            'הובלת טרנספורמציה דיגיטלית במערכות כוח האדם של היחידה בסביבה ביטחונית, שהובילה לצמצום של כ־50% בעומס העבודה האדמיניסטרטיבי באמצעות אוטומציה של תהליכי עבודה.',
            'הנדסת צינורות נתונים (Data Pipelines) ולוחות בקרה אינטראקטיביים (Looker Studio, Google Sheets), ששיפרו משמעותית את מהירות הדיווח, דיוק הנתונים וקבלת ההחלטות עבור הדרג הבכיר.',
            'פיתוח ותחזוקה של תהליכי עיבוד ומידול נתונים (ETL) באמצעות Python וסקריפטים מותאמים אישית לייעול תהליכי הדיווח בסביבה עתירת לחץ.',
            'פיתוח אפליקציית Full‑stack לניהול משאבי אנוש באמצעות Cursor (Claude), עם פריסה ב‑Vercel ועבודה מול Supabase לאחסון ומידול נתונים מאובטח בזמן אמת.',
          ],
        },
        {
          title: 'מנהל סניף',
          company: 'אייבורי מחשבים',
          year: '2013 – 2019',
          bullets: [
            'ניהול ובקרת תהליכים במערכת Priority ERP: אחריות על אופטימיזציה וייעול תהליכי עבודה מקצה לקצה, תוך ממשק שוטף עם גורמי רכש ותפעול.',
            'ניהול מלאי ומשאבים: פיקוח על רכיבי עץ מוצר וניהול לוגיסטי במערכת המידע, תוך הבטחת דיוק מרבי ועמידה בלוחות זמנים קשיחים.',
            'הובלת צוותים למצוינות תפעולית: ניהול ישיר של צוות רב‑תחומי ושיפור שיטות עבודה ממוחשבות.',
          ],
        },
      ],
      skills: [
        'Python',
        'SQL',
        'JavaScript',
        'TypeScript',
        'React',
        'Java',
        'C',
        'Data Modeling & Pipelines',
        'PostgreSQL',
        'Looker Studio',
        'Power BI',
        'Advanced Excel',
        'Docker',
        'Linux (CLI & Shell Scripting)',
        'AWS (basic)',
        'VMware (basic)',
        'GitHub',
        'API Integration',
        'Cursor',
        'Claude Code',
        'Make',
        'Airtable',
        'Google Apps Script',
        'Agile',
        'Lean Management',
        'טרנספורמציה דיגיטלית',
        'אופטימיזציה של תהליכים',
      ],
      languages: [
        { language: 'עברית', proficiency: 'שפת אם' },
        { language: 'אנגלית', proficiency: 'רמה גבוהה' },
      ],
      projects: [
        {
          name: 'מערכת ניהול משאבי אנוש ליחידת מילואים (פנימי)',
          tech: ['React', 'Supabase', 'PostgreSQL', 'Vercel', 'Looker Studio', 'Cursor / Claude'],
          description:
            'אפליקציית Full‑stack לניהול כוח אדם עם אחסון נתונים בזמן אמת, הרשאות מבוססות תפקידים ותהליכי אוטומציה ודיווח שהחליפו עבודה ידנית והפחיתו עומס אדמיניסטרטיבי בכ־50%.',
          link: null,
        },
        {
          name: 'אתר פורטפוליו / קורות חיים דינמי',
          tech: ['React', 'Vite', 'Wix Design System', 'Vercel', 'Node.js'],
          description:
            'אתר עם גרסאות CV שונות לפי תפקיד/חברה, קישורים לשיתוף מול מגייסים, אנליטיקה ופריסה אוטומטית.',
          link: 'https://portfolio-david-monsonego.vercel.app',
        },
      ],
    },
  },
  {
    id: '54595049-362f-408f-92c5-c35a0704f96c',
    slug: 'amazon-software-dev-dsp',
    created_at: '2026-05-03T15:00:00.000Z',
    company_name: 'Amazon',
    company_website: 'https://www.amazon.com',
    role_title: 'Software Dev',
    status: 'Sent',
    content: {
      ...baseContent,
      noindex: true,
      label: 'Amazon — Software Dev',
      title: 'Software Developer',
      bio:
        'B.Sc. in Computer Science graduate with a strong technical foundation in algorithms, data structures, and software engineering. Experienced in developing full-stack applications and automating data-driven workflows using AI-driven tools. A detail-oriented problem-solver with a proven track record of bridging technical execution with business goals in high-pressure environments.',
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
            'Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Operating Systems.',
            'Database Systems, Complexity Analysis.',
          ],
        },
      ],
      skills: [
        'Python',
        'Java',
        'C',
        'JavaScript',
        'TypeScript',
        'React',
        'SQL',
        'Shell scripting',
        'Cursor',
        'Claude Code',
        'Make',
        'Zapier',
        'API integration',
        'Google Apps Script',
        'Docker',
        'Linux',
        'PostgreSQL',
        'Supabase',
        'Vercel',
        'Looker Studio',
        'Power BI',
        'Object-oriented design',
        'Agile',
        'Lean management',
        'Digital transformation',
        'Process optimization',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Software Developer',
          company: 'Reserve Duty IDF — Alexandroni Brigade',
          year: '2023 – Present',
          bullets: [
            'Full-stack development: Designed and deployed a custom HR management application using Cursor (Claude Code) and Vercel, with a Supabase (PostgreSQL) backend.',
            'Process automation: Engineered automated data pipelines that reduced administrative workload by 50% and improved reporting accuracy.',
            'Data analytics: Developed interactive dashboards using Looker Studio and Google Sheets to support data-driven decision-making for senior command.',
            'System optimization: Integrated custom scripts and digital tools to streamline processes in a high-pressure environment.',
          ],
        },
        {
          title: 'Branch Manager',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Optimized technical workflows and inventory management using Priority ERP, reducing operational errors.',
            'Managed cross-functional teams to maintain high-quality service standards and meet organizational goals.',
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
          name: 'HR management application (internal)',
          tech: ['React', 'Supabase (PostgreSQL)', 'Vercel', 'Cursor / Claude Code'],
          description:
            'Custom internal HR application with automated pipelines and reporting to support operations and leadership.',
          link: null,
        },
      ],
    },
  },
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
        'B.Sc. Computer Science graduate with hands-on experience building internal web tools (JavaScript, TypeScript, React, PostgreSQL) and automating operational workflows. Strong background in Priority ERP, inventory/logistics processes, and systems analysis. Experienced working with technical and business stakeholders; fluent professional English for international teams.',
      education: [
        {
          degree: 'Wix Jumpstart — Reservists Tech Training',
          institution: 'Wix & Milumentor',
          year: '2026',
          description: null,
          link: 'https://www.wixjumpstart.com/',
          linkLabel: 'Program website',
        },
        {
          degree: 'TechTroop Project Management Course',
          institution: 'Elevation',
          year: '2025 – 2026',
          description: null,
          link: 'https://drive.google.com/file/d/1BRLMW1d3u1Xvfb9W2A_1Xl8xbRFdOyra/view',
          linkLabel: 'Course page',
        },
        {
          degree: 'B.Sc. Computer Science',
          institution: 'University of Haifa',
          year: '2020 – 2024',
          description: null,
        },
      ],
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'SQL',
        'Priority ERP workflow processes',
        'Systems Analysis',
        'System Implementation',
        'Technical Troubleshooting',
        'Looker Studio',
        'Advanced Excel',
        'Power BI',
        'Google Apps Script',
        'API Integration',
        'Make',
        'Zapier',
        'GitHub',
        'Docker',
        'Linux',
        'Cursor',
        'Claude Code',
      ],
      experience: [
        {
          title: 'Technical Project Manager & Information Systems Developer',
          company: 'IDF Reserve Duty',
          year: '2023 – Present',
          bullets: [
            'Analyzed internal processes and built a custom web application for resource management, reducing administrative workloads by ~50%.',
            'Developed system logic and UI with JavaScript, TypeScript, and React. Designed PostgreSQL (Supabase) tables and SQL queries for accurate data tracking.',
            'Built automated reporting pipelines with Google Sheets and Looker Studio. Used AI dev tools (Cursor, Claude Code) to ship faster and maintain documentation.',
          ],
        },
        {
          title: 'Branch Manager & ERP User Specialist',
          company: 'Ivory Computers',
          year: '2013 – 2019',
          bullets: [
            'Managed daily branch technical workflows, procurement interfaces, and live stock movements directly within Priority ERP.',
            'Conducted inventory analysis with IT and logistics teams, produced daily reports and cross-checked database inputs to ensure data integrity and reduce errors.',
          ],
        },
      ],
      projects: [
        {
          name: 'AssetFlow',
          tech: ['Next.js', 'TypeScript', 'Supabase'],
          description: 'B2B hardware lifecycle SaaS.',
          link: 'https://github.com/DudiMonsonego/AssetFlow',
          liveLink: 'https://my-assetflow.vercel.app/',
        },
        {
          name: 'IDF HR System',
          tech: ['React', 'PostgreSQL'],
          description: 'Full-stack personnel app.',
          link: 'https://github.com/DudiMonsonego/Battalion_Managment_System',
        },
        {
          name: 'Portfolio',
          tech: ['React', 'Vite'],
          description: 'Multi-version CV site.',
          link: 'https://github.com/DudiMonsonego/portfolio-starter',
          liveLink: 'https://portfolio-david-monsonego.vercel.app/',
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

// Friendly shortcuts → canonical slug (avoids "invalid link" from missing random suffix)
const slugAliases = {
  'elbit-technical-manager': 'elbit-technical-manager-tm0',
  'fastsimon-application-engineer': 'fastsimon-application-engineer-fs9',
  'checkpoint-rd-operations': 'checkpoint-rd-operations-cp9',
  'sap-project-manager': 'sap-project-manager-sp9',
  'microsoft-software-quality-engineering': 'microsoft-software-quality-engineering-ms9',
  'rambam-ai-developer': 'rambam-ai-developer-rb9',
  'abra-ai-adoption-specialist': 'abra-ai-adoption-specialist-a7k',
}

function normalizeSlug(slug) {
  return String(slug).trim().toLowerCase().replace(/\/+$/, '')
}

export function getCvVersionById(id) {
  if (!id) return null
  return cvVersionsById[id] ?? null
}

export function getCvVersionBySlug(slug) {
  if (!slug) return null
  const normalized = normalizeSlug(slug)
  const resolved = slugAliases[normalized] ?? normalized
  return cvVersionsBySlug[resolved] ?? null
}

