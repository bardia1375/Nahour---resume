import React from "react";
import { Link } from "react-router-dom";
import "./FactorListCard.css";
const FactorListCard = (props) => {

  // console.log(props.id)
  return (
    <Link  to={`product/${props.id}`} style={{textDecoration:"none" , color: "black"}}>
    <div className="FactorListCard">
      <div className="FactorListupperContainer">
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
        <div className="FactorListImage-container">
          <img src={props.shortPic} alt="" height="40px" width="65px" />
        </div>
      </div>
      <div className="FactorListLover-container">
        <div>
          <div className="FactorListLover-container1 ">{props.factor}</div>
          <div className="FactorListLover-container2 ">{props.product}</div>
        </div>
        <div className="FactorListLoverLeft">
          <div><p className="FactorListLoverLeft1">(126)</p></div>
          <div><p className="FactorListLoverLeft2"><img src="/nahoor home page/productOfFactor/Icon Artwork-white.svg" style={{display:"flex"}} /> 4.5</p></div>
        </div>
      </div>
    </div></Link>
  );
};

export default FactorListCard;
