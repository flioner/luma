import s from "./SingleLamp.module.css";

export default function SingleLamp() {
  return (
    <div className={s.main}>
      <img className={s.img} src={"/photos/LampTransparent.webp"} />
      <div className={s.txtCont}>
        <div className={s.title}>Diseño independiente</div>
        <div className={s.txt}>Minimalismo, sin producción en masa</div>
      </div>
    </div>
  );
}
