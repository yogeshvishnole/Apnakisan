import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./info.styles.scss";

const Info = () => {
  return (
    <div className="info">
      <div className="contact-info">
        <div className="info_group info_group-phone">
          <FontAwesomeIcon
            icon={faPhone}
            color="#D7D9DC"
            className="icon-size"
          />
          <span>7000769736</span>
        </div>

        <div className="info_group info_group-mail">
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#D7D9DC"
            className="icon-size"
          />
          <span>info@apnakisan.in</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
