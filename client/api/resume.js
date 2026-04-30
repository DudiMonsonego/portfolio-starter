// api/resume.js
// Vercel serverless function — replaces the Express server for production.
// Vercel automatically exposes any file inside the /api folder as an endpoint.
// This file is served at /api/resume on the deployed domain.

const resumeData = {
  name: 'David Monsonego',
  title: 'HR Technology & Solutions Specialist',
  location: 'Israel',
  bio: 'Analytical and impact-driven B.Sc. Computer Science graduate specializing in HR technology and digital transformation. Experienced in the full lifecycle of system implementation: from gathering business requirements and writing functional documentation to developing SQL-based backends and BI dashboards. Proven ability to transform complex business needs into smart, data-driven solutions and automated workflows. Highly proficient in bridging technical execution with global business goals.',
  contact: {
    email: 'dudimonsonego@gmail.com',
    phone: '052-3594646',
    linkedin: 'https://linkedin.com/in/davidmonsonego',
    github: 'https://github.com/davidmonsonego',
  },
  skills: [
    'SQL',
    'Power BI',
    'Looker Studio',
    'Tableau',
    'ETL Processes',
    'Advanced Excel',
    'JavaScript',
    'TypeScript',
    'React',
    'HTML / CSS',
    'Java',
    'AWS',
    'Vercel',
    'Custom HRIS',
    'API Integrations',
    'Make (Integromat)',
    'Google Apps Script',
    'Cursor / Claude Code',
    'Priority ERP',
    'Docker',
    'Linux / Windows CLI',
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
    { language: 'Hebrew', proficiency: 'Native / bilingual proficiency' },
  ],
}

// Vercel serverless handler — receives the request and sends back JSON
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json(resumeData)
}
