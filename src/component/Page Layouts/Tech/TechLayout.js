import classes from "./TechLayout.module.css";
import Header from "../../Header/Layout";

function TechLayout(props) {
  return (
    <div className={classes.tech}>
      <Header />

      <h2 className={`container ${classes.title}`}>
        <span>03</span>
        space launch 101
      </h2>

      <main className="container">{props.children}</main>
    </div>
  );
}

export default TechLayout;
