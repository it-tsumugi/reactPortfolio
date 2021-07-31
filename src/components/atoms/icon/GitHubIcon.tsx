import { VFC } from "react";

import GitHub from "@material-ui/icons/GitHub";

import { iconType } from "../../../assets/Type";
import { SBaseIcon } from "./SBaseIcon";

export const GitHubIcon: VFC<iconType> = (props) => {
  const { url } = props;
  return (
    <SBaseIcon>
      <GitHub onClick={() => window.open(url)} />
    </SBaseIcon>
  );
};
