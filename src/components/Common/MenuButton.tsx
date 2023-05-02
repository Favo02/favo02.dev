import { FC } from "react"
import "../../assets/styles/animations.css"

const MenuButton : FC<{isOpen : boolean}> = ({ isOpen }) => {
  return (
    <div className="relative ml-2 w-10 h-10">
      <div className={`pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isOpen ? "w-6" : "w-6"}`}>
        <span className={`${isOpen ? "active" : "not-active"} first block w-full rounded-sm h-px bg-white transition-all relative`}></span>
        <span className={`${isOpen ? "active" : "not-active"} second block w-full rounded-sm h-px bg-white transition-all relative mt-1`}></span>
        <span className={`${isOpen ? "active" : "not-active"} third block w-full rounded-sm h-px bg-white transition-all relative mt-1`}></span>
      </div>
    </div>
  )
}

export default MenuButton
