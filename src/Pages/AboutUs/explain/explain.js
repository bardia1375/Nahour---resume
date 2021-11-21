import React from "react";
import "./explain.css";
const Explain = () => {
  const explains = [
    { number: "+2500", subject: "تنوع در محصولات درخواستی" },
    { number: "+150", subject: "فعالیت بیش از 800 تاجر" },
    { number: "+800", subject: "همکاری با بیش از 150 کارخانه با ناهور" },
  ];
  return (
    <div className="explain-container">
      {explains.map((explain) => {
        return (
          
            <div className="explain-properties">
              <h2>{explain.number}</h2>
              <h3>{explain.subject}</h3>
            </div>
          
        );
      })}
    </div>
  );
};

export default Explain;
