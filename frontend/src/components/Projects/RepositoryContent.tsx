import type { FC } from "react"
import { FaGithub, FaGlobe, FaRegStar } from "react-icons/fa"
import { GoGitCommit, GoRepoForked } from "react-icons/go"
import { RiGitRepositoryCommitsLine } from "react-icons/ri"
import { Link } from "react-router-dom"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"

interface props {
  repository : Repository,
  languages ?: Language[],
  collaborators ?: Collaborator[],
  additionalData ?: {totalCommits : number, lastCommit : Date},
  customClasses ?: string
}

const RepositoryContent : FC<props> = ({ repository, languages, collaborators, additionalData, customClasses }) => {

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <div className={`m-auto w-full h-full py-4 px-2 flex items-center justify-center flex-col ${customClasses}`}>

      <div className="basis-3/12 mb-4">
        <h1 className="text-xl md:text-2xl font-black text-gray-100 capitalize">{repository.name.replaceAll("-", " ")}</h1>
        <div className="text-xs md:text-sm font-bold text-gray-600 italic">
          <Link to={repository.svn_url} target="_blank">{repository.full_name}</Link>
        </div>
      </div>

      <div className="basis-5/12">
        <h4 className="text-sm md:text-base text-bluegray-200">{repository.description}</h4>
      </div>

      <div className="flex justify-center align-middle flex-col w-full basis-2/12">

        <div className="opacity-60">
          <div>
            {languages &&
              languages.slice(0,3).map((l : Language) => (
                <div key={l.language} className="text-sm md:text-base text-bluegray-500 italic inline-block overflow-hidden mx-2">{l.percentage}% {l.language}</div>
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

      <div className="text-sm md:text-base flex justify-evenly w-full basis-1/12 italic opacity-60 -mt-1 mb-1">
        {repository.stargazers_count > 0 &&
          <h4 className="text-bluegray-500" title="Stars">
            {repository.stargazers_count} <FaRegStar className="inline -mt-1" />
          </h4>
        }
        {repository.forks > 0 &&
          <h4 className="text-bluegray-500" title="Forks">
            {repository.forks} <GoRepoForked className="inline -mt-0.5" />
          </h4>
        }
        <h4 className="text-bluegray-500" title="Commits">
          {additionalData?.totalCommits} <GoGitCommit className="inline -mt-0.5" />
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

          <div className="flex justify-center align-middle flex-row ml-4">
            <Link to={repository.svn_url} target="_blank">
              <FaGithub className="text-lg md:text-xl text-gray-100" />
            </Link>
            {repository.homepage &&
              <Link to={repository.homepage} target="_blank" className="mx-0.5">
                <FaGlobe className="text-lg md:text-xl text-gray-100" />
              </Link>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default RepositoryContent
