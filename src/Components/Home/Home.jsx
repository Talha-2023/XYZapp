import { Suspense, React, lazy } from "react";

import TopContainer from "../TopContainer/TopContainer";
const AppContainer = lazy(() => import("../Apps/AppContainer/AppContainer"));

const Home = ({ Data }) => {
  return (
    <>
      <TopContainer />
      <Suspense fallback={<h1>Loading</h1>}>
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
      </Suspense>
    </>
  );
};

export default Home;
