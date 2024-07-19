import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MSI from "./pages/MSI"
import TopAnime from "./pages/TopAnime"
import TopAuthors from "./pages/TopAuthors"
import TopManga from "./pages/TopManga"
import DetailAnime from "./pages/DetailAnime"
import DetailManga from "./pages/DetailManga"
import DetailAuthors from "./pages/DetailAuthors"

function App() {


  return (

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/MSI" element={<MSI />}/>
        <Route path="/anime" element={<TopAnime />} />
        <Route path="/manga" element={<TopManga />} />
        <Route path="/people" element={<TopAuthors />} />
        <Route path="/anime/:id" element={<DetailAnime />} />
        <Route path="/manga/:id" element={<DetailManga />} />
        <Route path="/people/:id" element={<DetailAuthors />} />
      </Routes>

  )
}

export default App
