import { FC } from "react"
import { Link } from "react-router-dom"
import { FaGithub, FaTelegramPlane, FaTwitter } from "react-icons/fa"

const LateralLinks : FC = () => {

  const linkClasses = "text-2xl text-gray-600 hover:text-bluegray-200 transition-all duration-700" 

  return (
    <div className="fixed left-2 bottom-0 h-72 w-16 flex flex-col items-center">

      <div className="w-3 h-px border border-gray-700" />
      <div className="w-px h-5 border border-gray-700 mb-1" />

      <Link to="https://github.com/Favo02" target="_blank" className="my-2" >
        <FaGithub title="GitHub" className={`${linkClasses}`} />
      </Link>

      <div className="w-px h-5 border border-gray-700 my-1" />
      
      <Link to="https://t.me/Favo02" target="_blank" className="my-2" >
        <FaTelegramPlane title="Telegram" className={`${linkClasses}`} />
      </Link>

      <div className="w-px h-5 border border-gray-700 my-1" />
      
      <Link to="https://twitter.com/imprudenza" target="_blank" className="my-2" >
        <FaTwitter title="Twitter" className={`${linkClasses}`} />
      </Link>

      <div className="w-px h-3/4 border border-gray-700 mt-1" />
    
    </div>
  )
}

export default LateralLinks
