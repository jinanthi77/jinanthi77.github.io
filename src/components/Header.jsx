import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const NAV_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

// Every section we watch while scrolling.
// "contact" has no menu link, so nothing is highlighted when you reach it.
const SECTION_IDS = ["about", "education", "projects", "skills", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    function updateActive() {
      // The last section whose top has passed just under the header
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__bar container">
        <a href="#top" className="site-header__logo" aria-label="Home">
          JH
        </a>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            
            <a key={link.href}
              href={link.href}
              className={link.href === `#${activeId}` ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="site-header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>
    </header>
  );
}