import sliderImg1 from "../assets/covers/slider1.png";
import sliderImg2 from "../assets/covers/slider2.png";
import sliderImg3 from "../assets/covers/slider3.png";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel className="slider">
      <Carousel.Item interval={3000}>
        <img className="slider-img" alt="screens" src={sliderImg1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" alt="girl" src={sliderImg2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="slider-img" alt="people" src={sliderImg3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
