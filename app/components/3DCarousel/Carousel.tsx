import s from "./Carousel.module.css";

export default function Cube() {
  return (
    <div className={s.scene}>
      <div className={s.cube}>
        <div className={`${s.cube__face} ${s["cube__face--front"]}`}>
          <div className={s.txt}> FrontEnd Developer</div>
        </div>
        <div className={`${s.cube__face} ${s["cube__face--back"]}`}>
          <div className={s.txtU}> AI Specialist</div>
        </div>
        <div className={`${s.cube__face} ${s["cube__face--right"]}`}></div>
        <div className={`${s.cube__face} ${s["cube__face--left"]}`}></div>
        <div className={`${s.cube__face} ${s["cube__face--top"]}`}>
          <div className={s.txt}> Sysadmin</div>
        </div>
        <div className={`${s.cube__face} ${s["cube__face--bottom"]}`}>
          <div className={s.txt}>Linux Enthusiast</div>
        </div>
      </div>
    </div>
  );
}
