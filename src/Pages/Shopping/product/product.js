import React, { useState, useEffect } from "react";
import NahorSuggestionsCard from "../../../components/Store/NahorSuggestionsCard/NahorSuggestionsCard";
import "./product.css";
import Slider from "react-slick";
import { cartStore } from "../../../components/redux/store";
import { addToCart } from "../../../components/redux/actions";

const Product = (props) => {
  const [order, setOrder] = useState(true);
  const [box, setBox] = useState(true);
  const [phone, setPhone] = useState(true);
  const [input, setInput] = useState(true);

  const onlineOrder = () => {
    setOrder(!order);
  };
  const changeBox = () => {
    setBox(!box);
  };
  const continueShop = () => {
    setBox(!box);
    setOrder(!order);
    setPhone(!phone);
  };
  const changePhone = () => {
    setPhone(!phone);
  };

  const changeInput = () => {
    setInput(!input);
  };
  //redux

  const addToCartHandler = () => {
    cartStore.dispatch(addToCart(props));
    console.log(cartStore.getState());
  };

  useEffect(() => {
    let unsubscribe = cartStore.subscribe(() => {
      console.log(cartStore.getState());
    });

    return unsubscribe();
  }, []);
  //end redux
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
  const cards = [
    {
      id: "1",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "2",
      img: "/nahoor home page/profile/سس خردل.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "3",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "2",
      img: "/nahoor home page/profile/سس خردل.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "5",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "2",
      img: "/nahoor home page/profile/سس خردل.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "7",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "8",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "9",
      img: "/nahoor home page/profile/سس خردل.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "10",
      img: "/nahoor home page/profile/دوغ.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
    {
      id: "11",
      img: "/nahoor home page/profile/سس خردل.svg",
      title: "پوشک مای بی بی آبی سری مهربان با پوست سایز",
      Condition: "موجود در انبار",
      icon: "/nahoor home page/store page/icons/Icon/24×24/Color/eCommerce/Store.svg",
      sail: "25%",
      priceAfterSailRial: "450,000 تومان",
      priceBeforeSailRial: "600,000 تومان",
      priceAfterSailAfghan: "300,000 تومان",
      priceBeforeSailAfghan: "400,000 تومان",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
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
                    <img src="/nahoor home page/ماست.png" width="100%" />
                    <img src="/nahoor home page/ماست.png" width="100%" />
                  </div>
                  <div className="products-comment">
                    <p>نظرات کاربران را راجع به این محصول بدانید</p>
                  </div>
                </div>
                <div className="products-mid">
                  <div style={{ width: "100%" }}>
                    <h1>{information.title}</h1>
                  </div>
                  <div className="products-line"></div>
                  <div className="products-details">
                    <div className="product-subTitle">
                      <div className="products-circle"></div>
                      <p>{information.subTtile1}</p>
                    </div>

                    <div className="products-count">
                      <p>{information.subTtile2}</p>
                      <p>{information.count}</p>
                    </div>
                    <div className="products-Weight">
                      <p>وزن هر عدد</p>
                      <p>{information.Weight}</p>
                    </div>
                    <div className="products-prices">
                      <p>قیمت هر کارتون</p>
                      <div className="product-price">
                        <p style={{ marginLeft: "20px" }}>
                          IRR:<span style={{ fontWeight: "300" }}>416,000</span>
                        </p>
                        <p>
                          AFF:<span style={{ fontWeight: "300" }}>612,000</span>
                        </p>
                      </div>
                    </div>
                    <div className="product-information">
                      <div
                        className="product-subTitle"
                        style={{ marginTop: "62px" }}
                      >
                        <div className="products-circle"></div>
                        <p>اطلاعات تغذیه در هر سهم</p>
                      </div>
                      <div className="products-Weight">
                        <p>درصد چربی</p>
                        <p>{information.fat}</p>
                      </div>
                      <div className="products-Weight">
                        <p>کربوهیدرات</p>
                        <p>{information.carbohydrate}</p>
                      </div>
                      <div className="products-Weight">
                        <p>قند</p>
                        <p>{information.suger}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="products-left">
                  <div className="products-left-top">
                    <h2>نگاهی به سبد خرید شما:</h2>
                    <div className="products-right-bottomImg">
                      <img src="/nahoor home page/ماست.png" width="100%" />
                      <img src="/nahoor home page/ماست.png" width="100%" />
                    </div>
                    <div className="products-seeCart">
                      <p style={{ textAlign: "left" }}>مشاهده سبد خرید</p>
                      <span
                        class="material-icons"
                        style={{ transform: "rotate(180deg)" }}
                      >
                        chevron_right
                      </span>
                    </div>
                  </div>

                  <div className="products-left-bottom">
                    {box ? (
                      <>
                        <h2>جزییات سفارش</h2>
                        <div className="products-post">
                          <p>انتخاب روش سفارش</p>
                          <p style={{ cursor: "pointer" }}>کامیون اختصاصی</p>
                          <p style={{ cursor: "pointer" }}>پست عادی</p>
                        </div>

                        <div className="products-post">
                          <div style={{ width:"100%" }}><p>انتخاب تعداد کارتون</p></div>
                          {input ? (
                            <select
                              name="countofbox"
                              className="products-numberBox"
                              style={{width:"100%" ,  marginRight:" 32px"}}
                            >
                              <option
                                selected
                                disabled
                                style={{ fontFamily: "IRANSans" ,margin:"0 8px"}}
                              >
                                تعداد سفارش را تعیین کنید
                              </option>
                              <option value="100">100</option>
                              <option onClick={() => changeInput()} value="200">
                                200
                              </option>
                              <option value="300">300</option>
                              <option value="400">400</option>
                              <option value="400">500</option>
                              <option value="400">600</option>
                              <option value="400">700</option>
                              <option value="400">800</option>
                              <option value="400">900</option>
                            </select>
                          ) : (
                            "salam:)"
                          )}
                        </div>

                        {order ? (
                          <div className="products-btn">
                            <button onClick={() => onlineOrder()} type="text">
                              <p>سفارش آنلاین</p>
                            </button>
                            {phone ? (
                              <button type="text">
                                <p onClick={() => changePhone()}>
                                  سفارش با تماس ناهور
                                </p>
                              </button>
                            ) : (
                              <button type="text">
                                <a
                                  style={{ textDecoration: "none" }}
                                  href="tel:021-88254526"
                                >
                                  <p style={{ color: "#029494" }}>
                                    021-88254526
                                  </p>
                                </a>
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="products-buttons">
                            <div className="buttons-right">
                              <button onClick={() => onlineOrder()}>
                                <p>لغو</p>
                              </button>
                              <button>
                                <div onClick={(e) => addToCartHandler(e)}>
                                  <p onClick={() => changeBox()}>
                                    افزودن به سبد خرید
                                  </p>
                                </div>
                              </button>
                            </div>
                            <div className="buttons-left">
                              <p>
                                IRR :
                                <span style={{ fontWeight: "300" }}>
                                  416,000
                                </span>
                              </p>
                              <p>
                                AFF :
                                <span style={{ fontWeight: "300" }}>
                                  612,000
                                </span>
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="product-changeBox">
                        <div>
                          <img src="/nahoor home page/productPage/done cart.svg" />
                        </div>
                        <p style={{ marginTop: "16px" }}>
                          سبد خرید شما به روزرسانی شد
                        </p>
                        <button
                          className="btn-continue"
                          onClick={() => continueShop()}
                        >
                          <p>ادامه خرید</p>
                        </button>
                        <button className="btn-viewCart">
                          <p>مشاهده سبد خرید</p>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="line2"></div>
        </div>
      </div>
      <div className="products-bottom">
        <Slider {...settings} style={{ width: "100%" }}>
          {cards.map((card) => {
            return (
              <div className="products-card">
                <NahorSuggestionsCard
                  id={card.id}
                  img={card.img}
                  title={card.title}
                  Condition={card.condition}
                  icon={card.icon}
                  sail={card.sail}
                  priceAfterSailRial={card.priceAfterSailRial}
                  priceBeforeSailRial={card.priceBeforeSailRial}
                  priceAfterSailAfghan={card.priceAfterSailAfghan}
                  priceBeforeSailAfghan={card.priceBeforeSailAfghan}
                />
                <div
                  style={{
                    borderLeft: "0.5px solid #6B006D",
                    width: "20px",
                    height: "350px",
                    marginTop: "-400px",
                  }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Product;
