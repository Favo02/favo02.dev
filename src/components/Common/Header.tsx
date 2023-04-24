import { FC } from "react"
import Logo from "../../assets/images/Logo.png"

const Header: FC = () => {
  return (
    <div className="w-full h-24 flex justify-center items-center fixed">
      <div className="w-10/12 h-12 border-white bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg drop-shadow-l flex justify-between items-center">
        <img src={Logo} className="ml-4 w-8 brightness-0 invert" />
        <h1 className="mr-4 text-gray-300 font-normal tracking-[4px]">MENU</h1>
      </div>
    </div>
  )
}

export default Header
