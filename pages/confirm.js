import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const getCoordinates = () => {
    const location = "Santa Monica";
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getCoordinates();
  });

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Selector Confirm Button</RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
 flex flex-col h-screen
`;

const RideContainer = tw.div`
 flex-1 
`;
