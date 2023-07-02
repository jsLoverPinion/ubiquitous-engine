/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import styled from "styled-components";
import { useEffect, useState } from "react";
import { icons } from "./data/icon";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [btActive, setBtActive] = useState(0);

  const iconclick = (icon, e, key) => {
    console.log(`icon.name 값 = ${icon.name}`);
    console.log(`키값 = ${key}`);
    navigate(`${icon.name}`);

    setBtActive(key);

    switch (icon.name) {
      //
      case "pick":
        break;

      case "gallery":
        break;

      case "ranking":
        break;

      case "profile":
        break;

      case "home":
        break;

      case "chat":
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Container>
        <Items>
          {icons.map((icon, idx) => (
            <NavItem
              key={idx}
              onTouchStart={(e) => {
                iconclick(icon, e, idx);
              }}
            >
              {icon.src(btActive === idx ? "#1294bd" : "#b1b1b1b1")}
              <IconText txcolor={btActive === idx ? "#1294bd" : "#b1b1b1b1"}>
                {icon.name}
              </IconText>
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
  color: ${(props) => props.txcolor};
`;
export default Nav;
