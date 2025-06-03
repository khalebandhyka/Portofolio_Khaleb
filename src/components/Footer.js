"use client"

import { useState } from "react"

function Footer({ theme, themeChanging }) {
  const [hoveredLink, setHoveredLink] = useState(null)

  const themeStyles = {
    light: {
      textColor: "#6c757d",
      borderColor: "#dddddd",
      hoverColor: "#6a11cb",
    },
    dark: {
      textColor: "#a0a0a0",
      borderColor: "#444444",
      hoverColor: "#2575fc",
    },
  }

  const currentTheme = themeStyles[theme]

  const links = [
    { name: "GitHub", url: "https://github.com/khalebandhyka" },
    { name: "LinkedIn", url: "http://www.linkedin.com/in/khalebandhyka" },
    { name: "Whatsapp", url: "https://wa.me/6287871112515" },
    { name: "E-mail", url: "mailto:khaleb.andhyka@gmail.com" },
  ]

  return (
    <footer
      style={{
        marginTop: "50px",
        padding: "30px 0",
        borderTop: `1px solid ${currentTheme.borderColor}`,
        textAlign: "center",
        color: currentTheme.textColor,
        transition: "all 0.5s ease",
        animation: themeChanging ? "footerSlide 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes footerSlide {
            0% { transform: translateY(5px); opacity: 0.7; }
            100% { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes logoRotate {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 4px 8px rgba(106, 17, 203, 0.3)",
            marginRight: "10px",
            transition: "all 0.5s ease",
            animation: themeChanging ? "logoRotate 1s" : "none",
          }}
        >
          KA
        </div>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: "all 0.5s ease",
          }}
        >
          Khaleb Andhyka Aprijadi
        </span>
      </div>

      <p style={{ margin: "0 0 15px", transition: "all 0.5s ease" }}>
        &copy; {new Date().getFullYear()} Portfolio Khaleb Andhyka Aprijadi.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
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

      <p
        style={{
          fontSize: "14px",
          marginTop: "20px",
          maxWidth: "600px",
          margin: "20px auto 0",
          transition: "all 0.5s ease",
        }}
      >
        I am an Enthusiastic Informatics student specializing in Front-End Development, Mobile Application Development, UI/UX Design, and QA Testing. Proficient in React, JavaScript, Kotlin, and Laravel, with experience in web and mobile projects. Passionate about building userfriendly applications and ensuring high software quality through thorough testing. Actively seeking internship opportunities in Front-End Development, Mobile Application Development, UI/UX Design, or QA Testing. Please feel free to contact me regarding any relevant opportunities aligned with these interests.
      </p>
    </footer>
  )
}

export default Footer
