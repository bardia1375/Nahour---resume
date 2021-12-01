import React from "react";
import "./product.css";
const Product = () => {
  const informations = [
    {
      title: "ماست ست پرچرب میهن",
      subTtile1: "مشخصات محصول",
      subTtile2: "تعداد موجود در هر کارتون",
      subTtile3: "اطلاعات تغذیه در هر سهم",
      count: "24 عدد",
      Weight: "1500گرم",
      fat: "30%",
      carbohydrate: "5%",
      suger: "2%",
    },
  ];
  return (
    <div className="products-Container">
      <div className="products-main">
        {informations.map((information) => {
          return (
            <div className="products-top">
              <div className="products-right">
                <div className="products-right-topImg">
                  <img src="/nahoor home page/ماست.svg" width="100%" />
                </div>
                <div className="products-right-bottomImg">
                  <img src="/nahoor home page/ماست.svg" width="100%"/>
                  <img src="/nahoor home page/ماست.svg" width="100%"/>
                </div>
              </div>
              <div className="products-mid">
                <h2>{information.title}</h2>
                <div> </div>
                <div className="products-details">
                  <div>{information.subTtile1}</div>

                  <div className="products-count">
                    <p>{information.subTtile2}</p>
                    <p>{information.count}</p>
                  </div>
                  <div className="products-Weight">
                    <p>وزن هر عدد</p>
                    <p>{information.Weight}</p>
                  </div>
                  <div className="products-price">
                    <p>قیمت هر کارتون</p>
                    <div>
                      <p>
                        IRR:<span>416,000</span>
                      </p>
                      <p>
                        AFF:<span>612,000</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-left">
                <div className="products-left-top">
                  <h2>نگاهی به سبد خرید شما:</h2>
                  <div>عکس از ریداکس استور</div>
                </div>
                <div className="products-left-bottom"></div>
              </div>
            </div>
          );
        })}

        <div className="products-bottom">slider</div>
      </div>
    </div>
  );
};

export default Product;
