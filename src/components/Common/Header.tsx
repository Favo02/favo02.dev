import { FC, useState } from "react"
import Logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
import MenuButton from "./MenuButton"
import NavLink from "./NavLink"
import "../../assets/styles/animations.css"

const Header: FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className="w-full flex justify-center items-center fixed z-10">

      <div className={`w-10/12 max-w-5xl ${isOpen ? "h-28" : "h-14"} mt-8 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg drop-shadow-l transition-all duration-700 overflow-hidden`}>
        
        {/* Logo + Menu toggle */}
        <div className="flex justify-between items-center h-14">
          <Link to="/home">
            <div className="flex justify-center items-center">
              <img src={Logo} className="ml-4 w-8 brightness-0 invert" />
              <div className="relative flex items-center w-28 h-14 overflow-hidden">
                <div className="absolute slide-animation uppercase ml-3 font-light text-white z-1">Luca Favini</div>
                <div className="absolute slide-animation-inverse uppercase ml-3 font-light text-white">favo02</div>
              </div>
            </div>
          </Link>

          <div className="pr-4 pl-4 h-full cursor-pointer flex items-center" onClick={() => setOpen(!isOpen)}>
            <h1 className="text-gray-300 tracking-[4px]">MENU</h1>
            <MenuButton isOpen={isOpen} />
          </div>
        </div>

        {/* Menu */}
        <div className="flex justify-evenly items-center h-14 text-gray-300">
          <NavLink to="/home" text="Home" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/about" text="About" />
        </div>

      </div>

    </div>
  )
}

export default Header