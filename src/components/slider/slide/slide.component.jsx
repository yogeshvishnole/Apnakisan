import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import "./slide.styles.scss";
import data from "../data";

const Slide = (props) => {
  const [landing, setLanding] = useState(data);
  console.log(landing);

  return (
    <React.Fragment>
      {landing.map((el, index) => (
        <div
          className={
            index === props.active ? `slide ${props.anime}` : "non-active"
          }
          key={el.title}
        >
          <div className="product_info">
            <span className="product_title">{el.title}</span>
            <span className="product_description">{el.description}</span>
            <div className="sell_data">
              <div className="btn">BUY NOW</div>
              <div className="product_price_goup">
                <div className="product_price">&#8377;{el.price}</div>
                <span className="delivery">+ delivery fees</span>
              </div>
            </div>
          </div>
          <div className="product_image">
            <img src={`${el.img}`} alt="ims" />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Slide;
