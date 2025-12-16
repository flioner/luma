import s from "./Homepage.module.css";
import Carousel from "../../components/3DCarousel/Carousel";

export default function Homepage() {
  return (
    <div className={s.mainBody}>
      <div className={s.mainCont}>
        <div className={s.textCont}>
          <div>
            <div className={s.textSection}>
              {"I'm"} <strong className={s.bold}>Fabian Lioner</strong>
            </div>

            <Carousel />
          </div>

          <div className={s.iconText}>
            <div>
              I work as a sysadmin, managing cutting edge AI HPC infrastructure.
            </div>
            <div className={s.follow}> Follow Me:</div>
            <div className={s.icons}>
              <img className={s.icon} src={"/photos/icons/linkedin.png"} />
              <img className={s.icon} src={"/photos/icons/instagram.png"} />
              <img className={s.icon} src={"/photos/icons/github.png"} />
              <img className={s.icon} src={"/photos/icons/share.png"} />
            </div>
          </div>
        </div>
        <div className={s.imgCont}>
          <img className={s.photo} src={"/photos/pfp.webp"} />
        </div>
      </div>
      <div className={s.bgCont}>
        <div className={s.bg} />
        <div className={s.dots2} />
      </div>
    </div>
  );
}

/* 

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
