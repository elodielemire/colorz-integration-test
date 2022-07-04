import Navbar from "../components/Navbar";

function Header() {
  return (
    <div className="header center">
      <Navbar />
      <h3 className="header__subtitle fw-4 fs-16-lh-24 main-color">
        Du JAMAIS VU (enfin jusqu’à maintenant, du coup)
      </h3>
      <h1 className="header__title fs-10">
        Avec Vision.R, travaillez au bureau... comme si vous étiez encore à la
        maison !
      </h1>
      <div className="header__circle bg-main-color">
        <p className="header__circle__title fw-4 fs-12-lh-14--responsive text-white">
          Offre speciale
        </p>
        <p className="fw-7 fs-29-lh-35--responsive text-white">799,99€*</p>
        <p className="fw-3 fs-10-lh-12--responsive text-white">
          *au lieu de 1.499,99€
        </p>
      </div>
    </div>
  );
}

export default Header;
