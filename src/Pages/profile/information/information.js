import React from "react";
import "./information.css";
const Information = () => {
  const informations = [
    {
      name: "پریا باب الحوایجی",
      phone: "09116102556",
      meli: "003768912092",
      email: "paryaboblhavaeji@gamil.com",
      iban: "0000111122223333",
      cartNumber: "6362-1410-0555-****",
    },
  ];
  return (
    <div className="infoProfile-container">
      <div>
        <div className="infoProfile-top">
          <h1>اطلاعات حساب کاربری</h1>
          <img src="/nahoor home page/profile/profile photo.svg" />
        </div>
      </div>
      {informations.map((information) => {
        return (
          <div className="infoProfile-items">
            <div className="infoProfile-item">
              <p>نام و نام خانوادگی:</p>
              <p>{information.name}</p>
            </div>

            <div className="infoProfile-item">
              <p>شماره تلفن همراه:</p>
              <p>{information.phone}</p>
            </div>

            <div className="infoProfile-item">
              <p>کد ملی:</p>
              <p>{information.meli}</p>
            </div>

            <div className="infoProfile-item">
              <p>ایمیل:</p>
              <p>{information.email}</p>
            </div>

            <div className="infoProfile-item">
              <p>شماره شبا:</p>
              <p>{information.iban}</p>
            </div>

            <div className="infoProfile-item">
              <p>شماره کارت:</p>
              <p>{information.cartNumber}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Information;
