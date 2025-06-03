"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

function NavBar({ theme, currentPath, themeChanging }) {
  const [hoveredLink, setHoveredLink] = useState(null)

  const themeStyles = {
    light: {
      navBg: "#f8f9fa",
      textColor: "#333333",
      activeColor: "#6a11cb",
      hoverBg: "#e9ecef",
    },
    dark: {
      navBg: "#2d2d2d",
      textColor: "#e0e0e0",
      activeColor: "#2575fc",
      hoverBg: "#3d3d3d",
    },
  }

  const currentTheme = themeStyles[theme]

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Organizational experience" },
    { path: "/dashboard", label: "Dashboard" },
  ]

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0",
        padding: "0",
        backgroundColor: currentTheme.navBg,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "all 0.5s ease",
        animation: themeChanging ? "navbarFade 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes navbarFade {
            0% { opacity: 0.7; transform: translateY(5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes linkPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {navLinks.map((link, index) => {
        const isActive =
          currentPath === link.path ||
          (link.path === "/projects" && currentPath.startsWith("/projects/")) ||
          (link.path === "/blog" && currentPath.startsWith("/blog/"))

        return (
          <Link
            key={index}
            to={link.path}
            style={{
              textDecoration: "none",
              color: isActive ? currentTheme.activeColor : currentTheme.textColor,
              padding: "15px 0",
              flex: "1",
              textAlign: "center",
              fontWeight: isActive ? "bold" : "normal",
              position: "relative",
              transition: "all 0.3s ease",
              backgroundColor: hoveredLink === index && !isActive ? currentTheme.hoverBg : "transparent",
              borderBottom: isActive ? `3px solid ${currentTheme.activeColor}` : `3px solid transparent`,
              animation: themeChanging && isActive ? "linkPulse 1s" : "none",
            }}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBar
