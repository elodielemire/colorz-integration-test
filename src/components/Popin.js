import monkeyImg from "../assets/svg/monkey.svg";
import { Modal } from "react-bootstrap";

function Popin({ show, handleClose }) {
  return (
    <div className="modal">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton />
        <Modal.Body className="center">
          <img src={monkeyImg} alt="monkey emoji" className="mbo-25" />
          <p className="fs-40-lh-56 mbo-25">Vous y avez (vraiment?) cru ?</p>
          <p className="fw-4 fs-22-lh-34 mbo-25">
            En tout cas, on espère que ça vous a fait sourire, parce qu’on en a
            bien besoin en ce moment.
            <b>
              Et sinon, vous avez sûrement des produits plus intéressants à
              vendre.
            </b>
          </p>
          <p className="fw-4 fs-22-lh-34 mbo-25">
            Ça tombe bien, nos équipes sont plus fortes en communication
            digitale qu’en innovations en carton.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Popin;
