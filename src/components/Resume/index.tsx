import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const iframeClassString = "w-full h-full"

const Resume: FunctionComponent<Props> = (props) => {

  return (
      <div className="flex-1 flex-col flex-grow self-stretch mb-12 w-full lg:w-10/12 xl:w-6/12 overflow-hidden mx-auto">
          {/*<iframe
            id="resume"
            className={iframeClassString}
            title="Resume"
            src="/MCDOUGALD_TREVOR_RESUME_2020.pdf"
          >
          </iframe>*/}

          <img src="/MCDOUGALD_TREVOR_RESUME_2020.png"  alt="Resume Image"/>
      </div>
  );
};

export default Resume;
