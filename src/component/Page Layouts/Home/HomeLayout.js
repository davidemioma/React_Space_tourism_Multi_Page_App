import classes from "./HomeLayout.module.css";
import Header from "../../Header/Layout";

function HomeLayout() {
  return (
    <div className={classes.home}>
      <Header />

      <div className={`container ${classes.content}`}>
        <div className={classes.space}>
          <h3>so, you want to travel to</h3>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className={classes.circle}>
          <h2>explore</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
