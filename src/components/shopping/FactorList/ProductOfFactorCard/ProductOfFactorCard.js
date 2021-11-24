import React from "react";
import ButtonComponent from "../../../Button/button";
import "./ProductOfFactorCard.css";
const ProductOfFactorCard = (props) => {
  return (
    <div className="productOfFactorCard-container">
      <div className="productOfFactorCard-main">
        <div className="productOfFactorCard-img">
          <img src={props.imgProduct} />
        </div>
        <div className="productOfFactorCard-content">
          <div className="productOfFactorCard-title">
            <h2>{props.product}</h2>
          </div>
          <div className="productOfFactorCard-explain">
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>

      <div className="productOfFactorCard-star">
        <div>
          <p>{props.star}</p>
        </div>
        <img src="/nahoor home page/productOfFactor/Icon Artwork.svg" />
      </div>

      <div className="productOfFactorCard-price">
        <h3>قیمت هر کارتون</h3>
        <h3>
          ARR: <span>612,000</span>
        </h3>
        <h3>
          AEF: <span>416,000</span>
        </h3>
      </div>
      <div>
        <button type="text" className="productOfFactorCard-Button">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductOfFactorCard;

// const cards = [
//     {
//       imgProduct: "./nahoor home page/productOfFactor/mast.svg",
//       starImg: "./nahoor home page/productOfFactor/Icon Artwork.svg",
//       product: "ماست ست پرچرب میهن",
//       paragraph: "",
//       factor: "کارخانه میهن",
//       star: "4.5",
//       Rial: "416,000",
//       afghan: "612,000",
//     },
