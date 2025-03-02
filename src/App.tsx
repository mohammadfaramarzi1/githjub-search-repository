import { useRoutes } from "react-router-dom"
import routes from "./router"
import Banner from "./components/Banner/Banner"

function App() {

  const router = useRoutes(routes)

  return (
    <>
    <Banner />
    {router}
    </>
  )
}

export default App
