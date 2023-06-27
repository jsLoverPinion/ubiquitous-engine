import styled from "styled-components";
import pick from "../svg/pick.svg";
import upload from "../svg/upload.svg";
import trophy from "../svg/trophy.svg";
import user from "../svg/user.svg";
const Nav = () => {
  return (
    <>
      <Container>
        <Items>
          <NavItem>
            <Icon src={upload} />
            <IconText>pcik</IconText>
          </NavItem>
          <NavItem>
            <Icon src={pick} />
            <IconText>gallery</IconText>
          </NavItem>
          <NavItem>
            <Icon src={trophy}></Icon>
            <IconText>ranking</IconText>
          </NavItem>
          <NavItem>
            <Icon src={user}></Icon>
            <IconText>profile</IconText>
          </NavItem>
        </Items>
      </Container>
      <RadiusEnd></RadiusEnd>
    </>
  );
};

const navColor = "#b1b1b1";

const RadiusEnd = styled.div`
  width: 100vw;
  background-color: #33ccff;
  height: 10px;
  position: fixed;
  bottom: 0;
  z-index: 0;
`;

const Container = styled.nav`
  width: 100vw;
  height: 55px;
  background-color: #33ccff;
  margin: 0%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-flow: column;
  z-index: 1;
`;

const NavItem = styled.a`
  background-color: "#33ccff";
  flex-flow: column;
  display: flex;
  font-size: 12px;
  align-items: center;
`;

const Items = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const IconText = styled.p`
  font-size: 12;
  margin: 4px;
  margin-bottom: 0;
  z-index: 4;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
export default Nav;
