import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <div>
            <p className="fs-16-lh-24--responsive">Vision.R with a grand “R” like in the mot “Revolution” !
                You are afraid to feel déstabilized with the futur retour au bureau ?
                With Vision.R, be rassuré.e.s ! Get instant, real time, high resolution, social videocall and feel comme à
                la maison. Bref, get ready to faire un carton !</p>
            <Button />
        </div>
        <div>
            <p className="fs-22-lh-34--responsive">The most advanced technology</p>
            <p className="fs-16-lh-24--responsive">Only 3mm of Carton-Plume de qualité for une expérience maximale ! We travelled all around the world, we
                rencontred all the Carton-Plume Masters to rapporter only the best.</p>
            <img/>
        </div>
        <Slider>
            <div>
                <img/>
                <img/>
                <img/>
            </div>
        </Slider>
        <div>
            <div>
                <img/>
            </div>
            <div>
                <img/>
                <p className="fs-22-lh-34--responsive">The pudique (or je suis en pyjama et j’assume pas) effect</p>
                <p className="fs-16-lh-24--responsive">With our no camera mode, you can be wherever you want and be en pyjama in totale discretion
                    with professionnalisme.</p>
            </div>
        </div>
        <Slider>
            <div className="bg-main-color">
                <p className="text-white fs-22-lh-34--responsive">“ Le grand écart technologique que tout le monde attendait ! ”</p>
                <p className="text-white fs-16-lh-24">Jean-Claude Van Damme</p>
            </div>
        </Slider>
        <div>
            <p className="fs-30-lh-42--responsive">Some indispensables accessoires to optimize your experience</p>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
