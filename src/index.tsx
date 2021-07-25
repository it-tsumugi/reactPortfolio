import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { App } from "./App";

const SApp = styled.div`
  background-color: #294286;
  text-align: center;
  color: white;
  min-height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <SApp>
      <App />
    </SApp>
  </React.StrictMode>,
  document.getElementById("root")
);
