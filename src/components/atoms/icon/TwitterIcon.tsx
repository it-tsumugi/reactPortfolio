import { VFC } from "react";

import Twitter from "@material-ui/icons/Twitter";

import { iconType } from "../../../assets/Type";
import { SBaseIcon } from "./SBaseIcon";

export const TwitterIcon: VFC<iconType> = (props) => {
  const { url } = props;
  return (
    <SBaseIcon>
      <Twitter onClick={() => window.open(url)} />
    </SBaseIcon>
  );
};
