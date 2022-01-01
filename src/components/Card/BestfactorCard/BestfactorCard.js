import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BestfactorCard.css";
const BestfactorCard = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <Link to={`store/listFactor/product/${props.id}`} style={{ textDecoration: "none", color: "black" }}>
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
            <img src={props.shortPic} alt="" height="40px" width="65px" />
          </div>
        </div>
        <div className="lover-container">
          <div className="lover-container2">{props.product}</div>
          <div className="lover-container1">{props.factor}</div>
        </div>{" "}
      </Link>
    </div>
  );
};
export default BestfactorCard;
