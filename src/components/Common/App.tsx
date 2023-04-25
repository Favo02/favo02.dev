import { FC } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"
import Home from "../../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentWrapper />,
    errorElement: <p>404</p>,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> }
    ]
  }
])

const App: FC<null> = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
