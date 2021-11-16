import React from "react";
import "./CustomerSatisfactionCard.css";

const CustomerSatisfactionCard = (props) => {
  return (
    <div className="Satisfaction-container">
      <img src={props.logo} style={{marginTop: "20px"}} width="40px" height="36px" />
      <p>{props.paragraph}</p>
      <img src={props.img} width="80px" height="80px" />
      <h3 className="Satisfaction-name">{props.name}</h3>
      <h3 className="Satisfaction-titleJob">{props.job}</h3>
    </div>
  );
};
export default CustomerSatisfactionCard;
