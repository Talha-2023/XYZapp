import { Suspense, React, lazy } from "react";

import TopContainer from "../TopContainer/TopContainer";
import HomeLoading from "../LoadingSkeleton/HomeLoading/HomeLoading";
const AppContainer = lazy(() => import("../Apps/AppContainer/AppContainer"));

const Home = ({ Data }) => {
  return (
    <>
      <TopContainer
        text="Web Apps By Talha"
        characters="█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░"
        speed={120}
        revealDuration={4000}
      />
      <Suspense fallback={<HomeLoading />}>
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
