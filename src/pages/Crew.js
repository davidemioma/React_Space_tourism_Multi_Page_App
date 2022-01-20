import CrewLayout from "../component/Page Layouts/Crew/CrewLayout";
import CrewInfo from "../component/Page Layouts/Crew/CrewInfo";
import { useState, useContext } from "react";
import IndexContext from "../store/index-context";
import imgAnoushe from "../assets/crew/image-anousheh-ansari.png";
import imgDouglas from "../assets/crew/image-douglas-hurley.png";
import imgMark from "../assets/crew/image-mark-shuttleworth.png";
import imgVictor from "../assets/crew/image-victor-glover.png";

function Crew() {
  const crewCTX = useContext(IndexContext);

  const [indexValue, setIndexValue] = useState("");

  const getIndexValue = (value) => {
    setIndexValue(value);
  };

  let index;

  if (indexValue === "") {
    index = 0;
  } else
    index = crewCTX.crewsData.findIndex((crew) => crew.index === +indexValue);

  const crew = crewCTX.crewsData[index];

  let imgName;

  if (index === 0) {
    imgName = imgAnoushe;
  } else if (index === 1) {
    imgName = imgDouglas;
  } else if (index === 2) {
    imgName = imgMark;
  } else {
    imgName = imgVictor;
  }

  return (
    <CrewLayout>
      <CrewInfo
        onIndexValue={getIndexValue}
        image={imgName}
        role={crew.role}
        name={crew.name}
        bio={crew.bio}
      />
    </CrewLayout>
  );
}

export default Crew;
