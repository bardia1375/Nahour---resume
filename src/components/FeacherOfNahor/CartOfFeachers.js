import React from "react";
import "./CartOfFeachers.css";
const CartOfFeachers = (props) => {
  return (
    <div className="Cardmain">
      <div className="Cardmain-item">
        <div class="feacherOfbox"></div>
      </div>
      <div className="Cardmain-item">
        <img
          className="feacherOfImg"
          src="nahoor home page/pic3.svg"
          width="100%"
          height="auto"
        />
        <div><h2 className="cardTitle">{props.title}</h2></div>
        <div><p className="cardDescription">{props.Description}</p></div>
      </div>
    </div>
  );
};
export default CartOfFeachers;
