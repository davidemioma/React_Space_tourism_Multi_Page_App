import classes from "./Modal.module.css";
import closeImg from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

function Modal(props) {
  const onClick = () => {
    props.onCloseModal();
  };

  return (
    <div className={classes.modal}>
      <img onClick={onClick} src={closeImg} alt="" />

      <ul>
        <li>
          <Link to="/home">
            <span>00</span>
            home
          </Link>
        </li>

        <li>
          <Link to="/destination">
            <span>01</span>
            destination
          </Link>
        </li>

        <li>
          <Link to="/technology">
            <span>02</span>
            technology
          </Link>
        </li>

        <li>
          <Link to="/crew">
            <span>03</span>
            crew
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
