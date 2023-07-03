import { useState } from "react";
import { useStore } from "../store";
import { styled } from "styled-components";
import apple from "../img/apple.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";
import google from "../img/google.png";
import Login from "./Login";

const Profile = () => {
  const { loginde, setLoginde } = useStore();

  if (loginde) {
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
};

export default Profile;
