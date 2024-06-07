import { Link } from "react-router-dom";
export default function Partners() {
  return (
    <div className="partners">
      <div className="partners-background"></div>
      <div className="partners-logo-cont">
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://www.ipas.org/"}>
          <img src="ipas.webp" alt="" />
        </Link>
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://www.jhpiego.org/"}>
          <img src="jhpiego.svg" alt="" />
        </Link>
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://www.who.int/"}>
          <img src="who.svg" alt="" />
        </Link>
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://www.ethiopianmedicalass.org/"}>
          <img src="ema.png" alt="" />
        </Link>
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://www.engenderhealth.org/"}>
          <img src="engender.svg" alt="" />
        </Link>
        <Link data-aos-once="true" data-aos="slide-right" target="_blank" to={"https://ifmsa.org/"}>
          <img src="ifmsa.png" alt="" />
        </Link>
      </div>
      <div className="partners-background"></div>
    </div>
  );
}
