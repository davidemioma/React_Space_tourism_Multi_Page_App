import classes from "./TechInfo.module.css";

function TechInfo(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.indicator) {
      props.onIndexValue(e.target.dataset.indicator);
    }
  };

  return (
    <div className={classes.contents}>
      <img src={props.image} alt="" className={classes.img} />

      <img src={props.portrait} alt="" className={classes.portrait} />

      <div className={classes.content}>
        <div className={classes.dots} onClick={onClickHandler}>
          <span data-indicator="0">1</span>
          <span data-indicator="1">2</span>
          <span data-indicator="2">3</span>
        </div>

        <div className={classes.info}>
          <h3>the terminology...</h3>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechInfo;
