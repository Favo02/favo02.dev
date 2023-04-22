import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>header</p>,
    errorElement: <p>404</p>,
    children: [
      { path: "", element: <></> },
      { path: "home", element: <></> }
    ]
  }
])

const App: FC<{}> = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
