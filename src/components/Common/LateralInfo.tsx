import type { FC } from "react"
import { TbArrowBadgeUp } from "react-icons/tb"
import { useLocation } from "react-router-dom"

const LateralLinks : FC = () => {

  const location = useLocation()

  return (
    <div className="fixed left-2 bottom-0 h-72 w-16 flex flex-col items-center">

      <div className="w-3 h-px border border-gray-700" />
      <div className="w-px h-5 border border-gray-700" />

      <div className="w-px h-40 border border-gray-700" />

      <div
        className="pointer py-4 text-gray-600 hover:text-bluegray-200 transition-all duration-700"
        onClick={() => window.scrollTo(0, 0)}
        title="Scroll to top"
      >
        <TbArrowBadgeUp className="text-2xl m-auto mb-3" />
        <h1
          className="mr-1 text-xl tracking-wider rotate-180  font-mono"
          style={{ writingMode: "vertical-rl" }}
        >{location.pathname}</h1>
      </div>

      <div className="w-px h-3/4 border border-gray-700 mt-1" />

    </div>
  )
}

export default LateralLinks
