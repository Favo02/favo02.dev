import axios from "axios"

// DO NOT use authorization, react does not permit to securely store keys (not even in .env)
// backend needed to proxy requests
const baseUrl = "https://api.github.com"

const getAll = async (user : string) => {
  const res = await axios.get(`${baseUrl}/users/${user}/repos`)
  return res.data
}

const get = async (name : string, user : string) => {
  const res = await axios.get(`${baseUrl}/repos/${user}/${name}`)
  return res.data
}

const collaborators = async (repo : string) => {
  const res = await axios.get(`${baseUrl}/repos/${repo}/contributors`)
  return res.data
}

const languages = async (repo : string) => {
  const res = await axios.get(`${baseUrl}/repos/${repo}/languages`)
  return res.data
}

const repositoriesService = {
  getAll,
  get,
  collaborators,
  languages
}

export default repositoriesService
