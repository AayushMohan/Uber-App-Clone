import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const getPickupCoordinates = () => {
    const pickup = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWF5dXNobW9oYW4iLCJhIjoiY2t2cGVpaWlqMXNmcTJ4b3VlN2tsaGNscSJ9.3D_bhqYitsTH9fIDyg17Hw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWF5dXNobW9oYW4iLCJhIjoiY2t2cGVpaWlqMXNmcTJ4b3VlN2tsaGNscSJ9.3D_bhqYitsTH9fIDyg17Hw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Dropoff");
        console.log(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
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
