import React, { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";
import { NavLink } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

interface OwnProps {
  siteTitle: string;
}

type Props = OwnProps;

const HeaderTitle = tw.h1`flex text-5xl font-extrabold justify-center pt-10 pb-3 text-gray-800`;

const NavigationLink = styled(NavLink)`
  ${tw`text-left text-2xl opacity-50 font-medium text-gray-600`};
  text-underline-position: under;
  text-underline-offset: 0;
  &.active {
    ${tw`opacity-100 font-bold text-gray-600`};
  }
`;

const Header: FunctionComponent<Props> = ({ siteTitle }: Props) => {
  return (
    <header className='flex w-1/3 min-h-full bg-gray-200 ' data-testid='header'>
      <div tw='flex flex-col flex-none w-full self-center pb-32 px-4'>
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
        <div tw='flex flex-col self-center text-left pb-2'>
          <NavigationLink exact to='/'>
            Home
          </NavigationLink>
          <NavigationLink to='/resume'>Resume</NavigationLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
