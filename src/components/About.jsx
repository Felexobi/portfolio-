import React from "react";
import profileImg from "./image.mee.jpeg"; // 💡 Note: If it's a jpeg, change .png to .jpg

function About() {
  return (
    <section id="about" style={{ padding: "80px 24px", backgroundColor: "#030712" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#3b82f6", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>GET TO KNOW ME</p>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "800", color: "#fff", marginBottom: "48px" }}>About Me</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "48px", alignItems: "center"
        }}>
          
          {/* 2. This is the image tag that displays your picture */}
          <img 
            src={profileImg} 
            alt="Frontend Developer Portrait"
            style={{
              width: "100%", 
              aspectRatio: "1", 
              borderRadius: "16px",
              objectFit: "cover", 
              maxHeight: "350px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          />

          <div>
            <p style={{ color: "#9ca3af", lineHeight: "1.8", fontSize: "15px", marginBottom: "20px" }}>
              Frontend Developer with hands-on experience building real-world web applications
              using React.js, JavaScript, and REST APIs. I specialize in creating clean,
              responsive user interfaces that deliver seamless experiences across devices.
            </p>
            <p style={{ color: "#9ca3af", lineHeight: "1.8", fontSize: "15px", marginBottom: "32px" }}>
              Currently completing my final year in Computer Science at Caleb University Lagos,
              combining studies with practical industry experience including ICT internships
              and a frontend development training program.
            </p>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {[
                { number: "2", label: "Internships" },
                { number: "1", label: "Major Project" },
                { number: "6+", label: "Months Exp." }
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", color: "#3b82f6" }}>{stat.number}</div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;