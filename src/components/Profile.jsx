import { useState } from "react";
import { useStore } from "../store";
import { styled } from "styled-components";
import apple from "../img/apple.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";
import google from "../img/google.png";
import Login from "./Login";

const Profile = () => {
  const { loginde, setLoginde, userData } = useStore();

  function logout(params) {
    setLoginde(false);
  }

  if (loginde) {
    return (
      <>
        <Container>
          <UserNmae>{userData.displayName}</UserNmae>
          <button
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </button>
          <UserInfo>
            <ProfileImg src={userData.photoURL} />
          </UserInfo>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #b1b1b1b1;
`;

const UserNmae = styled.p`
  width: 100%;
  padding-top: 5px;
  display: flex;
  margin: 0px;
  justify-content: center;
`;

const UserInfo = styled.div``;

const ProfileImg = styled.img`
  border-radius: 50%;
  margin: 10px;
`;

export default Profile;
