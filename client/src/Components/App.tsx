import { FC } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Resume from "../Pages/Resume"
import Footer from "./Layout/Footer"
import Navbar from "./Layout/Navbar"

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
