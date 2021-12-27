import React, { useState } from "react";
import CustomerSatisfactionCard from "../../../components/Card/CustomerSatisfactionCard/CustomerSatisfactionCard";
import "./CustomerSatisfaction.css";
import Slider from "react-slick";
import Title from "../../../components/home/title/Title";

const CustomerSatisfaction = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌شود.",
      img: "./nahoor home page/man1.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        " .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌شود",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "تاجر عطر",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        " .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌شود",
      img: "./nahoor home page/man3.png",
      name: "الیاس عطایی",
      job: "وارد کننده نفت",
    },
    {
      logo: "./nahoor home page/Icons/quotes.png",
      paragraph:
        " .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌شود",
      img: "./nahoor home page/man2.png",
      name: "رضا سلکی",
      job: "وارد کننده نفت",
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (prev, next) => {
      setcurrentIndex(next);
    },
    appendDots: (dots) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "5%",
          }}
        >
          {dots.map((item, index) => {
            return (
              <div style={{ padding: "0 4px" }} key={index}>
                {item.props.children}
              </div>
            );
          })}
        </div>
      );
    },
    customPaging: (index) => {
      return (
        <div
          style={
            index === currentIndex
              ? {
                  width: "30px",
                  height: "10px",
                  background: "#6B006D",
                  borderRadius: "50px",
                }
              : {
                  width: "10px",
                  height: "10px",
                  background: "#C4C4C4",
                  borderRadius: "50px",
                }
          }
        >
          {}
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          // centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerMode: true,

          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,

          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="Customer-main">
      {/* <h2>رضایت مشتریان ما</h2> */}
      <div>
        <Title title="رضایت مشتریان ما" />
      </div>
      <Slider className="Customer-slider" {...settings}>
        {cards.map((card) => {
          return (
            <CustomerSatisfactionCard
              logo={card.logo}
              paragraph={card.paragraph}
              img={card.img}
              name={card.name}
              job={card.job}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default CustomerSatisfaction;
