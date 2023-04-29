import { FC } from "react"
import { NavLink as NL } from "react-router-dom"

const NavLink : FC<{to : string, text : string, setOpen : (value : boolean) => void}> = ({to, text, setOpen}) => {
  return (
    <NL
      to={to}
      className={({ isActive } : {isActive : boolean}) => ( isActive
        ? "pl-1 text-white uppercase tracking-[4px] bg-gradient-to-r from-gray-400 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_88%]"
        : "pl-1 hover:tracking-[4px] hover:bg-gradient-to-r hover:from-gray-600 hover:to-transparent bg-no-repeat bg-[size:100%_0.3em] bg-[position:0_88%] transition-all duration-700")}
      onClick={() => setOpen(false)}
    >{text}</NL>
  )
}

export default NavLink
