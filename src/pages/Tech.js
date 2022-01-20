import TechInfo from "../component/Page Layouts/Tech/TechInfo";
import TechLayout from "../component/Page Layouts/Tech/TechLayout";
import IndexContext from "../store/index-context";
import { useContext, useState } from "react";
import launchImg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceImg from "../assets/technology/image-space-capsule-landscape.jpg";
import spacePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportImg from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg";

function Tech() {
  const techCTX = useContext(IndexContext);

  const [indexValue, setIndexValue] = useState("");

  const getIndexValue = (value) => {
    setIndexValue(value);
  };

  let index;

  if (indexValue === "") {
    index = 0;
  } else
    index = techCTX.techsData.findIndex((tech) => tech.index === +indexValue);

  const tech = techCTX.techsData[index];

  let imgName, portrait;

  if (index === 0) {
    imgName = launchImg;
    portrait = launchPortrait;
  } else if (index === 1) {
    imgName = spaceImg;
    portrait = spacePortrait;
  } else {
    imgName = spaceportImg;
    portrait = spaceportPortrait;
  }

  return (
    <TechLayout>
      <TechInfo
        onIndexValue={getIndexValue}
        name={tech.name}
        description={tech.description}
        image={imgName}
        portrait={portrait}
      />
    </TechLayout>
  );
}

export default Tech;
