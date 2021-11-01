import React, { useState } from "react";
import CustomizableProductCard from "../../../components/Card/CustomizableProductCard/CustomizableProductCard";
import "./CustomizableProduct.css";
const CustomizableProduct = () => {
  const [cards, setCards] = useState([
    {
      img: "./nahoor home page/sanaye ghazaii.png",
      title: "صنایع غذایی",
      products: ["لبنیات", "ماکارونی", "رب گوجه فرنگی", "سس های گوجه فرنگی"],
    },
    {
      img: "./nahoor home page/sanaye ghazaii.png",
      title: "صنایع غذایی",
      products: ["لبنیات", "ماکارونی", "رب گوجه فرنگی", "سس های گوجه فرنگی"],
    },
    {
      img: "./nahoor home page/sanaye ghazaii.png",
      title: "صنایع غذایی",
      products: ["لبنیات", "ماکارونی", "رب گوجه فرنگی", "سس های گوجه فرنگی"],
    },
    {
      img: "./nahoor home page/sanaye ghazaii.png",
      title: "صنایع غذایی",
      products: ["لبنیات", "ماکارونی", "رب گوجه فرنگی", "سس های گوجه فرنگی"],
    },
  ]);
  return (
    <div  className="Customizable-main">
      <h2>کالاهای قابل سفارش با ماهور</h2>
      <div className="Customizable-card">
        {cards.map((card) => {
          return (
            <CustomizableProductCard
              img={card.img}
              title={card.title}
              products={card.products}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CustomizableProduct;
