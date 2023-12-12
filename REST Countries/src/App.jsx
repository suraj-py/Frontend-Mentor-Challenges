import Home from "./layouts/Home"
import CountryDetailPage from "./layouts/CountryDetailPage"
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useState } from "react"
import { darkModeTheme, lightModeTheme } from "./utilis/themes"


function App() {
  const [theme, setTheme] = useState('dark')
  function themeToggler() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const themeMode = theme === 'dark' ? darkModeTheme : lightModeTheme
  return (
    <ThemeProvider theme={themeMode}>
        <Navbar onClick={themeToggler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={ <CountryDetailPage />} />
        </Routes>
    </ThemeProvider>
    )
}

export default App
