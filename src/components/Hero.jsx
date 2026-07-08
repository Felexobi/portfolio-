const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", textAlign: "center",
      padding: "120px 24px 80px",
      background: "linear-gradient(135deg, #030712 0%, #0f172a 50%, #1e1b4b 100%)"
    }}>
      <p style={{
        color: "#3b82f6", fontSize: "12px", fontWeight: "600",
        letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px"
      }}>✦ Welcome to my portfolio ✦</p>

      <h1 style={{
        fontSize: "clamp(40px, 8vw, 72px)", fontWeight: "800", color: "#fff",
        marginBottom: "8px", lineHeight: 1.1
      }}>
        Hi, I'm{" "}
        <span style={{
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>Precious</span>
      </h1>

      <h2 style={{
        fontSize: "clamp(14px, 3vw, 18px)", color: "#60a5fa",
        fontWeight: "500", marginBottom: "24px", padding: "0 16px"
      }}>
        Frontend Developer | React.js | JavaScript | REST APIs
      </h2>

      <p style={{
        color: "#9ca3af", maxWidth: "520px", lineHeight: "1.8",
        fontSize: "clamp(14px, 2vw, 16px)", marginBottom: "40px", padding: "0 8px"
      }}>
        I build clean, responsive web applications that deliver seamless user experiences.
        Currently open to new opportunities in Nigeria and Remote.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={() => scrollTo("projects")} style={{
          backgroundColor: "#3b82f6", color: "#fff", padding: "14px 32px",
          borderRadius: "50px", fontWeight: "600", border: "none",
          fontSize: "15px", cursor: "pointer", transition: "all 0.3s",
          boxShadow: "0 0 20px #3b82f640"
        }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#2563eb"; e.target.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "#3b82f6"; e.target.style.transform = "scale(1)"; }}
        >View My Work</button>

        <button onClick={() => scrollTo("contact")} style={{
          border: "2px solid #3b82f6", color: "#60a5fa", padding: "14px 32px",
          borderRadius: "50px", fontWeight: "600", fontSize: "15px",
          cursor: "pointer", transition: "all 0.3s", backgroundColor: "transparent"
        }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#3b82f6"; e.target.style.color = "#fff"; e.target.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#60a5fa"; e.target.style.transform = "scale(1)"; }}
        >Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;