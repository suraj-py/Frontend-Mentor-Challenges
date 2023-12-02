import Home from "./layouts/Home"
import CountryDetailPage from "./layouts/CountryDetailPage"
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={ <CountryDetailPage />} />
        </Routes>
    </>
    )
}

export default App
