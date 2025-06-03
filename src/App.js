"use client"

import { useState, useEffect, useCallback } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import ProjectShowcase from "./components/ProjectShowcase"
import BlogJournal from "./components/BlogJournal"
import LinkedInIntegration from "./components/LinkedInIntegration"
import SkillsSection from "./components/SkillsSection"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProjectDetail from "./components/ProjectDetail"
import BlogPost from "./components/BlogPost"
import Dashboard from "./components/Dashboard"
import ThemeToggle from "./components/ThemeToggle"
import NavBar from "./components/NavBar"
import ProfileSection from "./components/ProfileSection"

function App() {
  const [projects, setProjects] = useState([])
  const [blogPosts, setBlogPosts] = useState([])
  const [theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(true)
  const [themeChanging, setThemeChanging] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const dummyProjects = [
        {
          id: 1,
          title: "Website Nusa Food",
          description: "Indonesian food exhibition website that displays various types of culinary from all over Indonesia.",
          tools: ["React", "Javascript", "HTML", "CSS"],
          links: {
            github: "https://github.com/imwepe/nusafood-UAS-Project",
            live: "https://nusafoodwebsite.vercel.app/",
          },
          progress: 100,
          updates: [
            { date: "2023-05-23", content: "Participate in UMN Student Website Exhibition" },
            { date: "2023-04-20", content: "Adding shopping cart feature" },
          ],
          image: "/nuzafood.png",
        },
        {
          id: 2,
          title: "Saint Barnabas Catholic Church Website",
          description: "Developing the Website of Saint Barnabas Catholic Church",
          tools: ["PHP", "Laravel", "Tailwind"],
          links: {
            github: "https://github.com/ravinwoenarsooo/SantoBarnabas",
            live: "https://www.santobarnabas.org/",
          },
          progress: 100,
          updates: [
            { date: "2023-12-22", content: "Website Published" },
            { date: "2023-12-03", content: "The project was completed and displayed in front of the congregation and church management." },
            { date: "2023-10-24", content: "The project was initiated" },
          ],
          image: "/santobarnabas.png",
        },
        {
          id: 3,
          title: "BazaarSpot Mobile App Design",
          description: "Full-stack designer for BazaarSpot, creating concepts, personas, and UI/UX designs with Figma, and developing key features for the mobile bazaar app.",
          tools: ["React", "Figma", "GitHub"],
          links: {
            github: "https://github.com/username/task-manager",
            live: "https://www.figma.com/design/LWSMLilWQFdc623IY3r430/Prototype-BazaarSpot?node-id=0-1&t=wOjJEr9YYzHyBy6h-1",
          },
          progress: 100,
          updates: [
            { date: "2024-05-21", content: "Featured At UMN Figma Prototype Exhibition" },
            { date: "2024-05-20", content: "Overall Completed Prototype" },
            { date: "2024-03-25", content: "Project Initiated" },
          ],
          image: "/bazaarspot.png",
        },
        {
          id: 4,
          title: "U-Journal Mobile Application",
          description: "Developed the U-Journal application as a full-stack developer using Kotlin and Jetpack Compose, implementing a responsive UI, smooth navigation, and note management features including photo and geolocation support",
          tools: ["Kotlin", "Jetpack Compose", "XML", "Firebase", "Firebase Emulator"],
          links: {
            github: "https://github.com/khalebandhyka/UTS-UJournal_MAP_Kelompok4",
            live: "https://github.com/khalebandhyka/UTS-UJournal_MAP_Kelompok4",
          },
          progress: 65,
          updates: [
            { date: "Present", content: "Back-end Development Process using Firebase Emulator" },
            { date: "2025-04-09", content: "U-Journal Mobile App Front-End Completed and Functional" },
          ],
          image: "/ujurnal.png",
        },
        {
          id: 5,
          title: "Cloning UI of Ayo Indonesia Application",
          description: "Cloned the AYO Indonesia app as a Full-Stack UI/UX Designer using React Native, JavaScript, and TypeScript, replicating the original app's UI/UX and implementing fully functional navigation. ",
          tools: ["React", "Javascript", "Typescript", "Expo"],
          links: {
            github: "https://github.com/khalebandhyka/66721_KhalebAndhykaAprijadi_IF670_AL_AyoIndonesiaClone",
            live: "https://github.com/khalebandhyka/66721_KhalebAndhykaAprijadi_IF670_AL_AyoIndonesiaClone",
          },
          progress: 100,
          updates: [
            { date: "2025-10-04", content: "App Cloning Completed and running well" },
          ],
          image: "/ayoindo.png",
        },
        {
          id: 6,
          title: "Vego Mobile Application Development",
          description: "Conducting Vego Mobile Application Development starting from a figma prototype",
          tools: ["React", "Javascript", "Typescript", "Expo", "Firebase", "Firestore"],
          links: {
            github: "https://github.com/nathaniamnbe/vego2",
            live: "https://github.com/nathaniamnbe/vego2",
          },
          progress: 50,
          updates: [
            { date: "Present", content: "Applications Under Development" },
            { date: "2023-05-21", content: "Prototype Displayed at UMN Figma Prototype Exhibition" },
          ],
          image: "/vego.jpg",
        },
      ]

      setProjects(dummyProjects)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const dummyBlogPosts = [
      {
        id: 1,
        title: "VIT-C Manifest UMN 2022",
        date: "9 December 2022",
        content: "Led a 30-person team in a large-scale event with 2,800+ participants, demonstrating leadership, time management, and problem-solving. Created workflows and guidelines to ensure smooth operations.",
        tags: ["Leadership", "Teamwork", "Problem Solving"],
        image: "/manifestumn.jpg",
      },
      {
        id: 2,
        title: "Mentoring UMN 2023",
        date: "13 December 2023",
        content: "Oversaw a mentoring program for 2,800 new students, leading a 30-person team and achieving 90% satisfaction, highlighting leadership and coordination in a large-scale setting.",
        tags: ["Leadership", "Mentoring", "Teamwork"],
        image: "/insurer.jpg",
      },
      {
        id: 3,
        title: "Starlight UMN 2024",
        date: "12 December 2024",
        content: "Coordinated a 24-person team to manage logistics, regulations, and access for the Starlight event, ensuring smooth operations through strong leadership and detailed planning.",
        tags: ["Leadership", "Communication", "Problem Solving"],
        image: "/starlight.jpg",
      },
      {
        id: 4,
        title: "Obscura Exhibition UMN 2024",
        date: "6 September 2024",
        content: "Served as a committee member in Obscura Exhibition 2024, assisting in the creation and enforcement of event regulations, and performing scheduled security duties to maintain order and ensure smooth event operations.",
        tags: ["Problem Solving", "Attention to Detail", "Teamwork"],
        image: "/obscura.jpg",
      },
      {
        id: 5,
        title: "Kathleya & Narendra Wedding Organizer (Freelance)",
        date: "7 August 2022",
        content: "Managed event logistics by coordinating the venue, overseeing vendor compliance, and ensuring security and attendee comfort. Demonstrated strong coordination, quality control, and problem-solving skills.",
        tags: ["Wedding Organizer", "Teamwork", "Communcation"],
        image: "/weddinorgan.jpg",
      },
      {
        id: 6,
        title: "Lions Badminton UMN",
        date: "27 April 2025",
        content: "Actively participated as a badminton player in UMN's Lions Badminton Club, engaging in regular training sessions to enhance technical skills, physical fitness, and overall performance.",
        tags: ["Fitness", "Time Management"],
        image: "/badminlions.jpg",
      },
    ]

    setBlogPosts(dummyBlogPosts)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeChanging(true)

    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }, 50)

    setTimeout(() => {
      setThemeChanging(false)
    }, 1000)
  }, [])

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      cardBg: "#ffffff",
      navBg: "#f8f9fa",
      borderColor: "#dddddd",
    },
    dark: {
      backgroundColor: "#121212",
      textColor: "#e0e0e0",
      cardBg: "#1e1e1e",
      navBg: "#2d2d2d",
      borderColor: "#444444",
    },
  }

  const currentTheme = themeStyles[theme]

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme.backgroundColor
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.overflow = "hidden" 

    // Menambahkan style untuk html juga
    document.documentElement.style.backgroundColor = currentTheme.backgroundColor
    document.documentElement.style.margin = "0"
    document.documentElement.style.padding = "0"
    document.documentElement.style.height = "100%"
    document.documentElement.style.width = "100%"

    // Cleanup function
    return () => {
      document.body.style.backgroundColor = ""
      document.body.style.margin = ""
      document.body.style.padding = ""
      document.body.style.overflow = ""
      document.documentElement.style.backgroundColor = ""
      document.documentElement.style.margin = ""
      document.documentElement.style.padding = ""
      document.documentElement.style.height = ""
      document.documentElement.style.width = ""
    }
  }, [theme, currentTheme.backgroundColor])

  // Wrapper component to access location
  const AppContent = () => {
    const location = useLocation()

    return (
      <div
        style={{
          fontFamily: "Poppins, sans-serif",
          maxWidth: "100%", // Mengubah dari 1200px menjadi 100%
          margin: "0", // Menghilangkan margin
          padding: "20px",
          backgroundColor: currentTheme.backgroundColor,
          color: currentTheme.textColor,
          minHeight: "100vh",
          transition: "all 0.5s ease",
          position: "relative",
          boxSizing: "border-box", // Memastikan padding tidak menambah lebar
          width: "100%", // Memastikan lebar 100%
          overflowX: "hidden", // Mencegah scroll horizontal
        }}
      >
        {themeChanging && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
              zIndex: 998,
              pointerEvents: "none",
              animation: "themeTransition 1s forwards",
            }}
          ></div>
        )}

        <style>
          {`
            @keyframes themeTransition {
              0% { opacity: 0; }
              50% { opacity: 1; }
              100% { opacity: 0; }
            }
            
            .theme-transition-element {
              transition: all 0.5s ease !important;
            }
            
            /* Reset CSS untuk menghilangkan margin dan padding default */
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            /* Style untuk container utama */
            #root {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
              background-color: ${currentTheme.backgroundColor};
            }
            
            /* Mengatur container konten */
            .content-container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 20px;
              width: 100%;
            }
          `}
        </style>

        <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="content-container">
          <Header theme={theme} themeChanging={themeChanging} />

          <NavBar theme={theme} currentPath={location.pathname} themeChanging={themeChanging} />

          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "5px solid #f3f3f3",
                  borderTop: "5px solid #3498db",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  marginBottom: "20px",
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
              <p>Loading Portfolio Data...</p>
            </div>
          ) : (
            <div className="theme-transition-element">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div>
                      <ProfileSection theme={theme} themeChanging={themeChanging} />

                      <SkillsSection theme={theme} themeChanging={themeChanging} />

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "40px",
                          marginTop: "30px",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <h2 style={{ margin: 0 }}>Key Projects</h2>
                            <Link
                              to="/projects"
                              style={{
                                textDecoration: "none",
                                color: "#007bff",
                              }}
                            >
                              See All &rarr;
                            </Link>
                          </div>
                          <ProjectShowcase
                            projects={projects.slice(3, 6)}
                            theme={theme}
                            themeChanging={themeChanging}
                          />
                        </div>

                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <h2 style={{ margin: 0 }}>Latest Organization</h2>
                            <Link
                              to="/blog"
                              style={{
                                textDecoration: "none",
                                color: "#007bff",
                              }}
                            >
                              See All &rarr;
                            </Link>
                          </div>
                          <BlogJournal posts={blogPosts.slice(0, 3)} theme={theme} themeChanging={themeChanging} />
                        </div>
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <div>
                      <h1
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "2.5rem",
                          marginBottom: "30px",
                          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Projects
                      </h1>
                      <ProjectShowcase projects={projects} theme={theme} themeChanging={themeChanging} />
                    </div>
                  }
                />
                <Route
                  path="/projects/:id"
                  element={<ProjectDetail projects={projects} theme={theme} themeChanging={themeChanging} />}
                />
                <Route
                  path="/blog"
                  element={
                    <div>
                      <h1
                        style={{
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "2.5rem",
                          marginBottom: "30px",
                          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Organizational experience
                      </h1>
                      <BlogJournal posts={blogPosts} theme={theme} themeChanging={themeChanging} />
                    </div>
                  }
                />
                <Route
                  path="/blog/:id"
                  element={<BlogPost posts={blogPosts} theme={theme} themeChanging={themeChanging} />}
                />
                <Route path="/linkedin" element={<LinkedInIntegration theme={theme} themeChanging={themeChanging} />} />
                <Route
                  path="/dashboard"
                  element={<Dashboard projects={projects} theme={theme} themeChanging={themeChanging} />}
                />
              </Routes>
            </div>
          )}

          <Footer theme={theme} themeChanging={themeChanging} />
        </div>
      </div>
    )
  }

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
