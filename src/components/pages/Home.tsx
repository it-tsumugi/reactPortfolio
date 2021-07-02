import styled from "styled-components";

export const Home =() => {
    return (
            <Smessage>
                <div>Welcome to </div>
                <div>Tsumugi's Portofolio</div>
            </Smessage>
    );
};

const Smessage = styled.h1`
    font-size: 64px;
    margin: 15% auto;
`;