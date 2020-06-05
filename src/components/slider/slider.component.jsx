import React, { useState } from "react";

import Slide from "./slide/slide.component";
import LeftArrow from "./leftArrow/leftArrow.compoent";
import RightArrow from "./rightArrow/rightArrow.component";
import data from "./data";

import "./slider.styles.scss";

const Slider = () => {
  const [active, setActive] = useState(0);
  const [dataLength, setLength] = useState(data.length);
  const [anime, setAnime] = useState("left-animation");

  const goToPrevSlide = () => {
    let index = active;
    let length = dataLength;

    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    setAnime("right-animation");

    setActive(index);
  };

  const goToNextSlide = () => {
    let index = active;
    let length = dataLength;

    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    setAnime("left-animation");
    setActive(index);
  };

  return (
    <div className="slider">
      <div className="slider-items">
        <LeftArrow goToPrevSlide={() => goToPrevSlide()} />
        <Slide active={active} anime={anime} />
        <RightArrow goToNextSlide={() => goToNextSlide()} />
      </div>
    </div>
  );
};

export default Slider;
