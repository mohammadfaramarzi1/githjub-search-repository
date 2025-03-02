import { useRoutes } from "react-router-dom"
import routes from "./router"

function App() {

  const router = useRoutes(routes)

  return (
    <>
    {routes}
    </>
  )
}

export default App
