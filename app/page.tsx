import s from "./page.module.css";
import AboutMe from "./pages/AboutMe/AboutMe";
import Homepage from "./pages/Homepage/Homepage";
import SingleLamp from "./pages/SingleLamp/SingleLamp";

export default function Home() {
  return (
    <div className={s.mainCont}>
      <Homepage />

      <SingleLamp />
      <AboutMe />
    </div>
  );
}

/* 

 
      <div className={s.navMenu}>
        <div className={s.glasscard}>
          <div className={s.navItem}>Nosotros</div>

          <div className={s.navItem}>Productos</div>
        </div>
      </div>

*/
