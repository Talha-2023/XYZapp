import "./App.css";
import BackGround from "./Components/BackGround/BackGround";
import AppContainer from "./Components/Apps/AppContainer/AppContainer";
import DeviderLine from "./Components/DeviderLine/DeviderLine";
import Navbar from "./Components/Navbar/Navbar";
import TopContainer from "./Components/TopContainer/TopContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import Data from "./Data/Data.jsx";
import BMICalculator from "./Components/AppsDisplay/BodyAndFitness/BMICalculator.jsx";
import { Page2 } from "./Components/Page2/Page2.jsx";

function App() {
  // const Data = [
  //   {
  //     heading: "Body and Fitness:",
  //     discription:
  //       " Easily monitor your health with our web apps! Use the BMI Calculator to check your weight status, estimate calorie burn with the Caloric Burn Calculator, find nutritional content with the Nutritional Value Calculator, assess body fat percentage with the Body Fat Percentage Calculator, and track water intake with the Water Intake Checker. Stay informed and make healthier choices effortlessly!",
  //     apps: [
  //       {
  //         icon: <SlSpeedometer />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <AiOutlineFire />,
  //         app_name: "Caloric Burn Calculator ",
  //       },
  //       {
  //         icon: <IoFastFoodOutline />,
  //         app_name: "Nutritional Value Calculator  ",
  //       },
  //       {
  //         icon: <FaPerson />,
  //         app_name: "Body Fat Percentage   ",
  //       },
  //       {
  //         icon: <CiGlass />,
  //         app_name: "Check your water intake",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <BackGround />
      <Navbar />

      <main className="MAIN">
        {/* <TopContainer />
        <DeviderLine />
        
        {Data.map((Data, index) => {
          return (
            <AppContainer
              id={index}
              key={index}
              heading={Data.heading}
              discription={Data.discription}
              apps={Data.apps}
              audio={Data.audio}
            />
          );
        })} */}
        <Page2 Data={Data} />
        {/* <Sidebar Data={Data} />
        <BMICalculator /> */}
      </main>
    </>
  );
}

export default App;
