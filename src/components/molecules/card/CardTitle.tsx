import { VFC } from "react";
import styled from "styled-components";

import { DesktopIcon } from "../../atoms/icon/DesktopIcon";

type PropsType = {
  title: string;
  url?: string;
  isIcon: boolean;
};

export const CardTitle: VFC<PropsType> = (props) => {
  const { title, isIcon, url } = props;
  return (
    <STitleContainer>
      <div style={{ width: 30 }}></div>
      <STitle>{title}</STitle>
      {isIcon ? <SDeskTopIcon url={url}></SDeskTopIcon> : null}
    </STitleContainer>
  );
};

const STitle = styled.h2`
  font-size: 20px;
  margin: 5px 10px 5px 5px;
`;

const STitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SDeskTopIcon = styled(DesktopIcon)`
  width: 30px;
`;
