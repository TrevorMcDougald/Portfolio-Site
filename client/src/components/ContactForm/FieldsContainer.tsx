import React, { FunctionComponent, ReactNode } from "react";
import tw, { styled } from "twin.macro";

interface OwnProps {
  formFields: ReactNode;
  formMessage: ReactNode;
}

type Props = OwnProps;

const FieldsContainer: FunctionComponent<Props> = (props) => {
  const { formFields, formMessage } = props;
  return (
    <div tw='flex'>
      <div tw='w-3/5'>{formFields}</div>
      <div tw='w-2/5 pt-4 pr-6'>{formMessage}</div>
    </div>
  );
};

export default FieldsContainer;
