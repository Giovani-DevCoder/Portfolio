import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Check, Newspaper } from "lucide-react"

const CardWithDots = ({ title, description, type, href }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const email = ""

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
  const handleClick = () => {
    if (type === "email") {
      navigator.clipboard.writeText(email)
      setIsCopied(true)
    } else if (href) {
      window.open(href, '_blank') // Abre en nueva pestaña
      // o usar: window.location.href = href // Para abrir en la misma pestaña
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
        return <Github className="w-7 h-7 text-white" />
      case "linkedin":
        return <Linkedin className="w-7 h-7 text-white" />
      case "CV":
        return <Newspaper className="w-7 h-7 text-white" />
      case "email":
        return isCopied ? <Check className="w-7 h-7 text-white" /> : <Mail className="w-7 h-7 text-white" />
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
      {/* Contenedor con separación visual */}
      <div className="relative p-8 pb-12">


        {/* Puntos fijos (no se moverán más) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-1 -left-1 w-0.5 h-0.5 rounded-full bg-white opacity-70 transition-all duration-300"></div>
          <div className="absolute -top-1 -right-1 w-0.5 h-0.5 rounded-full bg-white opacity-70 transition-all duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 rounded-full bg-white opacity-70 transition-all duration-300"></div>
          <div className="absolute -bottom-1 -right-1 w-0.5 h-0.5 rounded-full bg-white opacity-70 transition-all duration-300"></div>
        </div>
      
        {/* Carta centrada con espacio */}
        <div
          className="relative z-10 mt-4 rounded-2xl bg-neutral-800 bg-opacity-70 backdrop-blur-sm grid justify-items-center items-center h-20 cursor-pointer overflow-hidden border border-neutral-700 group-hover:border-neutral-600 transition-all duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {/* Animación de fondo (círculos grandes) */}
          <div
            className={`absolute rounded-full bg-neutral-600 transition-all duration-700 delay-100 ease-in-out ${
              isHovered ? "scale-[30] opacity-100" : "scale-0 opacity-0"
            }`}
            style={{ width: "10px", height: "10px" }}
          />
    
          {/* Contenido normal */}
          <div className={`transition-opacity duration-300 text-center ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <h3 className="text-xl font-light tracking-wide font-Space_Grotesk">{title}</h3>
            {type === "email" && (
              <p className="text-xs text-neutral-300 mt-1 text-center w-full font-['Roboto_Mono']">{email}</p>
            )}
          </div>
          
          {/* Contenido hover */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {renderIcon()}
            <p className="text-sm font-medium font-['Work_Sans'] tracking-wide">{renderText()}</p>
          </div>
        </div>
      </div>
          
      {/* Descripción separada */}
      <div className="mt-2 h-4"></div>
      <h4 className="text-sm mb-2 grid justify-items-center font-['Work_Sans'] text-neutral-400 tracking-wider">
        {description}
      </h4>
    </div>
  )
}

export default CardWithDots
