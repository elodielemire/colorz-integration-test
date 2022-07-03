import SwiperCard from "./SwiperCard";
import swiperImg1 from "../assets/svg/swiper1.svg";
import swiperImg2 from "../assets/svg/swiper2.svg";
import swiperImg3 from "../assets/svg/swiper3.svg";

function Swiper() {
    return (
        <div className="swiper">
            <SwiperCard img={swiperImg1} alt="dog" text="The funny filter kit (D’jeuns friendly)" price="199,00 €"/>
            <SwiperCard img={swiperImg2} alt="screen" text="Screen camera off" price="229,00 €"/>
            <SwiperCard img={swiperImg3} alt="shoe" text="The Charentaiz (Yeuv Friendly)" price="349,95 €"/>
        </div>
    );
}

export default Swiper;