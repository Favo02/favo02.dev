import type { FC } from "react"
import { Link } from "react-router-dom"

import type Collaborator from "../../interfaces/Collaborator"
import type Language from "../../interfaces/Language"
import type Repository from "../../interfaces/Repository"
import DynamicImage from "../Common/DynamicImage"
import Loading from "../Common/Loading"

import RepositoryContent from "./RepositoryContent"

interface props {
  loading : boolean,
  repository : Repository,
  reverse : boolean,
  collaborators ?: Collaborator[],
  languages ?: Language[],
  additionalData ?: {totalCommits : number, lastCommit : Date}
}

const FeaturedProjectCard : FC<props> = ({ loading, repository, reverse, collaborators, languages, additionalData }) => {

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
