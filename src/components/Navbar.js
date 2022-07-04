import Button from "./Button";

function Navbar() {
    return (
        <div className="main-navbar">
            <div className="main-navbar__title fs-24-lh-29">
                Vision.R
            </div>
            <ul className="d-none d-md-flex">
                <li className="fs-16-lh-20">
                    <a>Low Solution</a>
                </li>
                <li className="fs-16-lh-20">
                    <a>Low Technology</a>
                </li>
                <li className="fs-16-lh-20">
                    <a>High Price</a>
                </li>
                <li className="fs-16-lh-20">
                    <Button text="Buy it"></Button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;