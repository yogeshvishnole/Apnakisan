import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../arrow.styles.scss";

const RightArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon icon={faChevronRight} color="#707070" />
    </div>
  );
};

export default RightArrow;
