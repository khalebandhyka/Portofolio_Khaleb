"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

function ProjectShowcase({ projects, theme }) {
  const [hoveredId, setHoveredId] = useState(null)

  const themeStyles = {
    light: {
      cardBg: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      tagBg: "#e9ecef",
      tagText: "#333333",
    },
    dark: {
      cardBg: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      tagBg: "#2d2d2d",
      tagText: "#e0e0e0",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div>
      {projects.length === 0 ? (
        <p>No projects have been added yet.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                border: `1px solid ${currentTheme.borderColor}`,
                borderRadius: "8px",
                padding: "0",
                backgroundColor: currentTheme.cardBg,
                boxShadow: hoveredId === project.id ? "0 8px 16px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                overflow: "hidden",
                transform: hoveredId === project.id ? "translateY(-5px)" : "translateY(0)",
                color: currentTheme.textColor,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                style={{
                  height: "150px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    padding: "20px 15px 10px",
                  }}
                >
                  <div
                    style={{
                      height: "10px",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${project.progress}%`,
                        background: "linear-gradient(90deg, #4caf50, #8bc34a)",
                        borderRadius: "5px",
                        transition: "width 1s ease",
                      }}
                    ></div>
                  </div>
                  <span style={{ color: "#fff", fontSize: "12px", float: "right", marginTop: "5px" }}>
                    {project.progress}% selesai
                  </span>
                </div>
              </div>

              <div style={{ padding: "15px" }}>
                <h3 style={{ marginTop: 0, color: currentTheme.textColor }}>{project.title}</h3>
                <p style={{ color: currentTheme.textColor }}>{project.description}</p>

                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: currentTheme.textColor }}>Tools:</strong>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "5px" }}>
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: currentTheme.tagBg,
                          color: currentTheme.tagText,
                          padding: "3px 8px",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                  <Link
                    to={`/projects/${project.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      boxShadow: hoveredId === project.id ? "0 4px 8px rgba(106, 17, 203, 0.3)" : "none",
                    }}
                  >
                    View Details
                  </Link>
                  <div>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginRight: "10px",
                          color: currentTheme.textColor,
                          textDecoration: "none",
                        }}
                      >
                        GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: currentTheme.textColor,
                          textDecoration: "none",
                        }}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectShowcase
