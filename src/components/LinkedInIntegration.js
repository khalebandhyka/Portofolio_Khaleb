"use client"

import { useState } from "react"

function LinkedInIntegration({ theme }) {
  const [isConnected, setIsConnected] = useState(false)
  const [profile, setProfile] = useState(null)
  const [achievements, setAchievements] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      cardBg: "#ffffff",
      secondaryBg: "#f8f9fa",
    },
    dark: {
      backgroundColor: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      cardBg: "#1e1e1e",
      secondaryBg: "#2d2d2d",
    },
  }

  const currentTheme = themeStyles[theme]

  // Simulasi koneksi dengan LinkedIn
  const connectWithLinkedIn = () => {
    setIsLoading(true)
    // Dalam aplikasi nyata, ini akan menggunakan LinkedIn OAuth API
    setTimeout(() => {
      setIsConnected(true)
      setProfile({
        name: "John Doe",
        headline: "Full Stack Developer | React | Node.js | MongoDB",
        connections: 342,
        profileUrl: "https://linkedin.com/in/johndoe",
        avatar: "/placeholder.svg?height=100&width=100",
      })
      setAchievements([
        {
          id: 1,
          title: "React Developer Certification",
          issuer: "Meta",
          date: "Juni 2023",
          url: "https://example.com/cert/123",
          logo: "/placeholder.svg?height=50&width=50",
        },
        {
          id: 2,
          title: "JavaScript Algorithms and Data Structures",
          issuer: "freeCodeCamp",
          date: "Maret 2023",
          url: "https://example.com/cert/456",
          logo: "/placeholder.svg?height=50&width=50",
        },
        {
          id: 3,
          title: "AWS Certified Developer - Associate",
          issuer: "Amazon Web Services",
          date: "Januari 2023",
          url: "https://example.com/cert/789",
          logo: "/placeholder.svg?height=50&width=50",
        },
      ])
      setIsLoading(false)
    }, 2000)
  }

  // Simulasi pemutusan koneksi dengan LinkedIn
  const disconnectLinkedIn = () => {
    setIsConnected(false)
    setProfile(null)
    setAchievements([])
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "40px 0",
          background:
            theme === "light"
              ? "linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)"
              : "linear-gradient(135deg, #0077b5 0%, #004c73 100%)",
          borderRadius: "10px",
          marginBottom: "30px",
          color: "#fff",
        }}
      >
        <h1 style={{ margin: "0 0 10px" }}>Integrasi LinkedIn</h1>
        <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
          Tampilkan pencapaian profesional Anda dari LinkedIn di portofolio Anda
        </p>
      </div>

      {!isConnected ? (
        <div
          style={{
            textAlign: "center",
            margin: "50px 0",
            padding: "40px",
            backgroundColor: currentTheme.secondaryBg,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#0077b5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "40px",
              color: "#fff",
            }}
          >
            in
          </div>
          <p
            style={{
              marginBottom: "30px",
              fontSize: "18px",
              color: currentTheme.textColor,
            }}
          >
            Hubungkan dengan LinkedIn untuk menampilkan pencapaian profesional Anda di portofolio.
          </p>
          <button
            onClick={connectWithLinkedIn}
            disabled={isLoading}
            style={{
              backgroundColor: "#0077b5",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "4px",
              cursor: isLoading ? "default" : "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              transition: "all 0.3s ease",
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? (
              <>
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
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
                Menghubungkan...
              </>
            ) : (
              "Hubungkan dengan LinkedIn"
            )}
          </button>
        </div>
      ) : (
        <div>
          {profile && (
            <div
              style={{
                backgroundColor: currentTheme.cardBg,
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                marginBottom: "30px",
                border: `1px solid ${currentTheme.borderColor}`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "20px",
                    border: `3px solid ${theme === "light" ? "#0077b5" : "#00a0dc"}`,
                  }}
                >
                  <img
                    src={profile.avatar || "/placeholder.svg"}
                    alt={profile.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h2 style={{ marginTop: 0, color: currentTheme.textColor }}>{profile.name}</h2>
                  <p style={{ margin: "5px 0", color: currentTheme.textColor }}>{profile.headline}</p>
                  <p style={{ margin: "5px 0", color: theme === "light" ? "#6c757d" : "#a0a0a0" }}>
                    <span style={{ color: "#0077b5", fontWeight: "bold" }}>{profile.connections}</span> koneksi
                  </p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#0077b5",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "10px 15px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      display: "inline-block",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#005582"
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#0077b5"
                    }}
                  >
                    Lihat Profil LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}

          <h2 style={{ color: currentTheme.textColor, position: "relative", display: "inline-block" }}>
            Pencapaian Profesional
            <span
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                width: "50%",
                height: "3px",
                background: "linear-gradient(90deg, #0077b5, transparent)",
              }}
            ></span>
          </h2>

          {achievements.length === 0 ? (
            <p style={{ color: currentTheme.textColor }}>Tidak ada pencapaian yang ditemukan.</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  style={{
                    border: `1px solid ${currentTheme.borderColor}`,
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor: currentTheme.cardBg,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                  }}
                >
                  <style>
                    {`
                      @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                      }
                    `}
                  </style>
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "4px",
                        overflow: "hidden",
                        marginRight: "15px",
                        backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={achievement.logo || "/placeholder.svg"}
                        alt={achievement.issuer}
                        style={{
                          width: "80%",
                          height: "80%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div>
                      <h3 style={{ margin: "0 0 5px", color: currentTheme.textColor, fontSize: "18px" }}>
                        {achievement.title}
                      </h3>
                      <p style={{ margin: 0, color: theme === "light" ? "#6c757d" : "#a0a0a0", fontSize: "14px" }}>
                        {achievement.issuer}
                      </p>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "0 0 15px",
                      color: theme === "light" ? "#6c757d" : "#a0a0a0",
                      fontSize: "14px",
                    }}
                  >
                    <strong>Diperoleh:</strong> {achievement.date}
                  </p>
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      backgroundColor: "transparent",
                      color: "#0077b5",
                      border: "1px solid #0077b5",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#0077b5"
                      e.target.style.color = "#fff"
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent"
                      e.target.style.color = "#0077b5"
                    }}
                  >
                    Lihat Kredensial
                  </a>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <button
              onClick={disconnectLinkedIn}
              style={{
                backgroundColor: "transparent",
                color: theme === "light" ? "#6c757d" : "#a0a0a0",
                border: `1px solid ${theme === "light" ? "#6c757d" : "#a0a0a0"}`,
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#dc3545"
                e.target.style.color = "#fff"
                e.target.style.borderColor = "#dc3545"
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = theme === "light" ? "#6c757d" : "#a0a0a0"
                e.target.style.borderColor = theme === "light" ? "#6c757d" : "#a0a0a0"
              }}
            >
              Putuskan Koneksi LinkedIn
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LinkedInIntegration
