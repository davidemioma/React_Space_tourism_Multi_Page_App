import { createContext } from "react";
import { destinations, crew, technology } from "../data.json";

const IndexContext = createContext({
  destinationsData: [],
  techsData: [],
  crewsData: [],
});

export const IndexContextProviders = (props) => {
  const contextValue = {
    destinationsData: destinations,
    techsData: technology,
    crewsData: crew,
  };

  console.log(technology);

  return (
    <IndexContext.Provider value={contextValue}>
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexContext;
