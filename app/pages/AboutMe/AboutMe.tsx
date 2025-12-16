import s from "./AboutMe.module.css";

const text = `
I am a Developer and SysAdmin at Oracle where I troubleshoot and manage AI GPU servers while supporting high performance,
 reliable infrastructure. My strengths include strong problem solving skills and deep experience with Linux systems, and 
 I enjoy engaging work that challenges me technically and creatively. I contributed to the planning and development of 
 a tool that is now used nationwide, and experiences like that drive me to keep pursuing projects that create real,
  meaningful impact.
`;

export default function AboutMe() {
  return (
    <main className={s.main}>
      <div className={s.separator}>
        <img className={s.img} src="/photos/pfp3.webp" />

        <div className={s.aboutMe}>About Me</div>
        {text}

        <div className={s.bg} />
      </div>
    </main>
  );
}
