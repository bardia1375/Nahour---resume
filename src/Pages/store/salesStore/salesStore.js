import React from "react";
import "./salesStore.css";
const SalesStore = () => {
  const cards = [
    { img: "/nahoor home page/store page/rice.png" },
    { img: "/nahoor home page/store page/poshak.png" },
  ];
  return (
    <div className="SalesStore-container">
      <div style={{ width: "100%" }}>
        <img src="/nahoor home page/store page/rice.png"  width="100%" />
      </div>
      <div style={{ width: "100%" }}>
        <img src="/nahoor home page/store page/poshak.png" width="100%" />
      </div>
    </div>
  );
};

export default SalesStore;

// import React from "react";
// import "./salesStore.css";
// const SalesStore = () => {
//   const cards = [
//     { img: "/nahoor home page/store page/rice.png" },
//     { img: "/nahoor home page/store page/poshak.png" },
//   ];
//   return (
//     <div className="SalesStore-container">
//       {cards.map((card) => {
//         return (
//           <div style={{ width: "100%" }}>
//             <img src={card.img} width="100%" />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SalesStore;
