import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MSI from "./pages/MSI"
import { baseUrl } from "./shared/lib/constants"

function App() {

  console.log(baseUrl)

  return (

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/MSI" element={<MSI />}/>
      </Routes>

  )
}

export default App
