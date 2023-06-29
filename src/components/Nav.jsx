import styled from "styled-components";
import { ReactComponent as pick } from "../svg/pick.svg";
import { ReactComponent as upload } from "../svg/upload.svg";
import { ReactComponent as trophy } from "../svg/trophy.svg";
import { ReactComponent as user } from "../svg/user.svg";
import { icons } from "./data/icon";
const Nav = () => {
  const iconArray = [
    { name: "pick", Src: upload },
    { name: "gallery", Src: pick },
    { name: "ranking", Src: trophy },
    { name: "profile", Src: user },
  ];

  return (
    <>
      <Container>
        <Items>
          {iconArray.map(({ name, Src, key }) => (
            <NavItem key={key}>
              <Src fill="#b1b1b1b1" />
              <IconText>{name}</IconText>
            </NavItem>
          ))}
        </Items>
      </Container>
    </>
  );
};

const Container = styled.nav`
  width: 100vw;
  height: 55px;
  background-color: #ffffff;
  margin: 0%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  flex-flow: column;
  z-index: 1;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 20%);
`;

const NavItem = styled.a`
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
const IconText = styled.a`
  font-size: 12;
  margin: 4px;
  margin-bottom: 0;
  z-index: 4;
  color: #b1b1b1b1;
`;

export default Nav;
