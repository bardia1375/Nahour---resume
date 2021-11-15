import React from "react";

function NahorSuggestionsCard() {
  const cards = [
    {
      img: "",
      h3: "",
      icon: "",
      sail: "25%",
      priceAfterSailRial: "450,000تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000تومان",
      priceBeforeSailAfghan: "400,000تومان",
    },
  ];
  return (
    <>
      {cards.map((card) => {
        return <div></div>;
      })}
    </>
  );
}

export default NahorSuggestionsCard;
