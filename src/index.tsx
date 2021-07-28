import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { App } from "./App";

const SApp = styled.div`
  background-color: #294286;
  color: white;
  min-height: 100vh;
  text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <SApp>
      <App />
    </SApp>
  </React.StrictMode>,
  document.getElementById("root")
);
