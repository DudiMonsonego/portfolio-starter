const serverAPI = () => {

  const baseURL = 'http://localhost:3001'
  const getResume = async () => {
    const response = await fetch(`${baseURL}/api/resume`)
    return response.json()
  }

  return {
    getResume,
  }
}

export default serverAPI()
