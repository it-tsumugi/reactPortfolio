import {FC} from "react";
import { Header } from "../atoms/layout/Header";

type PropsType={
    children:any;
}
export const HeaderOnly: FC<PropsType> = (props) =>{
    const {children} = props;
    return(
        <>
            <Header />
            {children}
        </ >
    );
}