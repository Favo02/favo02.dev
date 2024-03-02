import { useEffect, useState } from "react"

const useIsSmallDevice = (breakpoint = 768) => {

  const [isSmallDevice, SetIsSmallDevice] = useState(window.innerWidth < breakpoint)

  useEffect(() => {
    const handlePageResized = () => {
      SetIsSmallDevice(window.innerWidth < breakpoint)
    }

    if (window) {
      window.addEventListener("resize", handlePageResized)
      window.addEventListener("orientationchange", handlePageResized)
      window.addEventListener("load", handlePageResized)
      window.addEventListener("reload", handlePageResized)
    }

    return () => {
      if (window) {
        window.removeEventListener("resize", handlePageResized)
        window.removeEventListener("orientationchange", handlePageResized)
        window.removeEventListener("load", handlePageResized)
        window.removeEventListener("reload", handlePageResized)
      }
    }

  }, [breakpoint])

  return [isSmallDevice]
}

export default useIsSmallDevice
