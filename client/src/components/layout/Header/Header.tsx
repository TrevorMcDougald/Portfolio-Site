import React, { FunctionComponent } from "react";
import tw, { styled, css } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OwnProps {
  siteTitle: string;
}

type Props = OwnProps;

const HeaderTitle = tw.h1`flex text-5xl font-extrabold justify-center pt-10 pb-3 text-gray-800`;

const linkStyles = [
  tw`
    text-xl
    text-gray-800
  `
];

const NavigationLink = styled.a<{ active: boolean }>`
  ${tw`text-2xl font-black text-gray-600 border-b-4 border-gray-600 border-solid`};
  text-underline-position: under;
  text-underline-offset: 0;
`;

const Header: FunctionComponent<Props> = ({ siteTitle }: OwnProps) => {
  return (
    <header className='flex w-1/3 min-h-full bg-gray-200' data-testid='header'>
      <div tw='flex flex-col flex-none w-full self-center pb-32'>
        <HeaderTitle>{siteTitle}</HeaderTitle>
        <div tw='flex self-center pb-8 w-3/5 justify-around'>
          <a href='https://github.com/TrevorMcDougald'>
            <FontAwesomeIcon icon={["fab", "github"]} size='3x' tw='text-blue-900 px-2' />
          </a>
          <a href='https://www.linkedin.com/in/trevormcdougald/'>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size='3x' tw='text-blue-900 px-2' />
          </a>
          <a href='https://stackoverflow.com/users/5233908/trevor-mcdougald'>
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} size='3x' tw='text-blue-900 px-2' />
          </a>
          <a href='https://www.facebook.com/trevor.mcdougald.7'>
            <FontAwesomeIcon icon={["fab", "facebook"]} size='3x' tw='text-blue-900 px-2' />
          </a>
        </div>
        <div tw='flex self-center'>
          <NavigationLink active>Resume</NavigationLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
