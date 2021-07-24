import Twitter from "@material-ui/icons/Twitter";
import { SBaseIcon } from "./SBaseIcon";

export const TwitterIcon = () => {
  return (
    <SBaseIcon>
      <Twitter
        onClick={() => window.open("https://twitter.com/it_tsumugi", "_blank")}
      />
    </SBaseIcon>
  );
};
