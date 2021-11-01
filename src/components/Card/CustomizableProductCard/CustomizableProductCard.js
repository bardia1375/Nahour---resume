import React from "react";
import "./CustomizableProductCard.css";
const CustomizableProductCard = (props) => {
  return (
    <div className="Customizable-container">
      <img
        className="Customizable-img"
        src={props.img}
        width="220px"
        height="152"
        alt=""
      />
      <h3 className="Customizable-title">{props.title}</h3>
      {props.products.map((propduct) => {
        return (
          <div className="Customizable-products">
            <h4 className="Customizable-h4">{props.products[0]}</h4>
          </div>
        );
      })}
      {/* <div className="Customizable-products">
        <h4 className="Customizable-h4">لبنیات</h4>
      </div>
      <div className="Customizable-products">
        <h4 className="Customizable-h4">ماکارونی</h4>
      </div>
      <div className="Customizable-products">
        <h4 className="Customizable-h4">رب گوجه فرنگی</h4>
      </div>
      <div className="Customizable-products">
        <h4 className="Customizable-h4">سس های گوجه فرنگی</h4>
      </div> */}

      <button className="Customizable-button">
        مشاهده همه
        <span class="material-icons" style={{ transform: "rotate(180deg)" }}>
          chevron_right
        </span>
      </button>
    </div>
  );
};
export default CustomizableProductCard;
