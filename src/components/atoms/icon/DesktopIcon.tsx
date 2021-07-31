import { VFC } from "react";

import Desktop from "@material-ui/icons/DesktopMac";

import { iconType } from "../../../assets/Type";
import { SBaseIcon } from "./SBaseIcon";

export const DesktopIcon: VFC<iconType> = (props) => {
  const { url } = props;
  return (
    <SBaseIcon>
      <Desktop onClick={() => window.open(url)} />
    </SBaseIcon>
  );
};
