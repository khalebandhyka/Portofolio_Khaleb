"use client"
import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

function BlogPost({ posts, theme }) {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number.parseInt(id))
  const [isLoaded, setIsLoaded] = useState(false)

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      borderColor: "#dddddd",
      tagBg: "#e9ecef",
      tagText: "#333333",
      dateColor: "#6c757d",
    },
    dark: {
      backgroundColor: "#1e1e1e",
      textColor: "#e0e0e0",
      borderColor: "#444444",
      tagBg: "#2d2d2d",
      tagText: "#e0e0e0",
      dateColor: "#a0a0a0",
    },
  }

  const currentTheme = themeStyles[theme]

  const organizationDetails = {
    1: {
      // VIT-C Manifest UMN 2022
      role: "Laterizio - Security Coordinator",
      duration: "September 2022 - December 2022",
      teamSize: "30 Members",
      participants: "2,800+ Student",
      responsibilities: [
        "Coordinating 30 members of the Security Division team through regular meetings, training sessions, and internal evaluations.",
        "Ensuring that around 2,800 new students follow the entire program series in accordance with applicable regulations.",
        "Overseeing the implementation of the 5C values (Caring, Credible, Competent, Competitive, and Customer Delight) during the event.",
        "Drafting special regulations for the peak night to maintain the security, comfort, and smoothness of the event.",
        "Designing and organizing the flow of participants on the peak night so that the event runs in an orderly and structured manner.",
      ],
      achievements: [
        "Successfully organized an event with 2,800+ participants",
        "Achieved a participant satisfaction rate of 95%",
        "Successfully led and coordinated 30 members of the security team during the VIT-C Manifest 2022 series of events.",
        "Maintained the conduciveness of the event until the end by implementing VIT-C values.",
        "Received appreciation from the core committee and the university for the success of managing the security and order of the event.",
      ],
      skills: [
        "Leadership",
        "Communication",
        "Public Speaking",
        "Team Coordination",
        "Problem Solving",
        "Time Management",
        "Event Planning",
        "Attention To Detail",
      ],
      challenges:
        "Managing teams with diverse backgrounds and characteristics, maintaining collective work spirit, and ensuring effective coordination and communication between divisions while handling almost 3,000 participants during the event.",
      learnings:
        "This experience taught me the importance of transparent communication, proper delegation of tasks, decision making under pressure, and the ability to adapt to dynamic and complex situations.",
    },
    2: {
      // Mentoring UMN 2023
      role: "Insurer - Security Coordinator",
      duration: "December 2022 - December 2023",
      teamSize: "30 Members",
      participants: "2,800 New Students",
      responsibilities: [
        "Responsible as the Security Division Coordinator in a large-scale Character Building Mentoring program.",
        "Managing a 30-person security team through regular meetings, internal training, and coordination on the day of implementation.",
        "Supervising and ensuring the smooth running of the mentoring process for around 2,800 new students during the activity period.",
        "Implementing security regulations and strategies to create a conducive and orderly mentoring atmosphere.",
        "Supervising the implementation of the 5C values (Caring, Credible, Competent, Competitive, and Customer Delight) during the activity.",
      ],
      achievements: [
        "Achieved 90% satisfaction rate from new students",
        "Security team worked efficiently and organized in every stage of the event implementation.",
        "Successfully managed a large-scale mentoring program for 2,800+ new students.",
        "Ensured the smooth and safe running of the event without any major disruptive incidents.",
      ],
      skills: [
        "Leadership",
        "Mentoring",
        "Team Coordination",
        "Training & Development",
        "Public Speaking",
        "Problem Solving",
        "Communication",
      ],
      challenges:
        "Managing coordination between security team members on a large scale, especially in dealing with the dynamics of participant characters and changes in the situation in the field in real-time, while maintaining the quality of service and regularity of the event.",
      learnings:
        "This experience deepened my understanding of the importance of situational leadership, clarity of instructions, speed in decision making, and the importance of trust and synergy within a team to manage large-scale activities.",
    },
    3: {
      // Obscura Exhibition UMN 2024
      role: "Tigris - Member of Security Division",
      duration: "January 2024 - September 2024",
      teamSize: "15 Members",
      participants: "1,500+ Visitors",
      responsibilities: [
        "Play an active role in designing regulations for the committee and participants to ensure that the event runs orderly and conducive.",
        "Carry out guard duties during the series of exhibition competitions according to the predetermined shift schedule.",
        "Work with the team to ensure that the entire series of peak night events run smoothly, safely, and in an organized manner.",
      ],
      achievements: [
        "The exhibition was visited by 1,000+ visitors in 3 days",
        "The peak night event ran smoothly without any major obstacles, thanks to effective collaboration between security team members.",
        "The entire series of events took place in an orderly manner and according to schedule, demonstrating the successful implementation of regulations.",
        "The regulations that were drawn up were complied with by participants, spectators, and the committee, creating a conducive event atmosphere.",
      ],
      skills: [
        "Team Coordination",
        "Training & Development",
        "Public Speaking",
        "Problem Solving",
        "Communication",
        "Time Management",
        "Attention To Detail",
      ],
      challenges:
        "Maintaining the conduciveness of the peak night amidst the large number of spectators and technical problems, and ensuring that regulations are adhered to without disrupting the comfort of the event.",
      learnings:
        "This experience teaches the importance of discipline, teamwork, and assertiveness in implementing regulations, as well as how to maintain professionalism in a public event environment.",
    },
    4: {
      // Starlight UMN 2024
      role: "Algiz - Security Coordinator",
      duration: "January 2024 - December 2024",
      teamSize: "24 Members",
      participants: "3,000+ Audience",
      responsibilities: [
        "Coordinating 24 security team members through regular briefings, training, and supervision during the 3 stages of the Starlight event.",
        "Responsible for creating regulations implemented by all committees and participants to maintain order and security of the event.",
        "Ensuring security and order are consistent at each stage of the event which has different dynamics and needs.",
        "Working with other divisions to synchronize regulations and activity flows so that the entire series of events run smoothly and in a structured manner.",
      ],
      achievements: [
        "Successfully held 3 stages of Starlight events safely and orderly, without major obstacles",
        "The level of audience and participant satisfaction reached 92%",
        "Successfully managed crowd control for 3,000+ participants",
        "The security regulations made were implemented and adhered to effectively, providing a direct impact on the conduciveness of the event.",
      ],
      skills: [
        "Leadership",
        "Logistics Management",
        "Security Planning",
        "Crowd Control",
        "Attention to Detail",
        "Risk Assessment",
        "Team Coordination",
        "Training & Development",
        "Public Speaking",
        "Problem Solving",
        "Communication",
      ],
      challenges: "Managing the security team in facing different challenges at each stage of the event, as well as adjusting the flow and regulations without disrupting the comfort of participants or the effectiveness of the event implementation.",
      learnings:
        "This experience deepened our understanding of the importance of flexibility in leadership, cross-divisional communication, and how risk management and thorough logistics planning are key to the success of a major event.",
    },
    5: {
      // Wedding Organizer Freelance
      role: "Wedding Coordinator & Event Manager",
      duration: "August 2022",
      teamSize: "9 Organizer",
      participants: "250 Invited Guests",
      responsibilities: [
        "Responsible for coordinating various event locations so that all activities run according to the rundown.",
        "Arrange the arrival, setting, and working hours of vendors to align with the course of the event.",
        "Ensure vendors meet the agreed standards, through checking contracts, service quality, and quantity of goods/services.",
        "Maintain venue security by supervising access in and out and ensuring the comfort of guests and staff during the event.",
        "Resolve obstacles in the field quickly and accurately so as not to disrupt the course of the event.",
      ],
      achievements: [
        "The wedding went smoothly, thanks to the coordination and quick response to issues on the ground.",
        "All vendors managed to meet the quality standards set and worked according to schedule.",
        "The venue was safe and orderly throughout the event, creating a comfortable atmosphere for guests and families.",
      ],
      skills: [
        "Wedding Planning",
        "Vendor Management",
        "Client Relations",
        "Crowd Control",
        "Budget Management",
        "Quality Control",
        "Problem Solving",
      ],
      challenges:
        "Handling multiple technical and communication aspects simultaneously with a limited number of members in different locations, while maintaining punctuality, vendor work quality, and guest safety.",
      learnings:
        "This freelance experience honed the skills of multitasking, communication between professionals, problem solving in urgent situations, and the importance of attention to detail in large-scale and high-expectation events.",
    },
    6: {
      // UKM Lions Badminton
      role: "Badminton Player",
      duration: "September 2022 - Present",
      teamSize: "350 Active Members",
      participants: "UMN Students",
      responsibilities: [
        "Actively participate in routine training 2x a week to improve playing technique and consistency.",
        "Play as an active player in UKM Badminton Lions.",
        "Participate in physical training to support fitness and endurance.",
        "Focus on improving badminton playing ability, both in terms of technique, reflexes, and strategy.",
        "Maintain health and fitness through regular exercise and an active lifestyle.",
      ],
      achievements: [
        "Improve badminton technique and playing skills significantly.",
        "Strengthen teamwork skills in matches and training.",
        "Be able to protect yourself from injury with proper and regular physical training.",
        "Still set aside time for sports consistently amidst a busy lecture schedule.",
      ],
      skills: [
        "Badminton Techniques",
        "Sports Coaching",
        "Team Building",
        "Mentoring",
        "Training & Development",
      ],
      challenges: "Maintain consistency in training and make time for exercise amidst academic and other activities..",
      learnings:
        "Participation in this UKM taught me the importance of discipline, time management, and commitment to physical health. I learned that sports are not just for fitness, but also train consistency, perseverance, and team spirit.",
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (!post) {
    return <div style={{ color: currentTheme.textColor }}>Organizational experience not found</div>
  }

  // Ambil detail organisasi berdasarkan ID
  const orgDetail = organizationDetails[post.id] || {}

  return (
    <div>
      <Link
        to="/blog"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: theme === "light" ? "#007bff" : "#2575fc",
          textDecoration: "none",
        }}
      >
        &larr; Back to Organizational Experience
      </Link>

      <article
        style={{
          backgroundColor: currentTheme.backgroundColor,
          padding: "0",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            height: "250px",
            position: "relative",
          }}
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
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
            <p
              style={{
                color: "#fff",
                margin: "0",
                fontSize: "14px",
              }}
            >
              {orgDetail.duration || post.date}
            </p>
            <h1
              style={{
                color: "#fff",
                margin: "10px 0 0",
              }}
            >
              {post.title}
            </h1>
          </div>
        </div>

        <div
          style={{
            padding: "30px",
            lineHeight: "1.6",
            fontSize: "16px",
            color: currentTheme.textColor,
          }}
        >
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {/* Overview */}
            <div style={{ marginBottom: "30px" }}>
              <h2 style={{ color: currentTheme.textColor, marginBottom: "15px" }}>Overview</h2>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{post.content}</p>
            </div>

            {/* Role & Duration Info */}
            {orgDetail.role && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginBottom: "30px",
                  padding: "20px",
                  backgroundColor: theme === "light" ? "#f8f9fa" : "#2d2d2d",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: currentTheme.textColor }}>Role</h4>
                  <p style={{ margin: 0, fontWeight: "bold" }}>{orgDetail.role}</p>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: currentTheme.textColor }}>Duration</h4>
                  <p style={{ margin: 0 }}>{orgDetail.duration}</p>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: currentTheme.textColor }}>Team</h4>
                  <p style={{ margin: 0 }}>{orgDetail.teamSize}</p>
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: currentTheme.textColor }}>Participant</h4>
                  <p style={{ margin: 0 }}>{orgDetail.participants}</p>
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {orgDetail.responsibilities && (
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ color: currentTheme.textColor, marginBottom: "15px" }}>Responsibility</h3>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
                  {orgDetail.responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {orgDetail.achievements && (
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ color: currentTheme.textColor, marginBottom: "15px" }}>Achievement</h3>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
                  {orgDetail.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: "8px", color: "#28a745" }}>
                      ✅ {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Learnings */}
            {(orgDetail.challenges || orgDetail.learnings) && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                {orgDetail.challenges && (
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: theme === "light" ? "#fff3cd" : "rgba(255, 193, 7, 0.1)",
                      borderRadius: "8px",
                      borderLeft: "4px solid #ffc107",
                    }}
                  >
                    <h4 style={{ margin: "0 0 10px 0", color: currentTheme.textColor }}>Challenges</h4>
                    <p style={{ margin: 0, lineHeight: "1.6" }}>{orgDetail.challenges}</p>
                  </div>
                )}

                {orgDetail.learnings && (
                  <div
                    style={{
                      padding: "20px",
                      backgroundColor: theme === "light" ? "#d4edda" : "rgba(40, 167, 69, 0.1)",
                      borderRadius: "8px",
                      borderLeft: "4px solid #28a745",
                    }}
                  >
                    <h4 style={{ margin: "0 0 10px 0", color: currentTheme.textColor }}>Learnings</h4>
                    <p style={{ margin: 0, lineHeight: "1.6" }}>{orgDetail.learnings}</p>
                  </div>
                )}
              </div>
            )}

            {/* Skills Developed */}
            {orgDetail.skills && (
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ color: currentTheme.textColor, marginBottom: "15px" }}>Skills Developed</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {orgDetail.skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: theme === "light" ? "#007bff" : "#2575fc",
                        color: "#fff",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "20px 30px 30px",
            borderTop: `1px solid ${currentTheme.borderColor}`,
          }}
        >
          <p style={{ fontWeight: "bold", color: currentTheme.textColor }}>Tags:</p>
          <div>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: currentTheme.tagBg,
                  color: currentTheme.tagText,
                  padding: "5px 10px",
                  borderRadius: "4px",
                  marginRight: "10px",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-3px)"
                  e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
