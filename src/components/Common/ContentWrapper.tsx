import type { FC } from "react"
import { useEffect,useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet } from "react-router-dom"

import Header from "./Header"
import LateralLinks from "./LateralLinks"
import Loading from "./Loading"

const ContentWrapper : FC = () => {

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading />
      </div>
    )
  }

  return (
    <>
      <Header />
      <Outlet />
      <LateralLinks />
      <p>footer</p>
      <AnimatedCursor
        color="159, 179, 200"
        innerSize={8}
        innerScale={0.5}
        outerSize={20}
        outerScale={3}
        outerAlpha={0.3}
        outerStyle={{
          background: "rgb(34, 45, 61, 0.5)"
        }}
        clickables={[
          "a",
          ".pointer"
        ]}
        showSystemCursor={true}
        showSystemCursorOnClickable={true}
      />
    </>
  )
}

export default ContentWrapper
