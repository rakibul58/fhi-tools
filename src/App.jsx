import { RouterProvider } from "react-router-dom"
import router from "./routes/Router"

const App = () => {

  return (
    <div className="max-w-full bg-accent bg-opacity-10 min-h-screen mx-auto">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  )
}

export default App
