import CrewLayout from "../component/Page Layouts/Crew/CrewLayout";
import CrewInfo from "../component/Page Layouts/Crew/CrewInfo";
import { useState, useContext } from "react";
import IndexContext from "../store/index-context";

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

  return (
    <CrewLayout>
      <CrewInfo
        onIndexValue={getIndexValue}
        image={crew.images.png}
        role={crew.role}
        name={crew.name}
        bio={crew.bio}
      />
    </CrewLayout>
  );
}

export default Crew;
