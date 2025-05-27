import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Check } from "lucide-react"

const CardWithDots = ({ title, description, type }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const email = "Danisonpadron2022@gmail.com"

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleEmailClick = () => {
    if (type === "email") {
      navigator.clipboard.writeText(email)
      setIsCopied(true)
    }
  }

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  const renderIcon = () => {
    switch (type) {
      case "github":
        return <Github className="w-10 h-10 text-white" />
      case "linkedin":
        return <Linkedin className="w-10 h-10 text-white" />
      case "email":
        return isCopied ? <Check className="w-10 h-10 text-white" /> : <Mail className="w-10 h-10 text-white" />
      default:
        return null
    }
  }

  const renderText = () => {
    switch (type) {
      case "github":
        return "Ir a mi Github"
      case "linkedin":
        return "Ir a mi LinkedIn"
      case "email":
        return isCopied ? "Correo copiado" : "Send Email"
      default:
        return title
    }
  }

  return (
    <div>
      <div className="relative p-8">
        {/* Puntos en las esquinas con mayor separación */}
        <div className="absolute -top-1 -left-1 w-1 h-1 rounded-full bg-neutral-300"></div>
        <div className="absolute -top-1 -right-1 w-1 h-1 rounded-full bg-neutral-300"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-neutral-300"></div>
        <div className="absolute -bottom-1 -right-1 w-1 h-1 rounded-full bg-neutral-300"></div>

        {/* Carta con animación */}
        <div
          className="rounded-2xl bg-neutral-700 grid justify-items-center items-center h-36 cursor-pointer overflow-hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleEmailClick}
        >
          {/* Círculos de animación */}
          <div
            className={`absolute rounded-full bg-neutral-600 transition-all duration-500 ease-in-out ${
              isHovered ? "scale-[30] opacity-100" : "scale-0 opacity-0"
            }`}
            style={{ width: "10px", height: "10px" }}
          />
          <div
            className={`absolute rounded-full bg-neutral-500 transition-all duration-700 delay-100 ease-in-out ${
              isHovered ? "scale-[30] opacity-100" : "scale-0 opacity-0"
            }`}
            style={{ width: "10px", height: "10px" }}
          />

          {/* Contenido normal */}
          <div className={`transition-opacity duration-300 text-center ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <h3 className="text-xl font-bold">{title}</h3>
            {type === "email" && <p className="text-xs text-neutral-300 mt-1 text-center w-full">{email}</p>}
          </div>

          {/* Contenido hover */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 ${
              isHovered ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            {renderIcon()}
            <p className="text-sm font-medium">{renderText()}</p>
          </div>
        </div>
      </div>
      <div className="h-4"></div>
      <h4 className="text-sm mb-2 grid justify-items-center">{description}</h4>
    </div>
  )
}

export default CardWithDots
