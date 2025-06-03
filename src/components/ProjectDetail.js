"use client"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

function ProjectDetail({ projects, theme }) {
  const { id } = useParams()
  const project = projects.find((p) => p.id === Number.parseInt(id))
  const [animateProgress, setAnimateProgress] = useState(0)

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      tagBg: "#e9ecef",
      tagText: "#333333",
      timelineColor: "#007bff",
      timelineBg: "#f8f9fa",
    },
    dark: {
      backgroundColor: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      tagBg: "#2d2d2d",
      tagText: "#e0e0e0",
      timelineColor: "#2575fc",
      timelineBg: "#2d2d2d",
    },
  }

  const currentTheme = themeStyles[theme]

  useEffect(() => {
    if (project) {
      // Animate progress bar
      const timer = setTimeout(() => {
        setAnimateProgress(project.progress)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [project])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <Link
        to="/projects"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: theme === "light" ? "#007bff" : "#2575fc",
          textDecoration: "none",
        }}
      >
        &larr; Back to project list
      </Link>

      <div
        style={{
          position: "relative",
          height: "250px",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "30px",
        }}
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            padding: "50px 20px 20px",
          }}
        >
          <h1 style={{ color: "#fff", margin: 0 }}>{project.title}</h1>
        </div>
      </div>

      <p style={{ fontSize: "18px", lineHeight: "1.6", color: currentTheme.textColor }}>{project.description}</p>

      <div style={{ margin: "30px 0" }}>
        <h2 style={{ color: currentTheme.textColor }}>Used Tools</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {project.tools.map((tool, index) => (
            <span
              key={index}
              style={{
                backgroundColor: currentTheme.tagBg,
                color: currentTheme.tagText,
                padding: "8px 15px",
                borderRadius: "20px",
                fontSize: "14px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)"
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div style={{ margin: "30px 0" }}>
        <h2 style={{ color: currentTheme.textColor }}>Project Progress</h2>
        <div
          style={{
            height: "20px",
            backgroundColor: currentTheme.timelineBg,
            borderRadius: "10px",
            marginBottom: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${animateProgress}%`,
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              borderRadius: "10px",
              transition: "width 1.5s ease-in-out",
            }}
          ></div>
        </div>
        <p style={{ color: currentTheme.textColor }}>{project.progress}% Finished</p>
      </div>

      <div style={{ margin: "30px 0" }}>
        <h2 style={{ color: currentTheme.textColor }}>Link</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: theme === "light" ? "#333" : "#2d2d2d",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)"
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              <span style={{ marginRight: "8px" }}>🔗</span> GitHub Repository
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-3px)"
                e.target.style.boxShadow = "0 4px 8px rgba(106, 17, 203, 0.3)"
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              <span style={{ marginRight: "8px" }}>🚀</span> Live Demo
            </a>
          )}
        </div>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h2 style={{ color: currentTheme.textColor }}>Project Updates</h2>
        {project.updates.length === 0 ? (
          <p style={{ color: currentTheme.textColor }}>There are no updates for this project yet.</p>
        ) : (
          <div
            style={{
              borderLeft: `2px solid ${currentTheme.timelineColor}`,
              paddingLeft: "20px",
            }}
          >
            {project.updates.map((update, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "30px",
                  position: "relative",
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${index * 0.3}s forwards`,
                }}
              >
                <style>
                  {`
                    @keyframes fadeIn {
                      from { opacity: 0; transform: translateX(20px); }
                      to { opacity: 1; transform: translateX(0); }
                    }
                  `}
                </style>
                <div
                  style={{
                    position: "absolute",
                    left: "-29px",
                    top: "0",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: currentTheme.timelineColor,
                    border: `2px solid ${theme === "light" ? "#fff" : "#1e1e1e"}`,
                  }}
                ></div>
                <p
                  style={{
                    margin: "0",
                    color: theme === "light" ? "#6c757d" : "#a0a0a0",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {update.date}
                </p>
                <p style={{ margin: "10px 0 0", color: currentTheme.textColor, lineHeight: "1.6" }}>{update.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
