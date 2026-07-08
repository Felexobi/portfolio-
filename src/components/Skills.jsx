function Skills() {
  const skills = [
    { icon: "⚛️", name: "React.js", level: "Advanced" },
    { icon: "🟨", name: "JavaScript", level: "Advanced" },
    { icon: "🌐", name: "HTML/CSS", level: "Advanced" },
    { icon: "🔗", name: "REST APIs", level: "Intermediate" },
    { icon: "📦", name: "Axios", level: "Intermediate" },
    { icon: "🗃️", name: "Zustand", level: "Intermediate" },
    { icon: "⚡", name: "Vite", level: "Intermediate" },
    { icon: "🐙", name: "Git/GitHub", level: "Intermediate" },
  ];

  return (
    <section id="skills" style={{
      padding: "80px 24px",
      background: "linear-gradient(180deg, #030712, #0f172a)"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#3b82f6", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>WHAT I WORK WITH</p>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "800", color: "#fff", marginBottom: "48px" }}>My Skills</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "16px"
        }}>
          {skills.map(skill => (
            <div key={skill.name} style={{
              backgroundColor: "#0f172a", border: "1px solid #1e3a8a33",
              borderRadius: "16px", padding: "24px 16px", textAlign: "center",
              transition: "all 0.3s", cursor: "default"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px #3b82f620";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1e3a8a33";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{skill.icon}</div>
              <div style={{ color: "#fff", fontWeight: "600", fontSize: "13px", marginBottom: "4px" }}>{skill.name}</div>
              <div style={{ color: "#3b82f6", fontSize: "11px" }}>{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;