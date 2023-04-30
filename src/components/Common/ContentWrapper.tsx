import { FC, useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
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
      <p>footer</p>
    </>
  )
}

export default ContentWrapper
