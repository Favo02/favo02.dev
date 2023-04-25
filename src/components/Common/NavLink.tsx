import { FC } from "react"
import { NavLink as NL } from "react-router-dom"

const NavLink: FC<{to:string, text:string}> = ({to, text}) => {
  return (
    <NL
      to={to}
      className={({ isActive } : {isActive:boolean}) => ( isActive
        ? "pl-1 text-white uppercase tracking-[4px] bg-gradient-to-r from-slate-800 to-blue-950 bg-no-repeat bg-[size:100%_20%] bg-[position:0_88%]"
        : "pl-1 hover:tracking-[4px] hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-950 bg-no-repeat bg-[size:100%_0.3em] bg-[position:0_88%] transition-all")}
    >{text}</NL>
  )
}

export default NavLink
