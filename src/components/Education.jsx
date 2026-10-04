import { FiBookOpen } from "react-icons/fi";
import "./Education.css";

const MILESTONES = [
  {
    period: "School — 2007 to 2021",
    place: "Sri Rahula Balika Maha Vidyalaya",
    detail: "Ordinary Level & Advanced Level",
  },
  {
    period: "University — 2022",
    place: "ESOFT Metro Campus",
    detail: "Diploma in English",
  },
  {
    period: "University — 2022",
    place: "SLIIT University",
    detail: "Graphic Design & Multimedia Program",
  },
  {
    period: "University — 2023 to 2026",
    place: "SLTC Research University",
    detail: "Bachelor of Applied Information Technology",
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">
          School, diplomas and degree progress that I've achieved on my
          education road until today — and still continuing.
        </p>

        <ol className="timeline">
          {MILESTONES.map((item, i) => (
            <li className="timeline__item" key={item.place}>
              <span className="timeline__icon">
                <FiBookOpen size={22} />
              </span>
              <div className="timeline__card">
                <p className="timeline__period">{item.period}</p>
                <p className="timeline__place">{item.place}</p>
                <p className="timeline__detail">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
