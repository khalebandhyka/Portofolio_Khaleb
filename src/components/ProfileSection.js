"use client"

import { useState } from "react"


function ProfileSection({ theme, themeChanging }) {
  const [isHovered, setIsHovered] = useState(false)

  const themeStyles = {
    light: {
      bgGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      textColor: "#333333",
      shadowColor: "rgba(0,0,0,0.1)",
      buttonBg: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      buttonHoverBg: "linear-gradient(90deg, #5a0cb0 0%, #1565e0 100%)",
      buttonText: "#ffffff",
    },
    dark: {
      bgGradient: "linear-gradient(135deg, #2d3436 0%, #000000 100%)",
      textColor: "#e0e0e0",
      shadowColor: "rgba(0,0,0,0.3)",
      buttonBg: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      buttonHoverBg: "linear-gradient(90deg, #5a0cb0 0%, #1565e0 100%)",
      buttonText: "#ffffff",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px 0",
        background: currentTheme.bgGradient,
        borderRadius: "10px",
        marginBottom: "30px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.5s ease",
        animation: themeChanging ? "profilePulse 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes profilePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.01); }
            100% { transform: scale(1); }
          }
          
          @keyframes imageSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes textFade {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          
          @keyframes buttonPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes downloadIcon {
            0% { transform: translateY(0); }
            50% { transform: translateY(3px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M10 10L90 90M90 10L10 90" stroke="%23000" stroke-width="2"/></svg>\')',
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 20px",
          border: `5px solid ${theme === "light" ? "white" : "#333"}`,
          boxShadow: `0 5px 15px ${currentTheme.shadowColor}`,
          position: "relative",
          zIndex: 1,
          transition: "all 0.5s ease",
          animation: themeChanging ? "imageSpin 1s" : "none",
        }}
      >
        <img
          src="/foto-khaleb.jpg"
          alt="Khaleb Andhyka Aprijadi"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "15px",
          position: "relative",
          zIndex: 1,
          color: currentTheme.textColor,
          transition: "all 0.5s ease",
          animation: themeChanging ? "textFade 1s" : "none",
        }}
      >
        Khaleb Andhyka Aprijadi
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto 25px",
          position: "relative",
          zIndex: 1,
          color: currentTheme.textColor,
          lineHeight: 1.6,
          transition: "all 0.5s ease",
          animation: themeChanging ? "textFade 1s" : "none",
        }}
      >
        Informatics student passionate about Front-End, Mobile, and Python Development, with strong problem-solving skills and growing interest in Backend. Experienced in Python, React Native, Kotlin, Laravel, and JavaScript for both UI and system-level work.
      </p>

      {/* Download CV Button */}
      <a
        href="/CV_Khaleb Andhyka Aprijadi.pdf"
        download
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
          background: isHovered ? currentTheme.buttonHoverBg : currentTheme.buttonBg,
          color: currentTheme.buttonText,
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: isHovered ? "0 6px 20px rgba(106, 17, 203, 0.6)" : "0 4px 15px rgba(106, 17, 203, 0.4)",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 1,
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          animation: themeChanging ? "buttonPulse 1s" : "none",
          transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          style={{
            marginRight: "10px",
            fontSize: "1.2rem",
            transition: "all 0.3s ease",
            animation: isHovered ? "downloadIcon 1s infinite" : "none",
          }}
        >
          ⬇️
        </span>
        Download CV
      </a>
    </div>
  )
}

export default ProfileSection
