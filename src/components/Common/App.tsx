import type { FC } from "react"
import { useEffect, useState } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"

import Home from "../../pages/Home"
import Interests from "../../pages/Interests"
import Projects from "../../pages/Projects"

import ContentWrapper from "./ContentWrapper"
import Loading from "./Loading"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentWrapper />,
    errorElement: <p>404</p>,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "interests", element: <Interests /> }
    ]
  }
])

const App : FC<null> = () => {

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
    <RouterProvider router={router} />
  )
}

export default App
