import React from "react"
import { useNavigate } from "react-router-dom"

const AboutPage: React.FC = () => {
  const navigate = useNavigate()

  const navigateToPage = () => {
    // Виклик функції navigate для переходу до нової сторінки
    navigate("/")
  }

  return (
    <>
      <h1>Page of information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        incidunt totam natus saepe, cumque quo, earum eos itaque laudantium
        cupiditate est iure recusandae! Omnis magnam alias corporis sint ut
        dicta!
      </p>
      <button className="btn" onClick={navigateToPage}>
        Back to Todolist
      </button>
    </>
  )
}

export default AboutPage
