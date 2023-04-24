import { FC, useState } from "react"
import Logo from "../../assets/images/Logo.png"
import MenuButton from "./MenuButton"

const Header: FC = () => {

  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className="w-full h-24 flex justify-center items-center fixed">
      <div className="w-10/12 max-w-5xl h-12 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg drop-shadow-l flex justify-between items-center">
        <img src={Logo} className="ml-4 w-8 brightness-0 invert" />
        <div className="pr-4 pl-4 h-full cursor-pointer flex items-center" onClick={() => setOpen(!isOpen)}>
          <h1 className="text-gray-300 font-normal tracking-[4px]">MENU</h1>
          <MenuButton isOpen={isOpen} />
        </div>
      </div>
    </div>
  )
}

export default Header

