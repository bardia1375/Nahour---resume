import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./order.css";
const Order = () => {
  const [state, setState] = useState(true);
  const products = [{ img: "" }];
  const times = [
    {
      time: "16:00",
      calender: "2021/09/21",
    },
  ];

  const previousOrder = () => {
    setState(false);
  };
  const ActiveOrder = () => {
    setState(true);
  };
  return (
    <>
      <header className="ProfileOrder-header">
        <p onClick={() => ActiveOrder()} className="ProfileOrder-actives">
          سفارش های فعال
        </p>

        <p onClick={() => previousOrder()}>سفارش های قبلی</p>
      </header>
      {state ? (
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
      ) : (
        <section className="ProfileOrder-content">
          <div className="ProfileOrder-top">
            <div className="ProfileOrder-codeOrder">
              <p>کد سفارش</p>
              <p>25657890</p>
            </div>
            <div className="ProfileOrder-receive">
              <p>تحویل شده</p>
              <img src="/nahoor home page/profile/check.svg" />
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
      )}
    </>
  );
};

export default Order;
