import classes from "./CrewLayout.module.css";
import Header from "../../Header/Layout";

function CrewLayout(props) {
  return (
    <div className={classes.crew}>
      <Header />

      <h2 className={`container ${classes.title}`}>
        <span>02</span>
        meet your crew
      </h2>

      <main className="container">{props.children}</main>
    </div>
  );
}

export default CrewLayout;
