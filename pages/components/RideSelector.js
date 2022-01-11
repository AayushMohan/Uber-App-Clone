import React from "react";
import tw from "tailwind-styled-components";

const RideSelector = () => {
  return (
    <Wrapper>
      {/* Title */}
      <Title>Choose a ride, or swipe up for more</Title>
      {/* Car List */}
      <CarList>
        <Car>
          <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <CarDetails>
            <Service>UberX</Service>
            <Time>5 min away</Time>
          </CarDetails>
          <Price>$20.32</Price>
        </Car>
        <Car>
          <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png" />
          <CarDetails>
            <Service>UberXL</Service>
            <Time>5 min away</Time>
          </CarDetails>
          <Price>$30.48</Price>
        </Car>
        <Car>
          <CarImage src="https://i.ibb.co/Xx4G91m/uberblack.png" />
          <CarDetails>
            <Service>UberBlack</Service>
            <Time>5 min away</Time>
          </CarDetails>
          <Price>$40.64</Price>
        </Car>
        <Car>
          <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
          <CarDetails>
            <Service>UberComfort</Service>
            <Time>5 min away</Time>
          </CarDetails>
          <Price>$24.38</Price>
        </Car>
        <Car>
          <CarImage src=" https://i.ibb.co/1nStPWT/uberblacksuv.png" />
          <CarDetails>
            <Service>Black SUV</Service>
            <Time>5 min away</Time>
          </CarDetails>
          <Price>$20.00</Price>
        </Car>
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
 flex-1 
`;

const Title = tw.div`
 text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div``;

const Car = tw.div`
 flex p-4 items-center
`;

const CarImage = tw.img`
 h-14 mr-4
`;

const CarDetails = tw.div`
 flex-1
`;

const Service = tw.div`
 font-medium
`;

const Time = tw.div`
 text-xs text-blue-500
`;

const Price = tw.div`
 text-sm
`;
