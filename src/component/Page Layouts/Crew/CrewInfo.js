import classes from "./CrewInfo.module.css";

function CrewInfo(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.indicator) {
      props.onIndexValue(e.target.dataset.indicator);
    }
  };

  return (
    <div className={classes.contents}>
      <img src={props.image} alt="" />

      <div className={classes.content}>
        <div className={classes.dots} onClick={onClickHandler}>
          <div data-indicator="0"></div>
          <div data-indicator="1"></div>
          <div data-indicator="2"></div>
          <div data-indicator="3"></div>
        </div>

        <div className={classes.crew_info}>
          <h3>{props.role}</h3>
          <h2>{props.name}</h2>
          <p>{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default CrewInfo;
