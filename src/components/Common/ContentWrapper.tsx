import { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

const ContentWrapper: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default ContentWrapper
