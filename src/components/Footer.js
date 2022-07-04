import colorzImg from "../assets/svg/colorz.svg";
import logoImg from "../assets/svg/logo_created.svg";

function Footer() {
    return (
        <div className="footer bg-secondary-color">
            <img src={colorzImg} alt="colorz logo" className="colorz-img mbo-30"/>
            <ul className="footer__list">
                <li className="mbo-20">
                    <p className="fs-22-lh-34">Paris</p>
                    <p className="fw-4 fs-16-lh-24">16 bis avenue Parmentier</p>
                    <p className="fw-4 fs-16-lh-24">75011 Paris, France</p>
                </li>
                <li className="mbo-20">
                    <p className="fs-22-lh-34">Lyon</p>
                    <p className="fw-4 fs-16-lh-24">1 rue Lalande</p>
                    <p className="fw-4 fs-16-lh-24">69006 Lyon, France</p>
                </li>
                <li className="mbo-30">
                    <p className="fs-22-lh-34">Nous contacter</p>
                    <p className="fw-4 fs-16-lh-24">+33 (0)1 82 83 83 60</p>
                    <p className="fw-4 fs-16-lh-24">hello@colorz.fr</p>
                </li>
                <li>
                    <img className="" src={logoImg} alt="created logo"/>
                </li>
            </ul>

        </div>
    );
}

export default Footer;