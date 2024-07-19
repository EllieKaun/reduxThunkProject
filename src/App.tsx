import { Routes, Route } from 'react-router-dom';
import Contact from './features/contact';
import Home from './pages/Home/view';
import Info from './features/info';
import TopAnime from './pages/TopAnime';
import TopAuthors from './pages/TopAuthors';
import TopManga from './pages/TopManga';
import DetailAnime from './pages/DetailAnime';
import DetailAuthors from './pages/DetailAuthors';
import DetailManga from './pages/DetailManga';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/anime" element={<TopAnime />} />
        <Route path="/manga" element={<TopManga />} />
        <Route path="/people" element={<TopAuthors />} />
        <Route path='/anime/:id'element={<DetailAnime/>}/>
        <Route path="/manga/:id" element={<DetailManga/>}/>
        <Route path="/people/:id" element={<DetailAuthors/>}/>
      </Routes>
    </>
  );
}

export default App;
