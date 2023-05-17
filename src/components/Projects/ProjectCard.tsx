import type { FC } from "react"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"
import { GoGitCommit } from "react-icons/go"
import { RiGitRepositoryCommitsLine } from "react-icons/ri"
import { Link } from "react-router-dom"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"
import colorsService from "../../services/languageColor"
import repositoriesService from "../../services/repositories"
import Loading from "../Common/Loading"

const ProjectCard : FC<{ repository : Repository }> = ({ repository }) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [collaborators, setCollaborators] = useState<Collaborator[]>()
  const [languages, setLanguages] = useState<Language[]>()
  const [additionalData, setAdditionalData] = useState<{totalCommits : number, lastCommit : Date}>()

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

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
      <div className="w-full h-full py-4 px-2 flex items-center justify-center flex-col">

        <div className="basis-3/12 mb-4">
          <h1 className="text-2xl font-black text-gray-100 capitalize">{repository.name.replaceAll("-", " ")}</h1>
          <div className="text-sm font-bold text-gray-600 italic">
            <Link to={repository.svn_url} target="_blank">{repository.full_name}</Link>
          </div>
        </div>

        <div className="basis-5/12">
          <h4 className="text-bluegray-200">{repository.description}</h4>
        </div>

        <div className="flex justify-center align-middle flex-col w-full basis-2/12">

          <div className="opacity-60">
            <div>
              {languages &&
                languages.map((l : Language) => (
                  <div key={l.language} className="text-bluegray-500 italic inline-block overflow-hidden mx-2">{l.percentage}% {l.language}</div>
                ))
              }
            </div>

            <div className="-mt-5">
              {languages &&
                languages.map((l : Language) => (
                  <div
                    key={l.language}
                    className="inline-block h-1 overflow-hidden"
                    // tailwind does not support built arbitrary values
                    style={{
                      "width": `${l.percentage}%`,
                      "background": `${l.color}`
                    }}
                  />
                ))
              }
            </div>
          </div>

        </div>

        <div className="flex justify-evenly w-full basis-1/12 italic opacity-60 -mt-1 mb-1">
          <h4 className="text-bluegray-500" title="Commits">
            {additionalData?.totalCommits} <GoGitCommit className="inline" />
          </h4>
          <h4 className="text-bluegray-500" title="Last commit">
            {additionalData?.lastCommit.getDate()} {additionalData ? monthNames[additionalData.lastCommit.getMonth()] : ""} {additionalData?.lastCommit.getFullYear()} <RiGitRepositoryCommitsLine className="inline -mt-px" />
          </h4>
        </div>

        <div className="flex justify-center align-middle w-full basis-1/12">
          <div className="flex my justify-center align-middle">

            <div className="flex justify-center align-middle flex-row">
              {collaborators &&
                collaborators.map((c : Collaborator) => (
                  <Link to={c.html_url} target="_blank" key={c.id} className="-mx-0.5">
                    <img src={c.avatar_url} className="h-5 w-5 rounded-full" title={c.login} alt={c.login} />
                  </Link>
                ))
              }
            </div>

            <div className="ml-4">
              <Link to={repository.svn_url} target="_blank">
                <FaGithub className="text-xl text-gray-100" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
