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
      <div className="w-11/12 flex items-center justify-center relative h-[30rem] md:h-72 mt-10 m-auto p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        <Loading />
      </div>
    )
  }

  return (
    <div className={"w-11/12 flex flex-col md:flex-row items-center justify-center relative h-[30rem] md:h-72 mt-10 m-auto pt-3 pb-6 md:p-0.5 text-center bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black overflow-hidden group" + (reverse ? " flex-row-reverse" : " flex-row")}>
      <div className="absolute top-6 -left-11 bg-gradient-to-r from-bluegray-700 to-gray-500 opacity-100 w-40 -rotate-45 z-10 uppercase text-gray-100 font-bold text-sm">
        <h1>Featured</h1>
      </div>

      <div className="w-full md:w-1/2 h-3/5 md:h-full">
        <RepositoryContent
          repository={repository}
          languages={languages}
          collaborators={collaborators}
          additionalData={additionalData}
          customClasses="!w-5/6"
        />
      </div>

      <Link to={repository.homepage} target="_blank" className="w-full md:w-1/2 h-2/5 md:h-full flex justify-center items-center">
        <div className="relative w-11/12 h-full md:h-[260px] rounded-xl overflow-hidden shadow-md shadow-black/50">
          <DynamicImage fileName={`featured/${repository.name}.webp`} alt="Preview" className="group-hover:translate-y-[calc(-100%+260px)] translate-y-0 transition-transform duration-[3s] opacity-70" />
        </div>
        <div className="absolute flex justify-center items-center w-24 h-24 bg-black/80 rounded-full group-hover:opacity-100 opacity-0 transition-all duration-700">
          <h1 className="text-white">Visit now</h1>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedProjectCard
