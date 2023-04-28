import axios from "axios"

// DO NOT use authorization, react does not permit to securely store keys (not even in .env)
// backend needed to proxy requests
const baseUrl = "https://api.github.com"

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/users/Favo02/repos`)
  return res.data
}

const collaborators = async (repo: string) => {
  const res = await axios.get(`${baseUrl}/repos/${repo}/contributors`)
  return res.data
}

const languages = async (repo: string) => {
  const res = await axios.get(`${baseUrl}/repos/${repo}/languages`)
  return res.data
}

const repositoriesService = {
  getAll,
  collaborators,
  languages
}

export default repositoriesService
