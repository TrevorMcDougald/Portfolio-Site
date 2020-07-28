import React, { FunctionComponent } from "react";
import "twin.macro";
import ResumeImage from "../../assets/images/MCDOUGALD_TREVOR_RESUME_2020.jpg";

interface OwnProps {}

type Props = OwnProps;

const Resume: FunctionComponent<Props> = (props) => {
  return (
    <div tw='m-2 w-full overflow-hidden my-auto mx-auto'>
      <img
        alt='Resume'
        className='mx-auto rounded-lg w-10/12 max-w-screen-lg shadow m-6'
        src={ResumeImage}
      />
    </div>
  );
};

export default Resume;
