import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import "normalize.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BrowserView></BrowserView>
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
