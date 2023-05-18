import type { FC } from "react"
import { useEffect, useState } from "react"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"
import colorsService from "../../services/languageColor"
import repositoriesService from "../../services/repositories"
import Loading from "../Common/Loading"

import RepositoryContent from "./RepositoryContent"

const ProjectCard : FC<{ repository : Repository }> = ({ repository }) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [collaborators, setCollaborators] = useState<Collaborator[]>()
  const [languages, setLanguages] = useState<Language[]>()
  const [additionalData, setAdditionalData] = useState<{totalCommits : number, lastCommit : Date}>()

  // fetch collaborators, languages (call to API) at component load
  useEffect(() => {

    const fetchCollaborators = async () => {
      setLoading(true)
      const colls = await repositoriesService.collaborators(repository.full_name)
      setCollaborators(colls)
      setLoading(false)
    }

    const fetchLanguages = async () => {
      setLoading(true)
      const rawLangs = await repositoriesService.languages(repository.full_name)

      const langs : Language[] = []
      let sum = 0
      for (const l in rawLangs) {
        langs.push({
          "language": l,
          "rows": rawLangs[l]
        })
        sum += rawLangs[l]
      }

      // calculate percentage and fetch color
      for (let i = 0; i < langs.length; i++) {
        langs[i].percentage = Math.round((100 * langs[i].rows) / sum)
        langs[i].color = await colorsService.getColor(langs[i].language)
      }

      setLanguages(langs)
      setLoading(false)
    }

    fetchCollaborators()
    fetchLanguages()

  }, [])

  // calculate additional data (commits, last commit), triggered at collaborators load
  useEffect(() => {
    setLoading(true)

    let commits = 0
    collaborators?.forEach(c => commits += c.contributions)

    const lastCommit = new Date(repository.pushed_at)

    setAdditionalData({ totalCommits: commits, lastCommit })

    setLoading(false)
  }, [collaborators])

  if (loading) {
    return (
      <div className="flex items-center justify-center w-80 h-72 m-6 p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        <Loading />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center relative w-80 h-72 m-6 p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
      <RepositoryContent
        repository={repository}
        languages={languages}
        collaborators={collaborators}
        additionalData={additionalData}
      />
    </div>
  )
}

export default ProjectCard
