import React from "react";

import Info from "../../components/info/info.component";
import Header from "../../components/header/header.component";
import Slider from "../../components/slider/slider.component";

const Homepage = () => {
  return (
    <React.Fragment>
      <Info />
      <Header />
      <Slider />
    </React.Fragment>
  );
};

export default Homepage;
