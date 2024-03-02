import type { FC } from "react"
import { useLocation } from "react-router-dom"

const PagePath : FC = () => {
  const location = useLocation()

  return (
    <div className="pt-36 w-10/12 max-w-6xl m-auto">
      <h1 className="text-gray-100 text-center text-4xl font-mono tracking-tighter"><span className="text-bluegray-400">/</span>{location.pathname.substring(1)}</h1>
    </div>
  )
}

export default PagePath
