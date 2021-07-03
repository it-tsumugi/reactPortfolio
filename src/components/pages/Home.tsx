import styled from "styled-components";
import hinako from "../../assets/images/hinako.jpg";

export const Home = () => {
  const name = "つむぎ";
  return (
    <>
      <SImg height={160} width={160} src = {hinako} alt={name} />
      <SName>{name}</SName>
      <Smessage>
        <div>Welcome to </div>
        <div>Tsumugi's Portofolio</div>
      </Smessage>
    </>
  );
};

const Smessage = styled.h1`
    font-size: 64px;
    margin: 15% auto;
`;

const SImg = styled.img`
    border-radius: 50%;
` ;

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
` ;