import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import "normalize.css";
import Header from "./components/Header";
// import Imgs from "./components/imgs";

function App() {
  return (
    <div className="App">
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
            <Route />
            <Route />
          </Routes>
          <Nav />
        </MobileView>
      </BrowserRouter>
    </div>
  );
}

export default App;
