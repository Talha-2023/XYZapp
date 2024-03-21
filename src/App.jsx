import "./App.css";
import BackGround from "./Components/BackGround/BackGround";
import AppContainer from "./Components/Common/AppContainer/AppContainer";
import DeviderLine from "./Components/DeviderLine/DeviderLine";
import TopLogo from "./Components/Header/TopLogo";
import TopContainer from "./Components/TopContainer/TopContainer";

function App() {
  return (
    <>
      <BackGround></BackGround>

      <TopLogo />

      <div className="MAIN">
        <TopContainer />
        <DeviderLine />
        <AppContainer />
      </div>
    </>
  );
}

export default App;
