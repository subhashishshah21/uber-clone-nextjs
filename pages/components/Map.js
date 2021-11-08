import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";
import tw from "tailwind-styled-components";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3ViaGFzaGlzaHNoYWgiLCJhIjoiY2t2cDF1OWk3MjdjdjJwcWc5eGt1bHF1MCJ9.Dd-ZFhFWt6NYbMYTXtTKBg";

const Map = (props) => {
  const { pickUpCoordinates, dropoffCoordinates } = props;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [85.324, 27.7172],
      zoom: 3,
    });
    if (pickUpCoordinates) {
      addtoMap(map, pickUpCoordinates);
    }
    if (dropoffCoordinates) {
      addtoMap(map, dropoffCoordinates);
    }
    if (pickUpCoordinates && dropoffCoordinates) {
      map.fitBounds([pickUpCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickUpCoordinates, dropoffCoordinates]);

  const addtoMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
