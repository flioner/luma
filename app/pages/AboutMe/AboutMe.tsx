import s from "./AboutMe.module.css";

const text = `

Luma byLioner nace del interés por el diseño y la tecnología, con una idea clara:
 crear lámparas que no podrían existir mediante métodos de manufactura convencionales.
  Es un proyecto independiente donde cada diseño se desarrolla y ensambla en casa, 
  con más de 24 horas dedicadas a cada pieza. A través de un empaque ecológico y reciclable,
   y el compromiso de trabajar con materiales 100% reciclados para 2027, buscamos que cada lámpara
    tenga también un impacto positivo en el ambiente.
`;

export default function AboutMe() {
  return (
    <main className={s.main}>
      <div className={s.separator}>
        <img className={s.img} src="/photos/lamp.jpg" />

        <div className={s.aboutMe}>Acerca de Nosotros</div>
        {text}

        <div className={s.bg} />
      </div>
    </main>
  );
}
