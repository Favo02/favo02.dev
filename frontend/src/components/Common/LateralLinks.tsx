import type { FC } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const LateralLinks : FC = () => {

  const linkClasses = "text-2xl text-gray-600 hover:text-bluegray-200 transition-all duration-700"

  return (
    <div className="fixed right-2 bottom-0 h-72 w-16 flex flex-col items-center">

      <div className="w-3 h-px border border-gray-700" />
      <div className="w-px h-5 border border-gray-700" />

      <div className="w-px h-2/4 border border-gray-700 mb-2" />

      <Link to="https://github.com/Favo02" target="_blank" className="my-2">
        <FaGithub title="GitHub" className={`${linkClasses}`} />
      </Link>

      <Link to="https://linkedin.com/in/lucafavini" target="_blank" className="my-2">
        <FaLinkedin title="Linkedin" className={`${linkClasses}`} />
      </Link>

      <Link to="https://twitter.com/Favos02" target="_blank" className="my-2">
        <FaTwitter title="Twitter" className={`${linkClasses}`} />
      </Link>

      <div className="w-px h-3/4 border border-gray-700 mt-2" />

    </div>
  )
}

export default LateralLinks
