import { styled } from "styled-components";
import "../css/font.css";
import search from "../svg/search.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/profile" || location.pathname === "/chat")
    return null;
  return (
    <>
      <Container>
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
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 10%);
`;

const Title = styled.a`
  font-size: 30px;
  font-family: "ghanachoco";
  color: #1294bd;
  margin-left: 20px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 7px;
`;
export default Header;
