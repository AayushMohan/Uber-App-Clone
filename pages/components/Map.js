import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWF5dXNobW9oYW4iLCJhIjoiY2t2cGVpaWlqMXNmcTJ4b3VlN2tsaGNscSJ9.3D_bhqYitsTH9fIDyg17Hw";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;
