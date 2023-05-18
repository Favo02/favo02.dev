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
  additionalData ?: {totalCommits : number, lastCommit : Date}
}

const ProjectCard : FC<props> = ({ loading, repository, collaborators, languages, additionalData }) => {

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
