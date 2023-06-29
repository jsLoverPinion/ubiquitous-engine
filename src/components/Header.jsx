import { styled } from "styled-components";
import "../css/font.css";
import about from "../svg/about.svg";
import search from "../svg/search.svg";
const Header = () => {
  return (
    <>
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
  background-color: #ffffff;

  height: 40px;
  border-radius: 0px 0px 10px 10px;
  z-index: 2;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 20%);
`;

const Title = styled.a`
  font-size: 30px;
  font-family: "ghanachoco";
  color: #1294bd;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 7px;
`;
export default Header;
