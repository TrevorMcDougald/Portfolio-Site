import React, { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";

import "./LandingPage.scss";

interface OwnProps {}

type Props = OwnProps;

const LandingPage: FunctionComponent<Props> = (props) => {
  return (
    <div id='clouds' tw='w-full overflow-x-hidden min-h-full'>
      <div className='cloud x1' />
      <div className='cloud x2' />
      <div className='cloud x3' />
      <div className='cloud x4' />
      <div className='cloud x5' />
      <div className='cloud x6' />
    </div>
  );
};

export default LandingPage;
