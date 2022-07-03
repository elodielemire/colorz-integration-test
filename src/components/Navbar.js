import Button from "./Button";

function Navbar() {
    return (
        <div className="main-navbar">
            <div className="fs-24-lh-29">
                Vision.R
            </div>
            <ul className="d-none d-md-flex">
                <li className="fs-16-lh-20">
                    Low Solution
                </li>
                <li className="fs-16-lh-20">
                    Low Technology
                </li>
                <li className="fs-16-lh-20">
                    High Price
                </li>
                <li className="fs-16-lh-20">
                    <Button text="Buy it"></Button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;