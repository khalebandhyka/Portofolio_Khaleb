"use client"

import { useState } from "react"

function SkillsSection({ theme, themeChanging }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const themeStyles = {
    light: {
      backgroundColor: "#f8f9fa",
      textColor: "#333333",
      tooltipBg: "rgba(0, 0, 0, 0.8)",
      tooltipColor: "#ffffff",
    },
    dark: {
      backgroundColor: "#2d2d2d",
      textColor: "#e0e0e0",
      tooltipBg: "rgba(255, 255, 255, 0.9)",
      tooltipColor: "#000000",
    },
  }

  const currentTheme = themeStyles[theme]

  const skills = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" },
    { name: "Laravel", logo: "https://cdn.brandfetch.io/ide68-31CH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Android Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg" },
    { name: "Visual Studio Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "MySQL", logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.svgrepo.com%2Fsvg%2F354099%2Fmysql&psig=AOvVaw3_ZnQeqsVRpBbjdylux3Vi&ust=1750091363065000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIifncLs840DFQAAAAAdAAAAABAU" },
  ]

  return (
    <div
      style={{
        margin: "40px 0",
        padding: "30px 20px",
        borderRadius: "10px",
        backgroundColor: theme === "light" ? "#f8f9fa" : "#1e1e1e",
        transition: "all 0.5s ease",
        animation: themeChanging ? "skillsSectionFade 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes skillsSectionFade {
            0% { opacity: 0.7; transform: scale(0.98); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes logoSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes tooltipFadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "30px",
          color: currentTheme.textColor,
        }}
      >
        Technical Skills
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "20px 0",
        }}
      >
        {skills.map((skill, index) => {
          const isHovered = hoveredSkill === index
          const spinStyle = themeChanging
            ? {
                animation: `logoSpin 1s ease-in-out`,
              }
            : {}

          return (
            <div
              key={skill.name}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                  cursor: "pointer",
                  ...spinStyle,
                }}
              >
                <img
                  src={skill.logo || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {isHovered && (
                <div
                  style={{
                    position: "absolute",
                    top: "70px",
                    backgroundColor: currentTheme.tooltipBg,
                    color: currentTheme.tooltipColor,
                    padding: "5px 10px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    zIndex: 10,
                    animation: "tooltipFadeIn 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                  <div
                    style={{
                      position: "absolute",
                      top: "-5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderBottom: `5px solid ${currentTheme.tooltipBg}`,
                    }}
                  ></div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
