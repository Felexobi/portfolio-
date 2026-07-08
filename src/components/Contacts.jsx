function Contact() {
  return (
    <section id="contact" style={{
      padding: "80px 24px",
      background: "linear-gradient(180deg, #030712, #0f172a)"
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#3b82f6", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>GET IN TOUCH</p>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>Let's Work Together</h2>
        <p style={{ color: "#9ca3af", lineHeight: "1.8", marginBottom: "48px", fontSize: "15px" }}>
          I'm currently open to new opportunities. Whether you have a project in mind
          or just want to say hi, my inbox is always open!
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {[
            { icon: "📧", label: "Email", value: "preciousobi@calebuniversity.edu.ng" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/precious-obijuru" },
            { icon: "🐙", label: "GitHub", value: "github.com/Felexobi" },
          ].map(item => (
            <div key={item.label} style={{
              backgroundColor: "#0f172a", border: "1px solid #1e3a8a33",
              borderRadius: "12px", padding: "16px 20px",
              display: "flex", alignItems: "center", gap: "16px",
              transition: "all 0.3s", textAlign: "left"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.transform = "translateX(8px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e3a8a33"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <span style={{ fontSize: "24px" }}>{item.icon}</span>
              <div>
                <div style={{ color: "#6b7280", fontSize: "11px", marginBottom: "2px" }}>{item.label}</div>
                <div style={{ color: "#e2e8f0", fontSize: "13px", wordBreak: "break-all" }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <a href="mailto:preciousobi@calebuniversity.edu.ng" style={{
          backgroundColor: "#3b82f6", color: "#fff", padding: "16px 40px",
          borderRadius: "50px", fontWeight: "600", textDecoration: "none",
          fontSize: "16px", display: "inline-block", transition: "all 0.3s",
          boxShadow: "0 0 30px #3b82f640"
        }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#2563eb"; e.target.style.transform = "scale(1.05)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "#3b82f6"; e.target.style.transform = "scale(1)"; }}
        >Send Me a Message ✉️</a>

        <div style={{ marginTop: "60px", color: "#374151", fontSize: "13px" }}>
          © 2026 Precious Obijuru. Built with React.js and Tailwind CSS. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Contact;