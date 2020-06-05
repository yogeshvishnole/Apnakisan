import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "../arrow.styles.scss";

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} color="#707070" />
    </div>
  );
};

export default LeftArrow;
