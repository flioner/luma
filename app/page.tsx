import Homepage from "./pages/Homepage/Homepage";
import s from "./page.module.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";

export default function Home() {
  return (
    <div className={s.mainCont}>
      {/* NAVIGATION */}
      <div className={s.navMenu}>
        <div className={s.glasscard}>
          <div className={s.navItem}>About Me</div>

          <div className={s.navItem}>Experience</div>

          <div className={s.navItem}>Education</div>
        </div>
      </div>

      <Homepage />
      <AboutMe />
      <Experience />
      <Education />
    </div>
  );
}
