import "./App.css";
import BackGround from "./Components/BackGround/BackGround";
import AppContainer from "./Components/Apps/AppContainer/AppContainer";
import DeviderLine from "./Components/DeviderLine/DeviderLine";
import Navbar from "./Components/Navbar/Navbar";
import TopContainer from "./Components/TopContainer/TopContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BackGround></BackGround>

      <Navbar />

      <div className="MAIN">
        <TopContainer />
        <DeviderLine />
        <AppContainer />
        <DeviderLine />
        <AppContainer />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default App;
