import { styled } from "styled-components";
import "../css/font.css";
import about from "../svg/about.svg";
import search from "../svg/search.svg";
const Header = () => {
  return (
    <>
      <RadiusEnd />
      <Container>
        <Icon src={about} />
        <Title>pickto</Title>
        <Icon src={search} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: #33ccff;
  height: 40px;
  border-radius: 10px;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const RadiusEnd = styled.div`
  width: 100vw;
  height: 10px;
  background-color: #33ccff;
  z-index: 1;
  position: fixed;
  top: 0;
`;

const Title = styled.a`
  font-size: 30px;
  font-family: "ghanachoco";
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 7px;
`;
export default Header;
