import classes from "./NavBar.module.css";
import logo from "../../assets/shared/logo.svg";
import toggler from "../../assets/shared/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const onClick = () => {
    props.onOpenModal();
  };

  return (
    <nav className={classes.navBar}>
      <img src={logo} alt="" />

      <img onClick={onClick} className={classes.toggler} src={toggler} alt="" />

      <ul>
        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/"
          >
            <span>00</span>home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/destination"
          >
            <span>01</span>destination
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/tech"
          >
            <span>02</span>technology
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(nav) => (nav.isActive ? classes.active : "")}
            to="/crew"
          >
            <span>03</span>crew
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
