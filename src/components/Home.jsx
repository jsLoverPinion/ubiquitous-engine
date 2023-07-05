import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "../fbase";
import { styled } from "styled-components";

const Home = () => {
  const uploadTest = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return <Container></Container>;
};

const Container = styled.div`
  display: flex;
`;

export default Home;
