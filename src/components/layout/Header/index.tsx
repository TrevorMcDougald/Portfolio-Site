import React, { FunctionComponent } from "react";
import "twin.macro";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  return (
    <header data-testid="header" className="w-full">
      <div tw="flex flex-row flex-none w-full bg-gray-200">
        <div tw="flex text-3xl font-extrabold text-left pt-10 pb-12 pl-4 text-gray-800">
          <h1>Trevor McDougald</h1>
        </div>
        <div tw="flex">
          <h3>Resume</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
