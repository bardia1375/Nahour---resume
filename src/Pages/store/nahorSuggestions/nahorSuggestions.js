import React from "react";
import NahorSuggestionsCard from "../../../components/Store/NahorSuggestionsCard/NahorSuggestionsCard";
import "./nahorSuggestions.css";
function NahorSuggestions() {
  return (
    <div className="NahorSuggestions-container">
      <div className="NahorSuggestions-main" style={{ padding: "0 16vw" }}>
        <div className="NahorSuggestions-right">
          <div className="NahorSuggestions-title">
            <h2 >پیشنهادات</h2>
            <h2 style={{ marginTop:"16px"}}>ناهور</h2>
          </div>
          <div style={{ width: "16%"}}>
            <img src="./nahoor home page/store page/image 2.png"  width="100%"/>
          </div>
          <div className="NahorSuggestions-paragraph">
            <p>مشاهده همه</p>
          </div>
        </div>
        <div className="NahorSuggestions-left">
          <NahorSuggestionsCard />
        </div>
      </div>
    </div>
  );
}

export default NahorSuggestions;
