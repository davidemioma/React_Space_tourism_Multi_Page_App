import DestinationLayout from "../component/Page Layouts/Destination/DestLayout";
import DestinationHeader from "../component/Page Layouts/Destination/DestHeader";
import { useContext, useState } from "react";
import IndexContext from "../store/index-context";

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
    index = destCtx.destinationsData.findIndex(
      (dest) => dest.name === filterValue
    );

  const planet = destCtx.destinationsData[index];

  return (
    <DestinationHeader onfilterValue={getFilterValue}>
      {index >= 0 && (
        <DestinationLayout
          image={planet.images.webp}
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
