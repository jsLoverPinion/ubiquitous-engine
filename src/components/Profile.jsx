import { useState } from "react";
import { useStore } from "../store";
import { styled } from "styled-components";
import apple from "../img/apple.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";
import google from "../img/google.png";

const logoImgs = [
  { name: "google", src: google },
  { name: "facebook", src: facebook },
  { name: "github", src: github },
  { name: "apple", src: apple },
];

const Profile = () => {
  const { loginde } = useStore();
  if (loginde) {
  } else {
    return (
      <>
        <Conteiner>
          <Title>Login</Title>
          <IdInput placeholder="  Emaile"></IdInput>
          <PwInput placeholder="  Password"></PwInput>
          <LoginButton>Login</LoginButton>
          {logoImgs.map((obj, idx) => (
            <ProviderButton key={idx}>
              <LogoImg src={obj.src} />
              <Logintxt>Login With {obj.name} </Logintxt>
            </ProviderButton>
          ))}
        </Conteiner>
      </>
    );
  }
};

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 2;
  flex-flow: column;
  align-items: center;
`;

const Title = styled.h1``;

const IdInput = styled.input`
  width: 80%;
  height: 6%;
  border-radius: 10px;
  border: solid 1px #b1b1b1b1;
  margin: 15px;
`;

const PwInput = styled.input`
  width: 80%;
  height: 6%;
  border-radius: 10px;
  border: solid 1px #b1b1b1b1;
`;

const LoginButton = styled.button`
  width: 80vw;
  height: 6%;
  margin: 25px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const ProviderButton = styled.button`
  width: 80vw;
  height: 6%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  justify-content: space-around;
`;

const LogoImg = styled.img`
  width: 25px;
  height: 25px;
`;

const Logintxt = styled.p`
  justify-self: center;
`;

export default Profile;
