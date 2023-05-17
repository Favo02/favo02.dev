import type { FC } from "react"
import { FaGithub, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { GiBrain,GiHearts } from "react-icons/gi"
import { HiMail } from "react-icons/hi"
import { TbLicense } from "react-icons/tb"
import { Link, NavLink } from "react-router-dom"

import packageInfo from "../../../package.json"

const Footer : FC = () => {

  const iconsClasses = "hover:text-gray-100 transition-all duration-700 hover:mx-2 hover:text-3xl hover:-mt-2"

  const navLinkActiveClasses = "font-mono pl-1 text-gray-300 bg-gradient-to-r from-gray-400 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_88%] transition-all duration-700"

  const navLinkClasses = "font-mono pl-1 text-gray-400 hover:text-gray-200 hover:tracking-widest hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent bg-no-repeat bg-[size:100%_0.3em] bg-[position:0_88%] transition-all duration-700"

  return (
    <div className="flex flex-col gap-8 mt-32 w-10/12 max-w-5xl m-auto h-80 bg-gray-400 bg-opacity-20 rounded-t-2xl backdrop-blur-lg shadow-xl shadow-black text-gray-400 text-center">

      <div className="mt-6 flex justify-evenly items-center h-14 uppercase font-mono">
        <NavLink to="/home" className={({ isActive } : {isActive : boolean}) => ( isActive
          ? navLinkActiveClasses : navLinkClasses)}>home</NavLink>
        <NavLink to="/projects" className={({ isActive } : {isActive : boolean}) => ( isActive
          ? navLinkActiveClasses : navLinkClasses)}>projects</NavLink>
        <NavLink to="/interests" className={({ isActive } : {isActive : boolean}) => ( isActive
          ? navLinkActiveClasses : navLinkClasses)}>interests</NavLink>
        <NavLink to="/about" className={({ isActive } : {isActive : boolean}) => ( isActive
          ? navLinkActiveClasses : navLinkClasses)}>about</NavLink>
      </div>

      <div className="opacity-80">
        <div className="flex justify-center gap-4 text-2xl mb-2">
          <Link to="https://github.com/Favo02" title="Github"
            target="_blank" className={iconsClasses}><FaGithub /></Link>

          <Link to="https://t.me/Favo02" title="Telegram"
            target="_blank" className={iconsClasses}><FaTelegramPlane /></Link>

          <Link to="https://twitter.com/imprudenza" title="Twitter"
            target="_blank" className={iconsClasses}><FaTwitter /></Link>
        </div>
        <div title="Email">
          <span className="text-gray-500 hover:text-gray-300 transition-all duration-700">
            <HiMail className="inline text-xl" />
            <Link to="mailto:luca.favini.02@gmail.com" target="_blank"
              className="underline underline-offset-4 decoration-dotted ml-1">luca.favini.02@gmail.com
            </Link>
          </span>
        </div>
      </div>

      <div className="opacity-80">
        <h1 className="text-lg">Build with <GiHearts className="inline" /> and <GiBrain className="inline" /> by Luca Favini</h1>
        <h2 className="text-gray-500 text-sm">v{packageInfo.version} - 2023</h2>
      </div>

      <div className="mb-8 underline underline-offset-4 decoration-dotted text-gray-500">
        <Link to="https://github.com/Favo02/favo02.dev" target="_blank" className="mr-6 hover:text-gray-300 transition-all duration-700">
          <FaGithub className="inline mr-1 mb-1" />Source code
        </Link>
        <Link to="https://creativecommons.org/licenses/by/4.0/" target="_blank" className="hover:text-gray-300 transition-all duration-700">
          <TbLicense className="inline mr-1 mb-1" />CC BY 4.0 Licence
        </Link>
      </div>

    </div>
  )
}

export default Footer