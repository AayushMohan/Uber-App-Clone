import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWF5dXNobW9oYW4iLCJhIjoiY2t2cGVpaWlqMXNmcTJ4b3VlN2tsaGNscSJ9.3D_bhqYitsTH9fIDyg17Hw";

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
  bg-red-500 flex-1
`;

const ActionItems = tw.div`
  flex-1
`;
