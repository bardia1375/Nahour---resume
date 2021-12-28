import React from "react";
import ProductOfFactorCard from "../../../components/shopping/FactorList/ProductOfFactorCard/ProductOfFactorCard";
import "./support.css";
const Support = (props) => {
  const Title = ["پشتیبانی"];
  const cards = [
    {
      title: "مشکل در سفارش",
      explain: "لغو، تغییر آدرس، نارضایتی",
    },
    {
      title: "مشکل در پرداخت",
      explain: "پرداخت ناموفق، عدم بازگشت وجه",
    },
  ];

  return (
    <div className="support-container">
      <div className="support-img">
        <div>
          <h2>{Title}</h2>
        </div>
        <div>
          <img src="/nahoor home page/profile/call-center/bro.svg" />
        </div>
      </div>
      {cards.map((card) => {
        return (
          <div className="support-main">
            <div className="support-items">
              <div>
                <h3>{card.title}</h3>
              </div>
              <div>
                <p>{card.explain}</p>
              </div>
            </div>
            <span
              class="material-icons"
              style={{ transform: "rotate(180deg)" }}
            >
              chevron_right
            </span>
          </div>
        );
      })}
      <div className="support-call">
        <h2>می‌خواهید با شما تماس بگیریم؟</h2>
        <input type="number" placeholder="شماره تلفن همراه *" />
        <input type="email" placeholder="ایمیل" />
      </div>
      <div className="support-direct-contact">
        <h2>تماس مستقیم با پشتیبانی</h2>
        <div>
          <div className="support-direct-contact-items">
            <div>
              <h3>تماس با پشتیبانی</h3>
            </div>
            <span
              class="material-icons"
              style={{ transform: "rotate(180deg)" }}
            >
              chevron_right
            </span>
          </div>
        </div>
        <div>
          <div className="support-direct-contact-items">
            <div>
              <h3>چت با پشتیبانی</h3>
            </div>
            <span
              class="material-icons"
              style={{ transform: "rotate(180deg)" }}
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
