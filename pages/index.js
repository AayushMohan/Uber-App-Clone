import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}

        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Aayush Mohan</Name>
            <UserImage src="https://lh3.googleusercontent.com/a-/AOh14Ggfc-cIwPVhA5dWpHPoCZvQLFuj5z9XINGyFRaU=s576-p-rw-no" />
          </Profile>
        </Header>

        {/* ActionButton */}
        <ActionButton></ActionButton>

        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`;

const ActionButton = tw.div``;
