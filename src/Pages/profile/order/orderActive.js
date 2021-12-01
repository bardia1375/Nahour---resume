import React from "react";
import { Link } from "react-router-dom";
import "./orderActive.css";
const OrderActive = () => {
  const products = [{ img: "" }];
  const times = [
    {
      time: "16:00",
      calender: "2021/09/21",
    },
  ];
  return (
    <div className="ProfileOrder-container">
        {/* <header className="ProfileOrder-header">
        <Link
          to="Active"
          style={{ color: "#000", textDecoration: "none" }}
        >
          <p>سفارش های فعال</p>
        </Link>
        <Link
          to="Previous"
          style={{ color: "#000", textDecoration: "none" }}
        >
          <p>سفارش های قبلی</p>
        </Link>
      </header> */}
      <section className="ProfileOrder-content">
        <div className="ProfileOrder-top">
          <div className="ProfileOrder-codeOrder">
            <p>کد سفارش</p>
            <p>25657890</p>
          </div>
          <div className="ProfileOrder-wait">
            <p>در انتظار تحویل</p>
            <img src="/nahoor home page/profile/انتظار تحویل.svg" />
          </div>
        </div>
        <div className="ProfileOrder-mid">
          <div className="ProfileOrder-products">
            {products.map((product) => {
              return (
                <div>
                  <img src={product.img} />
                  عکس از ریداکس استور مرکزی
                </div>
              );
            })}
          </div>

          <div>
            {times.map((time) => {
              return (
                <div className="ProfileOrder-times">
                  <div className="ProfileOrder-calender">
                    <img src="/nahoor home page/profile/calender.svg" />
                    <p>{time.calender}</p>
                  </div>
                  <div className="ProfileOrder-time">
                    <img src="/nahoor home page/profile/clock.svg" />
                    <p>{time.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ProfileOrder-bottom">
          <button className="ProfileOrder-buttonOrder">سفارش مجدد</button>
          <button className="ProfileOrder-buttonFactor">مشاهده فاکتور</button>
        </div>
      </section>
    </div>
  );
};

export default OrderActive;
