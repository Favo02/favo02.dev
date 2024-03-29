import type { FC } from "react"
import { useEffect,useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet } from "react-router-dom"

import useIsSmallDevice from "../../hooks/useIsSmallDevice"

import Footer from "./Footer"
import Header from "./Header"
import LateralInfo from "./LateralInfo"
import LateralLinks from "./LateralLinks"
import Loading from "./Loading"
import PagePath from "./PagePath"
import ResetScroll from "./ResetScroll"
import Scrollbar from "./Scrollbar"

const ContentWrapper : FC = () => {

  const [isSmallDevice] = useIsSmallDevice()

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
    <ResetScroll>

      <Header />
      <PagePath />
      <Outlet />
      {!isSmallDevice && <LateralInfo />}
      {!isSmallDevice && <LateralLinks />}
      <Footer />

      <Scrollbar customClasses="left-0" />
      <Scrollbar customClasses="right-0" />
      {!isSmallDevice &&
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
            ".cursor-pointer"
          ]}
          showSystemCursor={true}
        />
      }

    </ResetScroll>
  )
}

export default ContentWrapper
