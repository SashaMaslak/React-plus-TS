import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import TodosPage from "./pages/TodosPage"
import AboutPage from "./pages/AboutPage"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
