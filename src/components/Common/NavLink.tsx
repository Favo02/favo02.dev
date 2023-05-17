import type { FC } from "react"
import { NavLink as NL } from "react-router-dom"

interface Props {
  to : string,
  text : string,
  activeClass : string,
  inactiveClass : string,
  addSlash : boolean,
  setOpen ?: (value : boolean) => void
}

const NavLink : FC<Props> = ({ to, text, activeClass, inactiveClass, addSlash, setOpen }) => (
  <NL
    to={to}
    className={({ isActive } : {isActive : boolean}) => ( isActive ? activeClass : inactiveClass)}
    onClick={() => setOpen ? setOpen(false) : undefined}
  >{addSlash && <span className="text-bluegray-400">/</span>}{text}</NL>
)

export default NavLink
