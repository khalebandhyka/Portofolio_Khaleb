function Metrics({ metrics, theme, themeChanging }) {
  const themeStyles = {
    light: {
      backgroundColor: "#f8f9fa",
      textColor: "#6c757d",
    },
    dark: {
      backgroundColor: "#2d2d2d",
      textColor: "#a0a0a0",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "20px 0",
        padding: "20px",
        backgroundColor: currentTheme.backgroundColor,
        borderRadius: "8px",
        transition: "all 0.5s ease",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        animation: themeChanging ? "metricsBounce 1s" : "none",
      }}
    >
      <style>
        {`
          @keyframes metricsBounce {
            0% { transform: scale(0.98); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          
          @keyframes iconRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes numberJump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      <div style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(40, 167, 69, 0.3)",
            transition: "all 0.5s ease",
          }}
        >
          GitHub
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#28a745",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "all 0.5s ease",
            animation: themeChanging ? "numberJump 1s" : "none",
          }}
        >
          <span>{metrics.githubStars}</span>
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-15px",
              fontSize: "18px",
              color: "#28a745",
              transition: "all 0.5s ease",
              animation: themeChanging ? "iconRotate 1s" : "none",
            }}
          >
            ★
          </span>
        </div>
        <div style={{ color: currentTheme.textColor, transition: "all 0.5s ease" }}>GitHub Stars</div>
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#dc3545",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(220, 53, 69, 0.3)",
            transition: "all 0.5s ease",
          }}
        >
          YouTube
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#dc3545",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "all 0.5s ease",
            animation: themeChanging ? "numberJump 1s 0.1s" : "none",
          }}
        >
          <span>{metrics.videoViews}</span>
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-15px",
              fontSize: "18px",
              color: "#dc3545",
              transition: "all 0.5s ease",
              animation: themeChanging ? "iconRotate 1s 0.1s" : "none",
            }}
          >
            ▶
          </span>
        </div>
        <div style={{ color: currentTheme.textColor, transition: "all 0.5s ease" }}>Penayangan Video</div>
      </div>

      <div style={{ textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#0077b5",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0, 119, 181, 0.3)",
            transition: "all 0.5s ease",
          }}
        >
          LinkedIn
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#0077b5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transition: "all 0.5s ease",
            animation: themeChanging ? "numberJump 1s 0.2s" : "none",
          }}
        >
          <span>{metrics.linkedInConnections}</span>
          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-15px",
              fontSize: "18px",
              color: "#0077b5",
              transition: "all 0.5s ease",
              animation: themeChanging ? "iconRotate 1s 0.2s" : "none",
            }}
          >
            in
          </span>
        </div>
        <div style={{ color: currentTheme.textColor, transition: "all 0.5s ease" }}>Koneksi LinkedIn</div>
      </div>
    </div>
  )
}

export default Metrics
