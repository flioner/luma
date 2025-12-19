import s from "./Homepage.module.css";
import Carousel from "../../components/3DCarousel/Carousel";

export default function Homepage() {
  return (
    <div className={s.mainBody}>
      <div className={s.mainCont}>
        <div className={s.textCont}>
          <div>
            <div className={s.textSection}>
              <strong className={s.luma}>LUMA</strong>
              <strong className={s.bylioner}>byLioner</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bgCont}>
        <div className={s.bg} />
      </div>
    </div>
  );
}

/* 

      <div className={s.glasscard}>
            <div className={s.button}>ver productos</div>
          </div>

     <div className={s.bgCont}>
        <div className={s.bg} />
        <div className={s.dots2} />
      </div>


           <Swiper
              loop={true}
              speed={1500}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              direction="vertical"
              className={s.swiper}
              modules={[EffectCube, Autoplay]}
              effect="cube"
              cubeEffect={{ shadow: false, slideShadows: false }}
            >
              <SwiperSlide>
                <div className={s.slide}>FrontEnd Developer</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.slide}>AI Specialist</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.slide}>Sysadmin</div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.slide}>Linux Enthusiast</div>
              </SwiperSlide>
            </Swiper>


*/
