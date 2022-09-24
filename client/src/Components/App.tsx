import { FC } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Resume from "../Pages/Resume"
import Navbar from "./Layout/Navbar"

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
