import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import { SBaseIcon } from "./SBaseIcon";

export const QiitaIcon = () => {
  return (
    <SBaseIcon>
      <LibraryBooksOutlinedIcon
        onClick={() => window.open("https://qiita.com/it_tsumugi", "_blank")}
      />
    </SBaseIcon>
  );
};
