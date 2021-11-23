import React, { useState } from "react";
import "./BestfactorCard.css";
const BestfactorCard = (props) => {
  return (
    <div className="Card">
      <div className="upper-container">
        <img
          src={props.largPic}
          height="100%"
          width="100%"
          style={{
            objectFit: "cover",
            borderTopLeftRadius: "7px",
            borderTopRightRadius: "7px",
          }}
          alt={props.factor}
        />
        <div className="image-container">
          <img src={props.shortPic} alt="" height="50px" width="75px" />
        </div>
      </div>
      <div className="lover-container">
        <div className="lover-container2">{props.product}</div>
        <div className="lover-container1">{props.factor}</div>
      </div>
      
    </div>
  );
};
export default BestfactorCard;
