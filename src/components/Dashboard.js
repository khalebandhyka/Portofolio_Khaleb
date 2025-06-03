"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import SkillsSection from "./SkillsSection"

function Dashboard({ projects, theme, themeChanging }) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      cardBg: "#ffffff",
      secondaryBg: "#f8f9fa",
      headingColor: "#182848",
    },
    dark: {
      backgroundColor: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      cardBg: "#1e1e1e",
      secondaryBg: "#2d2d2d",
      headingColor: "#e0e0e0",
    },
  }

  const currentTheme = themeStyles[theme]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm({
      ...contactForm,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    // EmailJS configuration - SUDAH DIKONFIGURASI
    const serviceID = "service_5p1r0r8"
    const templateID = "template_iae88ds"
    const publicKey = "_K3UxF4hUHN3YvnLi"

    // Template parameters untuk EmailJS - DISESUAIKAN DENGAN TEMPLATE EMAILJS
    const templateParams = {
      title: "Contact Form Submission - Portfolio Website",
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      message: contactForm.message,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }),
      // Parameter tambahan untuk kompatibilitas
      from_name: contactForm.name,
      from_email: contactForm.email,
      to_name: "Khaleb Andhyka Aprijadi",
      date: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      // Format waktu alternatif
      timestamp: new Date().toISOString(),
      formatted_date: new Date().toLocaleDateString("id-ID"),
      formatted_time: new Date().toLocaleTimeString("id-ID"),
      // Informasi tambahan
      subject: `New Contact from ${contactForm.name} - Portfolio Website`,
      reply_to: contactForm.email,
      user_phone: contactForm.phone || "Tidak disediakan",
      website: "Portfolio Khaleb Andhyka Aprijadi",
    }

    console.log("Sending email with parameters:", templateParams)

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text)
        setIsLoading(false)
        setSuccessMessage("Message sent successfully! Thank you for contacting me.")
        setContactForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })

        // Hapus pesan sukses setelah 5 detik
        setTimeout(() => {
          setSuccessMessage("")
        }, 5000)
      })
      .catch((error) => {
        console.log("FAILED...", error)
        setIsLoading(false)
        setErrorMessage("Gagal mengirim pesan. Silakan coba lagi.")

        // Hapus pesan error setelah 5 detik
        setTimeout(() => {
          setErrorMessage("")
        }, 5000)
      })
  }

  // Statistik tambahan untuk visualisasi
  const completedProjects = projects.filter((p) => p.progress === 100).length
  const activeProjects = projects.filter((p) => p.progress < 100).length
  const totalTools = [...new Set(projects.flatMap((p) => p.tools))].length

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "30px",
        }}
      >
        Dashboard
      </h1>

      {/* Skills Section */}
      <SkillsSection theme={theme} themeChanging={themeChanging} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <div>
          <h2
            style={{
              borderBottom: "2px solid #6a11cb",
              paddingBottom: "10px",
              color: currentTheme.headingColor,
            }}
          >
            Contact Me!
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: currentTheme.cardBg,
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: `1px solid ${currentTheme.borderColor}`,
            }}
          >
            {successMessage && (
              <div
                style={{
                  padding: "10px 15px",
                  backgroundColor: theme === "light" ? "#d4edda" : "rgba(40, 167, 69, 0.2)",
                  color: theme === "light" ? "#155724" : "#28a745",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                <style>
                  {`
                    @keyframes fadeIn {
                      from { opacity: 0; transform: translateY(-10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}
                </style>
                ✅ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div
                style={{
                  padding: "10px 15px",
                  backgroundColor: theme === "light" ? "#f8d7da" : "rgba(220, 53, 69, 0.2)",
                  color: theme === "light" ? "#721c24" : "#dc3545",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                ❌ {errorMessage}
              </div>
            )}

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: currentTheme.textColor,
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: `1px solid ${currentTheme.borderColor}`,
                  fontSize: "16px",
                  transition: "border-color 0.3s",
                  outline: "none",
                  backgroundColor: theme === "light" ? "#fff" : "#2d2d2d",
                  color: currentTheme.textColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6a11cb"
                  e.target.style.boxShadow = "0 0 0 3px rgba(106, 17, 203, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = currentTheme.borderColor
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: currentTheme.textColor,
                }}
              >
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
                placeholder="example@gmail.com"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: `1px solid ${currentTheme.borderColor}`,
                  fontSize: "16px",
                  transition: "border-color 0.3s",
                  outline: "none",
                  backgroundColor: theme === "light" ? "#fff" : "#2d2d2d",
                  color: currentTheme.textColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6a11cb"
                  e.target.style.boxShadow = "0 0 0 3px rgba(106, 17, 203, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = currentTheme.borderColor
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: currentTheme.textColor,
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={contactForm.phone}
                onChange={handleInputChange}
                placeholder="08xxxxxxxxxx"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: `1px solid ${currentTheme.borderColor}`,
                  fontSize: "16px",
                  transition: "border-color 0.3s",
                  outline: "none",
                  backgroundColor: theme === "light" ? "#fff" : "#2d2d2d",
                  color: currentTheme.textColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6a11cb"
                  e.target.style.boxShadow = "0 0 0 3px rgba(106, 17, 203, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = currentTheme.borderColor
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: currentTheme.textColor,
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                required
                placeholder="Write your message here..."
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "6px",
                  border: `1px solid ${currentTheme.borderColor}`,
                  fontSize: "16px",
                  minHeight: "120px",
                  resize: "vertical",
                  transition: "border-color 0.3s",
                  outline: "none",
                  backgroundColor: theme === "light" ? "#fff" : "#2d2d2d",
                  color: currentTheme.textColor,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#6a11cb"
                  e.target.style.boxShadow = "0 0 0 3px rgba(106, 17, 203, 0.1)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = currentTheme.borderColor
                  e.target.style.boxShadow = "none"
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: isLoading
                  ? theme === "light"
                    ? "#6c757d"
                    : "#4d4d4d"
                  : "linear-gradient(90deg, #6a11cb, #2575fc)",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "6px",
                cursor: isLoading ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "500",
                width: "100%",
                transition: "all 0.3s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: isLoading ? "none" : "0 4px 10px rgba(106, 17, 203, 0.3)",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 6px 15px rgba(106, 17, 203, 0.4)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "0 4px 10px rgba(106, 17, 203, 0.3)"
                }
              }}
            >
              {isLoading ? (
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTop: "3px solid #fff",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    marginRight: "10px",
                  }}
                ></div>
              ) : null}
              {isLoading ? "Sending..." : "SEND"}
            </button>
            <style>
              {`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}
            </style>
          </form>
        </div>

        <div>
          <h2
            style={{
              borderBottom: "2px solid #6a11cb",
              paddingBottom: "10px",
              color: currentTheme.headingColor,
            }}
          >
            Project Summary
          </h2>
          <div
            style={{
              backgroundColor: currentTheme.cardBg,
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              border: `1px solid ${currentTheme.borderColor}`,
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "20px",
                  color: currentTheme.headingColor,
                  fontSize: "1.3rem",
                }}
              >
                Project Statistic
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    backgroundColor: theme === "light" ? "rgba(106, 17, 203, 0.1)" : "rgba(106, 17, 203, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)"
                    e.target.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      height: "4px",
                      width: "100%",
                      background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#6a11cb",
                    }}
                  >
                    {projects.length}
                  </div>
                  <div style={{ color: currentTheme.textColor }}>Project Total</div>
                </div>

                <div
                  style={{
                    backgroundColor: theme === "light" ? "rgba(40, 167, 69, 0.1)" : "rgba(40, 167, 69, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)"
                    e.target.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      height: "4px",
                      width: "100%",
                      backgroundColor: "#28a745",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#28a745",
                    }}
                  >
                    {completedProjects}
                  </div>
                  <div style={{ color: currentTheme.textColor }}>Completed Projects</div>
                </div>

                <div
                  style={{
                    backgroundColor: theme === "light" ? "rgba(255, 193, 7, 0.1)" : "rgba(255, 193, 7, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)"
                    e.target.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      height: "4px",
                      width: "100%",
                      backgroundColor: "#ffc107",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#ffc107",
                    }}
                  >
                    {activeProjects}
                  </div>
                  <div style={{ color: currentTheme.textColor }}>Active Projects</div>
                </div>

                <div
                  style={{
                    backgroundColor: theme === "light" ? "rgba(23, 162, 184, 0.1)" : "rgba(23, 162, 184, 0.2)",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-5px)"
                    e.target.style.boxShadow = "0 8px 15px rgba(0,0,0,0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      height: "4px",
                      width: "100%",
                      backgroundColor: "#17a2b8",
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#17a2b8",
                    }}
                  >
                    {totalTools}
                  </div>
                  <div style={{ color: currentTheme.textColor }}>Used Tools</div>
                </div>
              </div>
            </div>

            <h3
              style={{
                marginTop: "30px",
                marginBottom: "15px",
                color: currentTheme.headingColor,
                fontSize: "1.3rem",
              }}
            >
              Latest Projects
            </h3>

            {projects.length === 0 ? (
              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                  backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
                  borderRadius: "8px",
                  color: theme === "light" ? "#6c757d" : "#a0a0a0",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>📁</div>
                <p>No projects added yet.</p>
                <p style={{ fontSize: "14px" }}>Gunakan form di sebelah kiri untuk menambahkan proyek baru.</p>
              </div>
            ) : (
              <div>
                {projects.slice(3, 6).map((project, index) => (
                  <div
                    key={project.id}
                    style={{
                      padding: "15px",
                      marginBottom: index < projects.slice(0, 3).length - 1 ? "15px" : 0,
                      borderRadius: "8px",
                      backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)"
                      e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "none"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          color: currentTheme.textColor,
                        }}
                      >
                        {project.title}
                      </div>
                      <div
                        style={{
                          backgroundColor:
                            project.progress === 100
                              ? theme === "light"
                                ? "#d4edda"
                                : "rgba(40, 167, 69, 0.2)"
                              : theme === "light"
                                ? "#fff3cd"
                                : "rgba(255, 193, 7, 0.2)",
                          color:
                            project.progress === 100
                              ? theme === "light"
                                ? "#155724"
                                : "#28a745"
                              : theme === "light"
                                ? "#856404"
                                : "#ffc107",
                          padding: "3px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {project.progress === 100 ? "Finished" : `${project.progress}%`}
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "14px",
                        color: theme === "light" ? "#6c757d" : "#a0a0a0",
                        marginBottom: "10px",
                      }}
                    >
                      {project.description.length > 60
                        ? project.description.substring(0, 60) + "..."
                        : project.description}
                    </div>

                    <div
                      style={{
                        height: "6px",
                        backgroundColor: theme === "light" ? "#e9ecef" : "#444444",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${project.progress}%`,
                          background:
                            project.progress < 30
                              ? "linear-gradient(90deg, #dc3545, #ff6b6b)"
                              : project.progress < 70
                                ? "linear-gradient(90deg, #ffc107, #ffda6a)"
                                : "linear-gradient(90deg, #28a745, #48d368)",
                          borderRadius: "3px",
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
