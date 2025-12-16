import s from "./Experience.module.css";

const experiences = [
  {
    icon: "/photos/icons/Oracle.svg",
    role: "Software Developer",
    date: "Jun 2025 - Present",
    company: "Oracle",
    description:
      "Administration, troubleshooting and deployment of the latest AI servers and technologies.",
    skills: "HPC, Linux Server, GPU",
  },
  {
    icon: "/photos/icons/Tec.svg",
    role: "On Campus Intern",
    date: "Aug 2023 - Jun 2025",
    company: "Tec de Monterrey",
    description:
      "Maintaining, refactoring, documenting and migrating internal tools",
    skills: "React, PHP, Scrum, Docker",
  },
];

export default function Experience() {
  return (
    <main className={s.mainBody}>
      <div className={s.sectionContainer}>
        {experiences.map((exp) => (
          <div key={exp.company + exp.date} className={s.container}>
            <img className={s.icon} src={exp.icon} alt={exp.company} />
            <div className={s.section}>
              <div className={s.top}>
                <div className={s.role}>{exp.role}</div>
                <div className={s.date}>{exp.date}</div>
              </div>
              <div className={s.company}>{exp.company}</div>
              <div>{exp.description}</div>
              <div className={s.skills}>{exp.skills}</div>
            </div>
          </div>
        ))}

        <div className={s.bgCont}>
          <div className={s.bg} />
        </div>
      </div>
    </main>
  );
}
