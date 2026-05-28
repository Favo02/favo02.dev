import type { FC } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ResetScroll : FC<{children : React.ReactNode}> = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}

export default ResetScroll
