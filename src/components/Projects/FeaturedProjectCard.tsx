import type { FC } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"
import colorsService from "../../services/languageColor"
import repositoriesService from "../../services/repositories"
import DynamicImage from "../Common/DynamicImage"
import Loading from "../Common/Loading"

import RepositoryContent from "./RepositoryContent"

const FeaturedProjectCard : FC<{ repository : Repository, reverse : boolean }> = ({ repository, reverse }) => {

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
      <div className="w-11/12 flex items-center justify-center relative h-72 mt-10 m-auto p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        <Loading />
      </div>
    )
  }

  return (
    <div className={"w-11/12 flex items-center justify-center relative h-72 mt-10 m-auto p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black overflow-hidden group" + (reverse ? " flex-row-reverse" : " flex-row")}>
      <div className="absolute top-6 -left-11 bg-gradient-to-r from-bluegray-700 to-gray-500 opacity-100 w-40 -rotate-45 z-10 uppercase text-gray-100 font-bold text-sm">
        <h1>Featured</h1>
      </div>

      <div className="w-1/2 h-full">
        <RepositoryContent
          repository={repository}
          languages={languages}
          collaborators={collaborators}
          additionalData={additionalData}
        />
      </div>

      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="relative w-11/12 h-[260px] rounded-xl overflow-hidden shadow-md shadow-black/50">
          <Link to={repository.homepage}>
            <DynamicImage fileName={`featured/${repository.name}.jpg`} alt="Preview" className="group-hover:translate-y-[calc(-100%+260px)] translate-y-0 transition-transform duration-[3s] opacity-70" />
          </Link>
        </div>
        <div className="absolute flex justify-center items-center w-24 h-24 bg-black/80 rounded-full group-hover:opacity-100 opacity-0 transition-all duration-700">
          <h1 className="text-white">Visit now</h1>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjectCard
