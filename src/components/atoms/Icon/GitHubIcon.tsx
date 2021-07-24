import GitHub from "@material-ui/icons/GitHub";
import { SBaseIcon } from "./SBaseIcon";

export const GitHubIcon = () => {
  return (
    <SBaseIcon>
      <GitHub
        onClick={() => window.open("https://github.com/it-tsumugi", "_blank")}
      />
    </SBaseIcon>
  );
};
