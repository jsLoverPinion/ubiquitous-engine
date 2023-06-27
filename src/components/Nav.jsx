import styled from "styled-components";
import { pick } from "../svg/pick.svg";
import { upload } from "../svg/upload.svg";
const Nav = () => {
  return (
    <>
      <Container>
        <Items>
          <NavItem>
            <Icon src={pick} />
            <IconText>upload</IconText>
          </NavItem>
          <NavItem>kinga</NavItem>
          <NavItem>
            <Icon src={upload} />
            <IconText>pick</IconText>
          </NavItem>
          <NavItem>rank</NavItem>
          <NavItem>profile</NavItem>
        </Items>
      </Container>
      <RadiusEnd></RadiusEnd>
    </>
  );
};

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

const Icon = styled.svg`
  width: 25px;
  height: 25px;
`;
export default Nav;
