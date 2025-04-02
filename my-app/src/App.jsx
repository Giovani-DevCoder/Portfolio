import { useEffect, useState } from "react"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Project from "./components/sections/Project"
import Skills from "./components/sections/Skills";  // Nueva línea
import SideNavigation from "./components/SideNavigation"
import NavigationButtons from "./components/NavigationButtons"
import "./App.css"


function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 4

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault()
      return false
    }

    window.addEventListener("wheel", preventScroll, { passive: false })
    window.addEventListener("touchmove", preventScroll, { passive: false })

    return () => {
      window.removeEventListener("wheel", preventScroll)
      window.removeEventListener("touchmove", preventScroll)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && currentSection < totalSections - 1) {
        navigateToSection(currentSection + 1)
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        navigateToSection(currentSection - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection])

  const navigateToSection = (index) => {
    if (index >= 0 && index < totalSections) {
      setCurrentSection(index)
    }
  }

  const sections = [
    { id: "home", component: <Home /> },
    { id: "about", component: <About /> },
    { id: "projects", component: <Project /> },
    { id: "skills", component: <Skills /> },
  ]

  return (
    <div className="app-container">
      <SideNavigation currentSection={currentSection} totalSections={totalSections} onNavigate={navigateToSection} />

      <div className="sections-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section-wrapper ${index === currentSection ? "active" : ""} ${
              index < currentSection ? "above" : index > currentSection ? "below" : ""
            }`}
          >
            {section.component}
          </div>
        ))}
      </div>

      <NavigationButtons currentSection={currentSection} totalSections={totalSections} onNavigate={navigateToSection} />
        
    </div>
  )
}

export default App