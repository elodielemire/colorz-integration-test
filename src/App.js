import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Swiper from "./components/Swiper";
import Popin from "./components/Popin";
import screenImg from './assets/covers/screen.png';
import rectangleImg from './assets/covers/rectangle.png';
import lockerImg from './assets/svg/locker.png';

function App() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

  return (
    <div className="App col-12">
      <Header />
        <section>
            <p className="fw-4 fs-16-lh-24--responsive center">Vision.R with a grand “R” like in the mot “Revolution” !
                You are afraid to feel déstabilized with the futur retour au bureau ?
                With Vision.R, be rassuré.e.s ! Get instant, real time, high resolution, social videocall and feel comme à
                la maison. Bref, get ready to faire un carton !</p>
            <Button onClick={handleShowModal} text="Buy it now"/>
            <Popin show={showModal} handleClose={handleCloseModal}/>
        </section>
        <section className="section-technology">
            <p className="fs-22-lh-34--responsive center mb-15">The most advanced technology</p>
            <p className="fw-4 fs-16-lh-24--responsive center mb-45">Only 3mm of Carton-Plume de qualité for une expérience maximale ! We travelled all around the world, we
                rencontred all the Carton-Plume Masters to rapporter only the best.</p>
            <img className="screen-img" src={screenImg} alt="screen"/>
        </section>
        <Slider/>
        <div>
            <div>
                <img className="rectangle-img" alt="rectangle" src={rectangleImg}/>
            </div>
            <div className="section-locker__text">
                <img className="locker-img mb-21" alt="locker" src={lockerImg}/>
                <p className="fs-22-lh-34--responsive mb-21">The pudique (or je suis en pyjama et j’assume pas) effect</p>
                <p className="fw-4 fs-16-lh-24--responsive">With our no camera mode, you can be wherever you want and be en pyjama in totale discretion
                    with professionnalisme.</p>
            </div>
        </div>
        <div className="section-quote bg-main-color center">
            <p className="text-white fs-22-lh-34--responsive mb-15">“ Le grand écart technologique que tout le monde attendait ! ”</p>
            <p className="text-white fw-4 fs-16-lh-24">Jean-Claude Van Damme</p>
        </div>
        <section className="section-swiper">
            <p className="section-swiper__title fs-30-lh-42--responsive center mb-40">Some indispensables accessoires to optimize your experience</p>
            <Swiper/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
