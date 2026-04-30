const serverAPI = () => {

  // Relative URL works in both environments:
  // - Locally: Vite proxies /api → http://localhost:3001 (see vite.config.js)
  // - Production: Vercel serves /api/resume from the serverless function in /api/resume.js
  const getResume = async () => {
    const response = await fetch('/api/resume')
    return response.json()
  }

  return {
    getResume,
  }
}

export default serverAPI()
