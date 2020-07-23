import React, { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";
import HeaderIcon from "./HeaderIcon";

interface OwnProps {
  siteTitle: string;
}

type Props = OwnProps;

const HeaderTitle = tw.h1`flex text-5xl font-extrabold justify-center pt-10 pb-3 text-gray-800`;

const NavigationLink = styled.a<{ active: boolean }>`
  ${tw`text-2xl font-black text-gray-600 border-b-4 border-gray-600 border-solid`};
  text-underline-position: under;
  text-underline-offset: 0;
`;

const Header: FunctionComponent<Props> = ({ siteTitle }: Props) => {
  return (
    <header className='flex w-1/3 min-h-full bg-gray-200' data-testid='header'>
      <div tw='flex flex-col flex-none w-full self-center pb-32'>
        <HeaderTitle>{siteTitle}</HeaderTitle>
        <div tw='flex self-center pb-8 w-3/5 justify-around'>
          <HeaderIcon iconLink='https://github.com/TrevorMcDougald' iconName='github' />
          <HeaderIcon iconLink='https://www.linkedin.com/in/trevormcdougald/' iconName='linkedin' />
          <HeaderIcon
            iconLink='https://stackoverflow.com/users/5233908/trevor-mcdougald'
            iconName='stack-overflow'
          />
          <HeaderIcon iconLink='https://www.facebook.com/trevor.mcdougald.7' iconName='facebook' />
        </div>
        <div tw='flex self-center'>
          <NavigationLink active>Resume</NavigationLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
