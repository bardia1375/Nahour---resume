import React from "react";
import CartOfFeachers from "../../../components/FeacherOfNahor/CartOfFeachers";
import Title from "../../../components/home/title/Title";
import "./feacherOfNahor.css";
function FeacherOfNahor() {
  const Carts = [
    {
      id: "1",
      title: "کالای نامحدود",
      Description: "نبود محدودیت در نوع کالای مورد سفارش",
      img:"nahoor home page/pic2.svg"
    },
    {
      id: "2",
      title: "ارتباط انتخابی",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
      img:"nahoor home page/pic1.svg"

    },
    {
      id: "3",
      title: "امکان رزرو ",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
      img:"nahoor home page/pic3.svg"

    },
    {
      id: "4",
      title: "ارسال سریع",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
      img:"nahoor home page/pic4.svg"

    },
  ];

  return (
    <div className="feacherOfNahor">
      {/* <div className="text">ویژگی‌های ناهور</div> */}
      <div>
        <Title title="ویژگی‌های ناهور" />
      </div>
      <div className="feacherOfCart">
        {Carts.map((Cart) => {
          return (
            <CartOfFeachers
              key={Cart.id}
              title={Cart.title}
              Description={Cart.Description}
              img={Cart.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeacherOfNahor;
