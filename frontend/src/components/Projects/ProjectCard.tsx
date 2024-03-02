import type { FC } from "react"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"
import Loading from "../Common/Loading"

import RepositoryContent from "./RepositoryContent"

interface props {
  loading : boolean,
  repository : Repository,
  collaborators ?: Collaborator[],
  languages ?: Language[],
  additionalData ?: {totalCommits : number, lastCommit : Date},
  customClasses ?: string
}

const ProjectCard : FC<props> = ({ loading, repository, collaborators, languages, additionalData, customClasses }) => {

  if (loading) {
    return (
      <div className="flex items-center justify-center w-72 md:w-80 h-80 md:h-72 m-6 p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        <Loading />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center relative w-72 md:w-80 h-80 md:h-72 m-6 p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black ${customClasses}`}>
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
