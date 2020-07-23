import React, { FunctionComponent } from "react";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

interface OwnProps {
  iconName: IconName;
  iconLink: string;
}

type Props = OwnProps;

const HeaderIcon: FunctionComponent<Props> = ({ iconName, iconLink }: Props) => {
  return (
    <a href={iconLink} tw='text-gray-500 px-2 hover:text-gray-400'>
      <FontAwesomeIcon icon={["fab", iconName]} size='2x' />
    </a>
  );
};

export default HeaderIcon;
