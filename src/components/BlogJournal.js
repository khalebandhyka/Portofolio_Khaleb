"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

function BlogJournal({ posts, theme }) {
  const [hoveredId, setHoveredId] = useState(null)

  const themeStyles = {
    light: {
      cardBg: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      tagBg: "#e9ecef",
      tagText: "#333333",
      dateColor: "#6c757d",
    },
    dark: {
      cardBg: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      tagBg: "#2d2d2d",
      tagText: "#e0e0e0",
      dateColor: "#a0a0a0",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ color: currentTheme.textColor }}>There are no blog posts added yet.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: `1px solid ${currentTheme.borderColor}`,
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: currentTheme.cardBg,
                boxShadow: hoveredId === post.id ? "0 8px 16px rgba(0,0,0,0.2)" : "0 2px 4px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                transform: hoveredId === post.id ? "translateY(-5px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div style={{ position: "relative", height: "150px", overflow: "hidden" }}>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hoveredId === post.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                >
                  {post.date}
                </div>
              </div>

              <div style={{ padding: "15px" }}>
                <h3 style={{ marginTop: 0, color: currentTheme.textColor }}>{post.title}</h3>

                <p
                  style={{
                    color: currentTheme.textColor,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.content}
                </p>

                <div style={{ marginBottom: "15px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {post.tags.map((tag, index) => (
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
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  style={{
                    textDecoration: "none",
                    color: theme === "light" ? "#007bff" : "#2575fc",
                    fontWeight: "bold",
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: "2px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: hoveredId === post.id ? "100%" : "0",
                      height: "2px",
                      backgroundColor: theme === "light" ? "#007bff" : "#2575fc",
                      transition: "width 0.3s ease",
                    }}
                  ></span>
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogJournal
