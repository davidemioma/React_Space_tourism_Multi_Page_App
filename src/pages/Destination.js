import DestinationLayout from "../component/Page Layouts/Destination/DestLayout";
import DestinationHeader from "../component/Page Layouts/Destination/DestHeader";
import { useContext, useState } from "react";
import IndexContext from "../store/index-context";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";

function Destination() {
  const destCtx = useContext(IndexContext);

  const [filterValue, setFilterValue] = useState("");

  const getFilterValue = (value) => {
    setFilterValue(value);
  };

  let index;

  if (filterValue === "") {
    index = 0;
  } else
    index = destCtx.destinations.findIndex((dest) => dest.name === filterValue);

  const planet = destCtx.destinations[index];

  let imgName;

  if (index === 0) {
    imgName = moonImg;
  } else if (index === 1) {
    imgName = marsImg;
  } else if (index === 2) {
    imgName = europaImg;
  } else {
    imgName = titanImg;
  }

  return (
    <DestinationHeader onfilterValue={getFilterValue}>
      {index >= 0 && (
        <DestinationLayout
          image={imgName}
          name={planet.name}
          description={planet.description}
          distance={planet.distance}
          travel={planet.travel}
        />
      )}
    </DestinationHeader>
  );
}

export default Destination;
