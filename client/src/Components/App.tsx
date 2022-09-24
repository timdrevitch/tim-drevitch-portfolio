import { FC } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Resume from "../Pages/Resume"
import Navbar from "./Layout/Navbar"

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tim-drevitch-portfolio/" element={<Home />} />
        <Route path="/tim-drevitch-portfolio/resume" element={<Resume />} />
        <Route path="/tim-drevitch-portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
