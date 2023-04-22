import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>header</p>,
    errorElement: <p>404</p>,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> }
    ]
  }
])

const App: FC<{}> = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
