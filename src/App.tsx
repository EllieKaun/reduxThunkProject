import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./features/contact"
import { baseUrl } from "./shared/lib/constants"

function App() {

  (baseUrl, '123')
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        
      </Routes>
    </>
  )
}

export default App
