import "./App.css";
import { Suspense, React, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Data from "./Data/Data.jsx";

import Loading from "./Components/Loading/Loading.jsx";
import TopText from "./Components/TopContainer/TopText.jsx";
const FooterComp = lazy(() =>
  import("./Components/Footer_NavBar/FooterComp.jsx")
);
const BackGround = lazy(() => import("./Components/BackGround/BackGround"));
const Navbar = lazy(() => import("./Components/Footer_NavBar/Navbar.jsx"));
const Page2 = lazy(() => import("./Components/Page2/Page2.jsx"));
const Home = lazy(() => import("./Components/Home/Home.jsx"));
// import Page2 from "./Components/Page2/Page2.jsx";
function App() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <BackGround />
        <Navbar />
        <Router>
          <main className="MAIN">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading></Loading>}>
                    <Home Data={Data}></Home>
                  </Suspense>
                }
              ></Route>

              <Route
                path="/page2/:cardName"
                element={
                  <Suspense fallback={<Loading></Loading>}>
                    <Page2 Data={Data} />
                  </Suspense>
                }
              ></Route>

              <Route path="*" element={<div>404 Error</div>} />
            </Routes>
            <FooterComp />
          </main>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
