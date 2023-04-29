import { FC, useState, useEffect } from "react"
import repositoriesService from "../../services/repositories"
import Repository from "../../interfaces/Repository"
import ProjectCard from "./ProjectCard"

const Projects: FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>()

  useEffect(() => {
    const fetch = async () => {
      const repos = await repositoriesService.getAll()
      setRepositories(repos)
    }

    fetch()
  }, [])

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {repositories?.map(repository => <ProjectCard key={repository.id} repository={repository} />)}
    </div>
  )
}

export default Projects
