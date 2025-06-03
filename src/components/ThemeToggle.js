"use client"

import { useState } from "react"

function ThemeToggle({ theme, toggleTheme }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggle = () => {
    setIsAnimating(true)
    toggleTheme()

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }

  return (
    <div style={{ position: "relative" }}>
      {isAnimating && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
            zIndex: 999,
            pointerEvents: "none",
            animation: "fadeOut 1s forwards",
          }}
        ></div>
      )}

      <button
        onClick={handleToggle}
        style={{
          backgroundColor: theme === "light" ? "#333" : "#f8f9fa",
          color: theme === "light" ? "#fff" : "#333",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `rotate(${isAnimating ? "360deg" : "0deg"})`,
            transition: "transform 0.5s ease",
          }}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </div>

        {isAnimating && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: isAnimating ? "300px" : "0",
              height: isAnimating ? "300px" : "0",
              backgroundColor: theme === "light" ? "#121212" : "#ffffff",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              opacity: isAnimating ? 0 : 1,
              transition: "width 0.8s ease-out, height 0.8s ease-out, opacity 0.8s ease-out",
              zIndex: -1,
            }}
          ></div>
        )}
      </button>

      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  )
}

export default ThemeToggle
