import type { FC } from "react"
import { useEffect,useState } from "react"

import type Repository from "../../interfaces/Repository"
import repositoriesService from "../../services/repositories"
import Loading from "../Common/Loading"
import FetchRepositoryDetails from "../Projects/FetchRepositoryDetails"
import ProjectCard from "../Projects/ProjectCard"

const InterestProjectExample : FC<{ name : string, user : string }> = ({ name, user }) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [repo, setRepo] = useState<Repository>()

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const repo = await repositoriesService.get(name, user)

      setRepo(repo)

      setLoading(false)
    }

    fetch()
  }, [name, user])

  if (loading || !repo) {
    return (
      <div className="flex items-center justify-center w-80 h-72 m-6 p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        <Loading />
      </div>
    )
  }

  return (
    <FetchRepositoryDetails
      key={repo.id}
      repository={repo}
    >
      {(loading, repository, reverse, collaborators, languages, additionalData) =>
        (<ProjectCard
          loading={loading}
          repository={repository}
          collaborators={collaborators}
          languages={languages}
          additionalData={additionalData}
          customClasses="backdrop-blur-none bg-transparent shadow-lg border border-black/30 px-0"
        />)}
    </FetchRepositoryDetails>
  )
}

export default InterestProjectExample
