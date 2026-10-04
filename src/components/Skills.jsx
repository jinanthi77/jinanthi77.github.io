import { useEffect, useRef, useState } from "react";
import {
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

const GROUPS = [
  {
    title: "Designing & Prototyping",
    items: [
      { label: "Figma", Icon: SiFigma },
      { label: "Adobe Illustrator", Icon: DiIllustrator },
      { label: "Adobe Photoshop", Icon: DiPhotoshop },
    ],
  },
  {
    title: "Languages",
    items: [
      { label: "HTML", Icon: SiHtml5 },
      { label: "CSS", Icon: FaCss3Alt },
      { label: "Java Script", Icon: SiJavascript },
      { label: "Python", Icon: SiPython },
    ],
  },
  {
    title: "Frameworks & Other Tools",
    items: [
      { label: "React", Icon: SiReact },
      { label: "Tailwind CSS", Icon: SiTailwindcss },
      { label: "Express.js", Icon: SiExpress },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Github", Icon: SiGithub },
      { label: "Git", Icon: SiGit },
      { label: "VScode", Icon: VscVscode },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Start the pop-up animation when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only play once
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills ${visible ? "is-visible" : ""}`}
    >
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">
          Tools I use to shape and re-wire my designing skills and coding
          skills in my projects.
        </p>

        <div className="skills__groups">
          {GROUPS.map((group, groupIndex) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills__badges">
                {group.items.map(({ label, Icon }, i) => (
                  <li
                    className="skills__badge"
                    key={label}
                    style={{ "--delay": `${groupIndex * 0.2 + i * 0.08}s` }}
                  >
                    <Icon size={18} /> {label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}