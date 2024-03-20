import "./App.css";
import BackGround from "./Components/BackGround/BackGround";
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
      </div>
    </>
  );
}

export default App;
