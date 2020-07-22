import React, { FunctionComponent } from "react";
import "twin.macro";

interface OwnProps {}

type Props = OwnProps;

const Resume: FunctionComponent<Props> = (props) => {
  return (
    <div tw='flex-1 flex-col flex-grow self-stretch m-2 w-full lg:w-10/12 xl:w-6/12 overflow-hidden mx-auto'>
      <img
        alt='Resume'
        className='mx-auto rounded-lg shadow mb-2'
        src='/MCDOUGALD_TREVOR_RESUME_2020.jpg'
      />
    </div>
  );
};

export default Resume;
