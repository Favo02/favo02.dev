import type { FC } from "react"
import { useEffect, useState } from "react"

const Scrollbar : FC<{customClasses ?: string}> = ({ customClasses }) => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  return (
    <div className={`fixed top-0 w-0.5 md:w-1.5 bg-gradient-to-b from-bluegray-800 to-bluegray-400 z-20 ${customClasses}`}
      style={{ height: `${scrollTop}%` }}
    />
  )
}

export default Scrollbar
