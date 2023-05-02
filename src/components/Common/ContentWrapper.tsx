import { FC, useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Loading from "./Loading"
import AnimatedCursor from "react-animated-cursor"

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
      />
    </>
  )
}

export default ContentWrapper
