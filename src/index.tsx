import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {App} from './App';

const SApp = styled.div`
  background-color: #e4f9f5;
  margin: 0;
  min-height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
   {/* <SApp>*/}
     <App />
    {/*</SApp>*/}
  </React.StrictMode>,
  document.getElementById('root')
);