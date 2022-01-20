import TechInfo from "../component/Page Layouts/Tech/TechInfo";
import TechLayout from "../component/Page Layouts/Tech/TechLayout";
import IndexContext from "../store/index-context";
import { useContext, useState } from "react";

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

  return (
    <TechLayout>
      <TechInfo
        onIndexValue={getIndexValue}
        name={tech.name}
        description={tech.description}
        image={tech.images.landscape}
        portrait={tech.images.portrait}
      />
    </TechLayout>
  );
}

export default Tech;
