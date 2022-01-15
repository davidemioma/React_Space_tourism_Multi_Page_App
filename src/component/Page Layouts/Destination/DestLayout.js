import classes from "./DestLayout.module.css";

function DestinationLayout(props) {
  return (
    <div className={`container ${classes.content}`}>
      <img className={classes.img} src={props.image} alt="" />

      <div className={classes.info}>
        <h1>{props.name}</h1>

        <p>{props.description}</p>

        <div>
          <span>
            <h3>avg. distance</h3>
            <h2>{props.distance}</h2>
          </span>

          <span>
            <h3>est. travel time</h3>
            <h2>{props.travel}</h2>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DestinationLayout;
