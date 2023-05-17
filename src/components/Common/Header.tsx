import type { FC } from "react"
import { useEffect, useRef,useState } from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/images/Logo.png"

import MenuButton from "./MenuButton"
import NavLink from "./NavLink"

import "../../assets/styles/animations.css"

const Header : FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)

  const headerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {

    // close on click outside component
    const handleClickOutside = (e : MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [headerRef])

  const navLinks = [ "home", "projects", "interests", "about" ]

  const navLinkActiveClasses = "font-mono pl-1 text-gray-100 bg-gradient-to-r from-gray-400 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_88%] transition-all duration-700"

  const navLinkInactiveClasses = "font-mono pl-1 text-gray-300 hover:text-gray-100 hover:tracking-widest hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent bg-no-repeat bg-[size:100%_0.3em] bg-[position:0_88%] transition-all duration-700"

  return (
    <div className="w-full flex justify-center items-center fixed z-10" ref={headerRef}>

      <div className={`w-10/12 max-w-5xl ${isOpen ? "h-28" : "h-14"} mt-8 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black/30 transition-all duration-700 overflow-hidden`}>

        {/* Logo + Menu toggle */}
        <div className="flex justify-between items-center h-14">
          <Link to="/home" onClick={() => setOpen(false)}>
            <div className="flex justify-center items-center">
              <img src={Logo} className="ml-4 w-8 brightness-0 invert" />
              <div className="relative flex items-center w-28 h-14 overflow-hidden">
                <div className="absolute slide-animation uppercase ml-3 font-light text-white z-1">Luca Favini</div>
                <div className="absolute slide-animation-inverse uppercase ml-3 font-light text-white">favo02</div>
              </div>
            </div>
          </Link>

          <div className="pointer pr-4 pl-4 h-full flex items-center" onClick={() => setOpen(!isOpen)}>
            <h1 className="text-gray-300 tracking-[4px]">MENU</h1>
            <MenuButton isOpen={isOpen} />
          </div>
        </div>

        {/* Menu */}
        <div className="flex justify-evenly items-center h-14 text-gray-300">
          {navLinks.map(n =>
            <NavLink
              key={n}
              to={`/${n}`}
              text={n}
              setOpen={setOpen}
              activeClass={navLinkActiveClasses}
              inactiveClass={navLinkInactiveClasses}
              addSlash={true}
            />)
          }
        </div>

      </div>

    </div>
  )
}

export default Header
