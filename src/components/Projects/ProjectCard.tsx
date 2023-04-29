import { FC, useEffect, useState } from "react"
import Repository from "../../interfaces/Repository"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import repositoriesService from "../../services/repositories"
import colorsService from "../../services/languageColor"
import Collaborator from "../../interfaces/Collaborator"
import Language from "../../interfaces/Language"

const ProjectCard: FC<{ repository: Repository }> = ({ repository }) => {

  const [collaborators, setCollaborators] = useState<Collaborator[]>()
  const [languages, setLanguages] = useState<Language[]>()

  useEffect(() => {
    const fetchCollaborators = async () => {
      const colls = await repositoriesService.collaborators(repository.full_name)
      setCollaborators(colls)
    }

    const fetchLanguages = async () => {
      const rawLangs = await repositoriesService.languages(repository.full_name)
      
      const langs: Language[] = []
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
    }

    fetchCollaborators()
    fetchLanguages()
  }, [])

  return (
    <div className="flex items-center justify-center w-80 h-72 m-6 p-0.5 text-center rounded-md bg-gradient-to-br from-gray-400 via-transparent to-bluegray-600">
      <div className="w-full h-full flex rounded-md rounded-tr-md rounded-bl-md bg-gray-800/80 relative">
        <div className="w-full h-full py-4 px-2 flex items-center justify-center flex-col">

          <div className="basis-3/12 mb-4">
            <h1 className="text-2xl font-black text-gray-100 capitalize">{repository.name.replaceAll("-", " ")}</h1>
            <div className="text-sm font-bold text-gray-600 italic">
              <Link to={repository.svn_url} target="_blank" rel="noopener noreferrer">{repository.full_name}</Link>
            </div>
          </div>

          <div className="basis-5/12">
            <h4 className="text-bluegray-200">{repository.description}</h4>
          </div>

          <div className="flex justify-center align-middle flex-col w-full basis-2/12">
            
            <div className="opacity-60">
              <div>
                {languages &&
                  languages.map((l: Language) => (
                    <div key={l.language} className="text-bluegray-500 italic inline-block overflow-hidden mx-2" >{l.percentage}% {l.language}</div>
                  ))
                }
              </div>

              <div className="-mt-5">
                {languages &&
                  languages.map((l: Language) => (
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

          <div className="flex justify-center align-middle w-full basis-2/12">
            <div className="flex my justify-center align-middle">

              <div className="flex justify-center align-middle flex-row">
                {collaborators &&
                  collaborators.map((c: Collaborator) => (
                    <Link to={c.html_url} target="_blank" rel="noopener noreferrer" key={c.id} className="-mx-0.5">
                      <img src={c.avatar_url} className="h-5 w-5 rounded-full" title={c.login} alt={c.login} />
                    </Link>
                  ))
                }
              </div>

              <div className="ml-4">
                <Link to={repository.svn_url} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl text-gray-100" />
                </Link>
              </div>

            </div>

              
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard
