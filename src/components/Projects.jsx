import { useState } from "react";
import { SiFigma, SiGithub, SiBehance } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import siteConfig from "../config.js";
import "./Projects.css";

import helaeatsImg from "../assets/images/project-helaeats.png";
import zeroImg from "../assets/images/project-zero.png";
import alguruImg from "../assets/images/project-alguru.png";
import sugarblissImg from "../assets/images/project-sugarbliss.png";

// Paste each project's own links below.
// A project only shows a GitHub button if it has a githubUrl.
const PROJECTS = [
  {
    id: "helaeats",
    name: "Hela Eats",
    tag: "E-business Website Design",
    image: helaeatsImg,
    description:
      "A recipe-to-cart platform that bridges the gap between Sri Lankan cooking heritage and young Sri Lankans.This platform solve the waste of food, time, and money by providing ready-to-meal-kits.",
    figmaUrl: "https://www.figma.com/design/L6jiUL1OXixjbPyruGyA5C/HelaEats?node-id=1-94&t=zraMwjnjdRTNYDm7-1",
  },
  {
    id: "zero",
    name: "Zero",
    tag: "SaaS Platform Design",
    image: zeroImg,
    description:
      "A SaaS platform provides users a zero-software-load, and quick-subscription way to done the work from the platform space.",
    figmaUrl: "https://www.figma.com/design/8VDAGoUH9Ar4iJGJl1yOST/Subscription-Platform?node-id=0-1&t=zraMwjnjdRTNYDm7-1",
  },
  {
    id: "alguru",
    name: "AL Guru",
    tag: "Elearning Platform",
    image: alguruImg,
    description:
      "This Elearning Platform provides Past papers in Sinhala, English and Tamil for students who struggle to find and buy these papers, and it also provide AI engine to solve the problems for students.",
    figmaUrl: "https://www.figma.com/design/LQOdKQpNfRRyFNg55pg4Qz/ELearning-Platform?node-id=0-1&t=zraMwjnjdRTNYDm7-1",
  },
  {
    id: "sugarbliss",
    name: "Sugar Bliss",
    tag: "Website Development",
    image: sugarblissImg,
    description:
      "A Doughnut e-business website built to sharpen backend and frontend development skills end to end.",
    githubUrl: "https://github.com/jinanthi77/sugar_bliss-frontend",
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">
          Projects I created that showcase my design skills and thinking
          pattern with innovative ideas.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              className={`project-card ${
                project.id === activeId ? "is-active" : ""
              }`}
              onClick={() => setActiveId(project.id)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-card__image"
              />
              
            </button>
          ))}
        </div>

        <div className="project-detail">
          <div>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
          </div>
          <div className="project-detail__links">
            
            {active.figmaUrl && (
    
            <a  className="btn btn--figma"
              href={active.figmaUrl}
              target="_blank"
              rel="noreferrer"
            >
              <SiFigma /> View in Figma
            </a>
            )}

            {active.githubUrl && (
              
              <a className="btn btn--github"
                href={active.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub /> View in GitHub
              </a>
            )}
          </div>
        </div>

        <div className="projects__more">
          
          <a className="btn btn--behance"
            href={siteConfig.social.behance}
            target="_blank"
            rel="noreferrer"
          >
            <SiBehance /> View more in Behance <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}