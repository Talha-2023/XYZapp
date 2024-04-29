import AppContainer from "../Apps/AppContainer/AppContainer";
import TopContainer from "../TopContainer/TopContainer";

const Home = ({ Data }) => {
  return (
    <>
      <TopContainer />

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
      })}
      {console.log("render")}
    </>
  );
};

export default Home;
