"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

function Header({ theme, themeChanging }) {
  const [hoveredLink, setHoveredLink] = useState(null)

  const themeStyles = {
    light: {
      textColor: "#333333",
      borderColor: "#dddddd",
      hoverColor: "#6a11cb",
    },
    dark: {
      textColor: "#e0e0e0",
      borderColor: "#444444",
      hoverColor: "#2575fc",
    },
  }

  const currentTheme = themeStyles[theme]

  const links = [
    { name: "GitHub", url: "https://github.com/khalebandhyka" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/khalebandhyka" },
    { name: "E-mail", url: "mailto:khaleb.andhyka@gmail.com" },
    { name: "Whatsapp", url: "https://wa.me/6287871112515" },
  ]

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        borderBottom: `1px solid ${currentTheme.borderColor}`,
        transition: "all 0.5s ease",
        animation: themeChanging ? "headerSlide 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes headerSlide {
            0% { transform: translateY(-5px); opacity: 0.7; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes logoSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
          }
        `}
      </style>

      <Link to="/" style={{ textDecoration: "none", color: currentTheme.textColor }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 4px 8px rgba(106, 17, 203, 0.3)",
              transition: "all 0.3s ease",
              animation: themeChanging ? "logoSpin 1s" : "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(10deg) scale(1.1)"
              e.target.style.boxShadow = "0 6px 12px rgba(106, 17, 203, 0.4)"
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0) scale(1)"
              e.target.style.boxShadow = "0 4px 8px rgba(106, 17, 203, 0.3)"
            }}
          >
            KA
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              transition: "all 0.5s ease",
            }}
          >
            Khaleb Andhyka Aprijadi
          </h1>
        </div>
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hoveredLink === index ? currentTheme.hoverColor : currentTheme.textColor,
              textDecoration: "none",
              transition: "all 0.3s ease",
              position: "relative",
              padding: "5px 0",
            }}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span>{link.name}</span>
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: hoveredLink === index ? "100%" : "0",
                height: "2px",
                backgroundColor: currentTheme.hoverColor,
                transition: "width 0.3s ease",
              }}
            ></span>
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
