import GitHub from "@material-ui/icons/GitHub";
import { VFC } from "react";
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