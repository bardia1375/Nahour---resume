import React from "react";
import "./button.css";
function ButtonComponent(props) {
  return (
    <div>
      <button type="submit" className="ButtonComponent"  >
        <span className="ButtonComponent-title" >{props.title}</span>
        <span class="material-icons" style={{ transform: "rotate(180deg)" }}>
          chevron_right
        </span>
      </button>
    </div>
  );
}

export default ButtonComponent;
