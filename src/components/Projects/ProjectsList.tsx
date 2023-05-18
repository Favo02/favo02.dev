import type { FC } from "react"
import { useEffect,useState } from "react"

import type Repository from "../../interfaces/Repository"
import repositoriesService from "../../services/repositories"
import Loading from "../Common/Loading"

import FeaturedProjectCard from "./FeaturedProjectCard"
import FetchRepositoryDetails from "./FetchRepositoryDetails"
import ProjectCard from "./ProjectCard"

const Projects : FC = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [normalRepos, setNormalRepos] = useState<Repository[]>()
  const [featuredRepos, setFeaturedRepos] = useState<Repository[]>()

  const featRepos : string[] = ["favo02.dev", "workspaces-by-open-apps"]
  const ignoredRepos : string[] = ["Favo02", "docker-compose", "preatoni-giardini", "FullStackOpen"]

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const allRepos = await repositoriesService.getAll()

      const nrepos = allRepos
        .filter((r : Repository) => !ignoredRepos.includes(r.name))
        .filter((r : Repository) => !featRepos.includes(r.name))

      const frepos = allRepos
        .filter((r : Repository) => !ignoredRepos.includes(r.name))
        .filter((r : Repository) => featRepos.includes(r.name))

      nrepos.sort((a : Repository, b : Repository) => (
        new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf())
      )

      setNormalRepos(nrepos)
      setFeaturedRepos(frepos)

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
    <div className="flex flex-wrap justify-center">
      <div className="w-full">
        {featuredRepos?.map((r, i) =>
          <FetchRepositoryDetails
            key={r.id}
            repository={r}
            reverse={i % 2 === 0 ? false : true}
          >
            {(loading, repository, reverse, collaborators, languages, additionalData) =>
              (<FeaturedProjectCard
                loading={loading}
                repository={repository}
                reverse={reverse ?? false}
                collaborators={collaborators}
                languages={languages}
                additionalData={additionalData}
              />)}
          </FetchRepositoryDetails>
        )}
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {normalRepos?.map(r =>
          <FetchRepositoryDetails
            key={r.id}
            repository={r}
          >
            {(loading, repository, reverse, collaborators, languages, additionalData) =>
              (<ProjectCard
                loading={loading}
                repository={repository}
                collaborators={collaborators}
                languages={languages}
                additionalData={additionalData}
              />)}
          </FetchRepositoryDetails>
        )}
      </div>
    </div>
  )
}

export default Projects
