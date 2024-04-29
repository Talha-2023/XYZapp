import "./App.css";
import { Suspense, React, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test.jsx";
import BackGround from "./Components/BackGround/BackGround";
import Navbar from "./Components/Navbar/Navbar";
import Data from "./Data/Data.jsx";
import { Page2 } from "./Components/Page2/Page2.jsx";
// import Home from "./Components/Home/Home.jsx";

// const Page2 = lazy(() => import("./Components/Page2/Page2.jsx"));
const Home = lazy(() => import("./Components/Home/Home.jsx"));

function App() {
  return (
    <>
      <BackGround />
      <Navbar />

      <Router>
        <main className="MAIN">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Test></Test>}>
                  <Home Data={Data}></Home>
                </Suspense>
              }
            ></Route>
            <Route
              path="/page2/:cardName"
              element={<Page2 Data={Data} />}
            ></Route>

            <Route path="*" element={<div>404 Error</div>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
