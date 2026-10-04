import { FiDownload, FiMessageSquare } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiBehance, SiGmail } from "react-icons/si";
import siteConfig from "../config.js";
import "./Hero.css";
import profileImg from "../assets/images/profile.png";
import AnimatedBackground from "./AnimatedBackground.jsx";

export default function Hero() {
  return (
    <section id="about" className="hero">
      <AnimatedBackground />
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__name">{siteConfig.name}</h1>
          <p className="hero__title">{siteConfig.title}</p>

          <p className="hero__about">
            I graduated from SLTC Research University with a Bachelor of
            Applied IT, achieving a GPA of 3.29 — Second Class Lower
            Division.<br/>
            <br/>
            I am a creative and innovative designer who combines
            strategy, aesthetic and clarity to make designs stand out. I am
            currently seeking opportunities to apply my skills in
            real-world projects and grow in a collaborative environment.
          </p>

          <ul className="hero__social">
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <SiGithub size={28} />
              </a>
            </li>
            <li>
              <a href={siteConfig.social.behance} target="_blank" rel="noreferrer" aria-label="Behance">
                <SiBehance size={28} />
              </a>
            </li>
            <li>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email">
                <SiGmail size={24} />
              </a>
            </li>
          </ul>

          <div className="hero__buttons">
            <a
              className="btn btn--resume"
              href={siteConfig.resumeUrl}
              download
            >
              <FiDownload size={22} /> Resume
            </a>
            <a className="btn btn--contact"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
              target="_blank"
              rel="noreferrer">
              <FiMessageSquare size={18} /> Contact Me
            </a>
          </div>
        </div>

        <div className="hero__photo" role="img" aria-label="Portrait photo" >
          <img src={profileImg} alt="Jinanthi Hansika" />
          
        </div>
      </div>
    </section>
  );
}
