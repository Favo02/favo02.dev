import { FC } from "react"
import { Outlet } from "react-router-dom"

const ContentWrapper: FC = () => {
  return (
    <>
      <p>header</p>
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default ContentWrapper
