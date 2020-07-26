import React, { FunctionComponent } from "react";
import "twin.macro";

interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
  return (
    <div tw='flex-col flex-none bg-gray-600 w-full text-right'>
      <h2 tw='text-gray-100 pr-8'>TM</h2>
    </div>
  );
};

export default Footer;
