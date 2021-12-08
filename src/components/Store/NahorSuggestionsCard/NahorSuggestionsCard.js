import React from "react";
import { Link } from "react-router-dom";
import "./NahorSuggestionsCard.css";
function NahorSuggestionsCard(props) {
  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <div className="NahorSuggestionsCard-container">
        <div style={{ width: "80%" }} className="NahorSuggestionsCard-Img">
          <img src={props.img} width="100%" height="140px" />
        </div>
        <div className="NahorSuggestionsCard-Title">
          <h3>{props.title}</h3>
        </div>
        <div className="NahorSuggestionsCard-mid">
          <div>
            <p className="NahorSuggestionsCard-Duration">موجود در انبار</p>
          </div>
          <div className="NahorSuggestionsCard-Logo">
            <img src={props.icon} width="100%" />
          </div>
        </div>

        <div className="NahorSuggestionsCard-bottom">
          <div className="NahorSuggestionsCard-TitleBottom">
            <p className="NahorSuggestionsCard-sail">{props.sail}</p>
            <div>
              <p>قیمت هر کارتون</p>
            </div>
          </div>

          <div className="NahorSuggestionsCard-price">
            <div className="NahorSuggestionsCard-Rial">
              <del>
                <p>{props.priceBeforeSailRial}</p>
              </del>
              <div>
                <p style={{ color: "#6B006D" }}>{props.priceAfterSailRial}</p>
              </div>
            </div>
            <div className="NahorSuggestionsCard-Afghan">
              <del>
                <p>{props.priceBeforeSailAfghan}</p>
              </del>
              <div style={{ color: "#6B006D" }}>
                <p>{props.priceAfterSailAfghan}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NahorSuggestionsCard;
