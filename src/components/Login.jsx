import { styled } from "styled-components";
import apple from "../img/apple.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";
import google from "../img/google.png";
import guest from "../img/guest.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../fbase";
import { useState } from "react";
import { useStore } from "../store";

const Login = () => {
  //
  const provider = new GoogleAuthProvider();
  const { loginde, setLoginde, userData, setUserData } = useStore();

  const logoImgs = [
    { name: "google", src: google },
    { name: "facebook", src: facebook },
    { name: "github", src: github },
    { name: "apple", src: apple },
    { name: "guest", src: guest },
  ];

  function clickProvider(obj, idx, e) {
    switch (obj.name) {
      case "google":
        console.log("구글로그인됨");
        signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
          .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data); // console에 UserCredentialImpl 출력
            setLoginde(true);
          })
          .catch((err) => {
            console.log(err);
          });

        break;

      case "facebook":
        console.log("페북로그인됨");

        break;

      case "github":
        console.log("깃헙로그인됨");

        break;

      case "apple":
        console.log("애플로그인됨");

        break;

      case "guest":
        console.log("익명로그인");

        break;

      default:
        break;
    }
  }

  return (
    <>
      <Conteiner>
        <Title>Login</Title>
        <IdInput placeholder="  Emaile"></IdInput>
        <PwInput placeholder="  Password"></PwInput>
        <a style={{ fontSize: "12px" }} href="/Join">
          you don't have acout?
        </a>
        <LoginButton>Login</LoginButton>
        {logoImgs.map((obj, idx) => (
          <ProviderButton
            key={idx}
            onClick={(e) => {
              clickProvider(obj, idx, e);
            }}
          >
            <LogoImg src={obj.src} />
            <Logintxt>Continue with {obj.name} </Logintxt>
          </ProviderButton>
        ))}
      </Conteiner>
    </>
  );
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
  margin: 10px;
`;

const PwInput = styled.input`
  width: 80%;
  height: 6%;
  border-radius: 10px;
  border: solid 1px #b1b1b1b1;
  margin: 5px;
`;

const LoginButton = styled.button`
  width: 80vw;
  height: 6%;
  margin: 10px;
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

export default Login;
