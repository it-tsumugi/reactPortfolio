import styled from "styled-components";
import {FC} from "react";

export const Footer: FC = () =>{
    return(
       <SFooter>
           &copy; 2021 test Inc.
       </SFooter>
    );
}

const SFooter = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;