import type { FC } from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { GiBrain,GiHearts } from "react-icons/gi"
import { HiMail } from "react-icons/hi"
import { TbLicense } from "react-icons/tb"
import { Link } from "react-router-dom"

import packageInfo from "../../../package.json"

import NavLink from "./NavLink"

const Footer : FC = () => {

  const iconsClasses = "hover:text-gray-100 transition-all duration-700 hover:mx-2"

  const navLinks = [ "home", "projects", "interests", "about" ]

  const navLinkActiveClasses = "uppercase font-mono pl-1 text-gray-300 bg-gradient-to-r from-gray-400 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_88%] transition-all duration-700"

  const navLinkInactiveClasses = "uppercase font-mono pl-1 text-gray-500 hover:text-gray-200 hover:tracking-widest hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent bg-no-repeat bg-[size:100%_0.3em] bg-[position:0_88%] transition-all duration-700"

  return (
    <div className="flex flex-col gap-8 mt-32 w-10/12 max-w-5xl m-auto h-80 bg-gray-400 bg-opacity-20 rounded-t-2xl backdrop-blur-lg shadow-xl shadow-black text-gray-400 text-center">

      {/* Menu links */}
      <div className="mt-6 flex justify-evenly items-center h-14">
        {navLinks.map(n =>
          <NavLink
            key={n}
            to={`/${n}`}
            text={n}
            activeClass={navLinkActiveClasses}
            inactiveClass={navLinkInactiveClasses}
            addSlash={false}
          />)
        }
      </div>

      {/* Social links */}
      <div className="opacity-80">
        <div className="flex justify-center gap-4 text-2xl mb-2">
          <Link to="https://github.com/Favo02" target="_blank">
            <FaGithub title="GitHub" className={iconsClasses} />
          </Link>

          <Link to="https://linkedin.com/in/lucafavini" target="_blank">
            <FaLinkedin title="Linkedin" className={iconsClasses} />
          </Link>

          <Link to="https://twitter.com/Favos02" target="_blank">
            <FaTwitter title="Twitter" className={iconsClasses} />
          </Link>

          <Link to="https://instagram.com/lcfvn" target="_blank">
            <FaInstagram title="Instagram" className={iconsClasses} />
          </Link>

          <Link to="https://t.me/Favo02" target="_blank">
            <FaTelegramPlane title="Telegram" className={iconsClasses} />
          </Link>

        </div>
        <div>
          <span className="text-gray-500 hover:text-gray-300 transition-all duration-700 group">
            <HiMail className="inline text-xl" />
            <span className="underline underline-offset-4 decoration-dotted ml-1">luca.favini.02</span>
            <span className="italic"> AT </span>
            <span className="underline underline-offset-4 decoration-dotted">gmail.com</span>
            <div className="absolute text-center w-full  opacity-0 group-hover:opacity-100 m-auto transition-all duration-700">Dumb and bot filter: if you can&apos;t correctly understand this email you shouldn&apos;t contact me.</div>
          </span>
        </div>
      </div>

      {/* Author, Version */}
      <div className="opacity-80">
        <h1 className="text-lg">Build with <GiHearts className="inline" /> and <GiBrain className="inline" /> by Luca Favini</h1>
        <h2 className="text-gray-500 text-sm">v{packageInfo.version} - 2023</h2>
      </div>

      {/* Source code, License */}
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
