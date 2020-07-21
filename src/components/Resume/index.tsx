import React, { FunctionComponent } from "react";
import "twin.macro";

interface OwnProps {}

type Props = OwnProps;

const iframeClassString = "w-full h-full";

const Resume: FunctionComponent<Props> = (props) => {
  return (
    <div tw="flex-1 flex-col flex-grow self-stretch mb-4 w-full lg:w-10/12 xl:w-6/12 overflow-hidden mx-auto">
      <img
        src="/MCDOUGALD_TREVOR_RESUME_2020.png"
        alt="Resume"
        className="p-2 mx-auto"
      />
    </div>
  );
};

export default Resume;
