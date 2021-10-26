import { green, red } from "@mui/material/colors";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,backgroundColor:"red", display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class BestFactor extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      rtl:true,
      arrows:true
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3 style={{background: "blue" , height: "100px" , marginRight:"32px"}} >1</h3>
          </div>
          <div>
            <h3 style={{background: "red" , height: "100px"}}>2</h3>
          </div>
          <div>
            <h3 style={{background: "blue" , height: "100px"}}>3</h3>
          </div>
          <div>
            <h3 style={{background: "red" , height: "100px"}}>4</h3>
          </div>
          <div>
            <h3 style={{background: "green" , height: "100px",marginRight:"32px"}}>5</h3>
          </div>
        </Slider>
      </div>
    );
  }
}