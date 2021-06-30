import {FC} from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

type PropsType={
    children:any;
}

export const DefaultLayout: FC<PropsType> = (props) =>{
    const {children} = props;
    return(
        <>
            <Header />
            {children}
            <Footer />
        </ >
    );
}