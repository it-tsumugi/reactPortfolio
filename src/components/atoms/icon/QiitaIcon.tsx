import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import { VFC } from "react";
import { iconType } from "../../../assets/Type";
import { SBaseIcon } from "./SBaseIcon";

export const QiitaIcon: VFC<iconType> = (props) => {
  const { url } = props;
  return (
    <SBaseIcon>
      <LibraryBooksOutlinedIcon onClick={() => window.open(url)} />
    </SBaseIcon>
  );
};
