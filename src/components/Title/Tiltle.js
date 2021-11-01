import React from "react";

function Tiltle(props) {
  return (
    <div>
      <h2 className="Title" style={{ fontSize: "1.5rem" }}>
        {props.title}
      </h2>
      <p style={{ fontSize: "1rem" }}>{props.paragraph}</p>
    </div>
  );
}

export default Tiltle;
