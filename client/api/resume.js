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
    linkedin: 'https://linkedin.com/in/david-monsonego',
    github: 'https://github.com/dudimonsonego',
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
    'API Integrations',
    'Make',
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
