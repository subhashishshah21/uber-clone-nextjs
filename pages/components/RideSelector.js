import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
const RideSelector = (props) => {
  const { pickUpCoordinates, dropoffCoordinates } = props;
  const [rideDuration, setrideDuration] = useState(0);
  useEffect(() => {
    fetch(
      `http://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic3ViaGFzaGlzaHNoYWgiLCJhIjoiY2t2cDF1OWk3MjdjdjJwcWc5eGt1bHF1MCJ9.Dd-ZFhFWt6NYbMYTXtTKBg`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setrideDuration(data.routes[0].duration / 100);
      });
  }, [pickUpCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a Ride or swipe up for more</Title>
      <Rideoptions>
        {carList.map((car, index) => (
          <Car key={index}>
            <Carimage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Carprice>
              {"$ " + (rideDuration * car.multiplier).toFixed(2)}
            </Carprice>
          </Car>
        ))}
      </Rideoptions>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;
const Rideoptions = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex items-center p-4
`;
const Carimage = tw.img`
h-14 mr-5
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
const Carprice = tw.div`
text-sm
`;
