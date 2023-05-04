import type { FC } from "react"
import { useEffect,useState } from "react"

import type Repository from "../../interfaces/Repository"
import repositoriesService from "../../services/repositories"
import Loading from "../Common/Loading"

import ProjectCard from "./ProjectCard"

const Projects : FC = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [repositories, setRepositories] = useState<Repository[]>()

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const repos = await repositoriesService.getAll()
      repos.sort((a : Repository, b : Repository) => {
        return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
      })
      setRepositories(repos)
      setLoading(false)
    }

    fetch()
  }, [])

  if (loading) {
    return (
      <div className="w-full h-full min-h-[calc(100vh-300px)] flex justify-center items-center">
        <Loading />
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {repositories?.map(repository => <ProjectCard key={repository.id} repository={repository} />)}
    </div>
  )
}

export default Projects
