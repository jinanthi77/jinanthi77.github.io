import siteConfig from "../config.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Design and Developed by {siteConfig.name} — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
