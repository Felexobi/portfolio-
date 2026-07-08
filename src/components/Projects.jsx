import React from "react";
// 1. Imported your project image from the same components folder
import projectImg from "./image.mee1.JPG";

function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px", backgroundColor: "#030712" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#3b82f6", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>WHAT I'VE BUILT</p>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "800", color: "#fff", marginBottom: "48px" }}>Projects</h2>

        <div style={{
          backgroundColor: "#0f172a", border: "1px solid #1e3a8a44",
          borderRadius: "24px", overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
        }}>
          
          {/* 2. Replaced the shopping bag emoji background with your image */}
          <img 
            src={projectImg} 
            alt="Campus Marketplace Preview" 
            style={{
              width: "100%",
              height: "100%",
              minHeight: "250px",
              objectFit: "cover" // Ensures your image stretches cleanly to fit without squishing
            }}
          />

          <div style={{ padding: "40px 32px" }}>
            <div style={{
              display: "inline-block", backgroundColor: "#1e3a8a22",
              color: "#60a5fa", fontSize: "11px", fontWeight: "600",
              padding: "4px 12px", borderRadius: "20px", marginBottom: "16px",
              border: "1px solid #3b82f633"
            }}>Featured Project</div>

            {/* 3. Changed "Web App" to "Website" here */}
            <h3 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: "700", color: "#fff", marginBottom: "16px" }}>
              Campus Marketplace Website
            </h3>
            <p style={{ color: "#9ca3af", lineHeight: "1.8", fontSize: "14px", marginBottom: "24px" }}>
              A full-stack campus marketplace for Nigerian university students to buy and sell items.
              Features real-time messaging, JWT authentication, listing management, and image uploads.
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
              {["React.js", "JavaScript", "Axios", "Zustand", "REST APIs", "Vite"].map(tech => (
                <span key={tech} style={{
                  backgroundColor: "#1e3a8a33", color: "#60a5fa",
                  padding: "4px 12px", borderRadius: "20px", fontSize: "12px",
                  border: "1px solid #3b82f633"
                }}>{tech}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://github.com/Felexobi" target="_blank" rel="noreferrer" style={{
                backgroundColor: "#3b82f6", color: "#fff", padding: "10px 20px",
                borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "14px"
              }}>GitHub →</a>
              <a href="#" style={{
                border: "1px solid #3b82f6", color: "#60a5fa", padding: "10px 20px",
                borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "14px"
              }}>Live Demo →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;