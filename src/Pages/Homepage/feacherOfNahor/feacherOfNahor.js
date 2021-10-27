import React from "react";
import CartOfFeachers from "../../../components/FeacherOfNahor/CartOfFeachers";
import "./feacherOfNahor.css";
function FeacherOfNahor() {
  const Carts = [
    {
      id: "1",
      title: "کالای نامحدود",
      Description: "نبود محدودیت در نوع کالای مورد سفارش",
    },
    {
      id: "2",
      title: "ارتباط انتخابی",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
    },
    {
      id: "3",
      title: "امکان رزرو و سفارش",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
    },
    {
      id: "4",
      title: "ارسال سریع",
      Description: "قابلیت ارتباط انتخابی با کارخانه‌ی مورد نظر",
    },
  ];

  return (
    <div className="feacherOfNahor">
      <div className="text">ویژگی‌های ناهور</div>
      <div className="feacherOfCart">
        {Carts.map((Cart) => {
          return (
   
            <CartOfFeachers
              key={Cart.id}
              title={Cart.title}
              Description={Cart.Description}
            />

          );
        })}
      </div>
    </div>
  );
}

export default FeacherOfNahor;
