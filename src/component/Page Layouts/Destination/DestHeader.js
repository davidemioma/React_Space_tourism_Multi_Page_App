import classes from "./DestHeader.module.css";
import Header from "../../Header/Layout";

function DestinationHeader(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.indicator) {
      props.onfilterValue(e.target.textContent);
    }
  };

  return (
    <div className={classes.destination}>
      <Header />

      <h2 className={`container ${classes.title}`}>
        <span>01</span>pick your destination
      </h2>

      <ul className={classes.list} onClick={onClickHandler}>
        <li data-indicator="0">Moon</li>
        <li data-indicator="1">Mars</li>
        <li data-indicator="2">Europa</li>
        <li data-indicator="3">Titan</li>
      </ul>

      <main>{props.children}</main>
    </div>
  );
}

export default DestinationHeader;
