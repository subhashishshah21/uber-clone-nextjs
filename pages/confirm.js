import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickUpCoordinates, setpickUpCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setdropoffCoordinates] = useState([0, 0]);

  const getPickUpcordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic3ViaGFzaGlzaHNoYWgiLCJhIjoiY2t2cDF1OWk3MjdjdjJwcWc5eGt1bHF1MCJ9.Dd-ZFhFWt6NYbMYTXtTKBg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setpickUpCoordinates(data.features[0].center);
      });
  };
  const getDropofcordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoic3ViaGFzaGlzaHNoYWgiLCJhIjoiY2t2cDF1OWk3MjdjdjJwcWc5eGt1bHF1MCJ9.Dd-ZFhFWt6NYbMYTXtTKBg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setdropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickUpcordinates(pickup);
    getDropofcordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/Search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <ConfirmRideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />

        <ConfirmButtoncontainer>
          {" "}
          <ConfirmButton>Confirm UberX</ConfirmButton>{" "}
        </ConfirmButtoncontainer>
      </ConfirmRideContainer>
    </Wrapper>
  );
};

export default Confirm;
const Wrapper = tw.div`
 h-screen flex flex-col
`;
const ConfirmRideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButton = tw.div`
bg-black text-white text-center  my-4 mx-4 py-4 text-xl
`;
const ConfirmButtoncontainer = tw.div`
border-t-2
`;
const BackButton = tw.img`
h-full object-contain
`;
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
