import s from "./Education.module.css";

const education = [
  {
    title: "Master's in Engineering Management",
    date: "Sept 2025 - Current",
    desc: "To develop ethically oriented leaders capable of planning and executing engineering projects through leadership skills",
    skills: "Project management, Engineering Analysis, Risk Assessment",
  },
  {
    title:
      "Advanced Artificial Intelligence for Data Science (Professional Concentration)",
    date: "Aug 2024 - Dec 2024",
    desc: "Machine learning, deep learning, and data analytics to develop AI-driven solutions for complex data challenges.",
    skills: "Python, Machine Learning, AI",
  },
  {
    title: "B.S. in Computer Science and Technology (ITC)",
    date: "Aug 2020 - Jun 2025",
    desc: "Design, implement, and manage advanced IT systems, networks, and digital solutions to meet the needs of modern organizations.",
    skills: "Web Design, Data Analysis, Systems Integration, Cloud Computing",
  },
];

export default function Education() {
  return (
    <div className={s.main}>
      <div className={s.separator}>
        <img
          className={s.img}
          src="/photos/icons/Tec.svg"
          alt="Tec de Monterrey"
        />

        <div className={s.aboutMe}>Education</div>

        <div className={s.eduCont}>
          {education.map((edu) => (
            <div key={edu.title} className={s.eduSection}>
              <div className={s.bold}>{edu.title}</div>
              <div className={s.grey}>{edu.date}</div>
              <div className={s.desc}>{edu.desc}</div>
              <div className={s.skills}>{edu.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
