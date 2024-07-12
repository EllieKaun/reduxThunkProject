import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import {baseUrl} from './shared/lib/constants'

function App() {
// 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
