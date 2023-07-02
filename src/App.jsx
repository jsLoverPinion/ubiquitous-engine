import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import "normalize.css";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <BrowserView>
          <Header />
          <Routes>
            <Route />
            <Route />
          </Routes>
          <Nav />
        </BrowserView> */}
        <MobileView>
          <Header />
          <Routes>
            <Route path="/pick" />
            <Route path="/chat" />
            <Route path="/gallery" />
            <Route path="/profile" element={<Profile />} />
            <Route />
          </Routes>
          <Nav />
        </MobileView>
      </BrowserRouter>
    </>
  );
}

export default App;
