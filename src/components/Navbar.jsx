import { useState, useEffect } from "react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: scrolled ? "rgba(3,7,18,0.97)" : "rgba(3,7,18,0.7)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid #1e3a8a44" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "16px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <span style={{ color: "#3b82f6", fontWeight: "800", fontSize: "22px", cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>PO.</span>

        <div style={{ display: "flex", gap: "32px" }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{
              background: "none", border: "none", color: "#9ca3af",
              fontWeight: "500", fontSize: "14px", cursor: "pointer",
              textTransform: "capitalize", transition: "color 0.2s",
              padding: "4px 0"
            }}
              onMouseEnter={e => e.target.style.color = "#3b82f6"}
              onMouseLeave={e => e.target.style.color = "#9ca3af"}
            >{link}</button>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", color: "#9ca3af",
          fontSize: "24px", cursor: "pointer", padding: "4px"
        }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: "#0f172a", padding: "16px 24px",
          display: "flex", flexDirection: "column", gap: "16px",
          borderTop: "1px solid #1e3a8a33"
        }}>
          {links.map(link => (
            <button key={link} onClick={() => { scrollTo(link); setMenuOpen(false); }} style={{
              background: "none", border: "none", color: "#9ca3af",
              fontWeight: "500", fontSize: "16px", cursor: "pointer",
              textTransform: "capitalize", textAlign: "left", padding: "8px 0"
            }}>{link}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;