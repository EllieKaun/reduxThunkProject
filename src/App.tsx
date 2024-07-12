import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./features/contact"
import TopAnime from "./pages/TopAnime"
import TopManga from "./pages/TopManga"
import TopAuthors from "./pages/TopAuthors"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/anime" element={<TopAnime />}/>
        <Route path="/manga" element={<TopManga />}/>
        <Route path="/authors" element={<TopAuthors />}/>
      </Routes>
    </>
  )
}

export default App
