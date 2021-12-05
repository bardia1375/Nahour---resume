import React, { useEffect, useState } from "react";
import ButtonComponent from "../../../Button/button";
import { cartReducer } from "../../../redux/reducer";
import { cartStore } from "../../../redux/store";
import { addToCart } from "../../../redux/actions";
import "./ProductOfFactorCard.css";
import { Link } from "react-router-dom";
const ProductOfFactorCard = (props) => {

  const [cards, setcards] = useState(true);
  const changeButton = (e) => {
    setcards(!cards);
  };

  //redux

  const addToCartHandler = () => {
    cartStore.dispatch(addToCart(props));
    console.log(cartStore.getState());
  };

  useEffect(() => {
    let unsubscribe = cartStore.subscribe(() => {
      console.log(cartStore.getState());
    });

    return unsubscribe();
  }, []);
  //end redux

  return (
    <div className="productOfFactorCard-container">
      <Link
        to={`${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
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
      </Link>
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

      <div onClick={(e) => addToCartHandler(e)}>
        {cards ? (
          <button
            onClick={(e) => changeButton(e)}
            type="text"
            className="productOfFactorCard-Button"
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <div className="productOfFactorCard-count">
            {" "}
            با موفقیت به سبد خرید اضافه شد
          </div>
        )}
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
