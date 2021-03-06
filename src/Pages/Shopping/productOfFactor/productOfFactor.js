import React, { useState, useEffect } from "react";
import ProductOfFactorCard from "../../../components/shopping/FactorList/ProductOfFactorCard/ProductOfFactorCard";
import "./productOfFactor.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
const ProductOfFactor = (props) => {
  console.log("props", props);
  const params = useParams();
  console.log("idp", params.id);
  const [factory, setfactory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/company/" + params.id)

      .then((response) => {
        setfactory(response.data);
        setLoading(true);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(" http://nahoor.af:8080/nahoor/category/"+params.id)

  //     .then((response) => setfactors(response.data.company_set));

  // }, []);

  const Title = ["محصولات میهن"];
  const cards = [
    {
      id: "1",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "2",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "3",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "4",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "5",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "6",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "7",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "8",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "9",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "10",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "11",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "12",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "13",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "14",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      id: "15",
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
  ];

  return (
    <div className="productOfFactor-container">
      <div className="productOfFactor-main">
        <div
          className="productOfFactor-sideNavbar"
          style={{ textAlign: "right" }}
        >
          {/* //test */}

          <div className="ProductOfFactorTitle">
            <div>
              <img src="/nahoor home page/productOfFactor/Icon Artwork.svg" />
            </div>
            <h1>{factory.name}</h1>
          </div>
          <div className="ProductOfFactorImg" style={{ width: "100%" }}>
            <img
              src={factory.banner_image}
              width="100%"
              style={{ objectFit: "contain" }}
            />
            <div className="FactorListImage-containers">
              <img src={props.shortPic} alt="" height="40px" width="65px" />
            </div>
          </div>
          <div className="ProductOfFactor-body">
            <div className="ProductOfFactorParagraph">
              <p>{factory.long_desc}</p>
            </div>

            <div className="ProductOfFactorInformation">
              <h3>دفتر مرکزی</h3>
              <div className="ProductOfFactorAddress">
                <div>
                  <img src="/nahoor home page/productOfFactor/location.svg" />
                </div>
                <div>
                  <p>{factory.address}</p>
                </div>
              </div>

              <div className="ProductOfFactorPhone">
                <div>
                  <p>{factory.tel}</p>
                </div>
                <div>
                  <img src="/nahoor home page/productOfFactor/phone.svg" />
                </div>
              </div>

              <div className="ProductOfFactorEmail">
                <div>
                  <p>{factory.email}</p>
                </div>
                <div>
                  <img src="/nahoor home page/productOfFactor/website.svg" />
                </div>
              </div>
            </div>

            <div className="ProductOfFactorSocial ">
              <div className="ProductOfFactorSocialImg ">
                <div>
                  <a href={factory.instagram}>
                    <img src="/nahoor home page/productOfFactor/instagram.svg" />
                  </a>
                </div>
                <div>
                  <a href={factory.linkedin}>
                    <img src="/nahoor home page/productOfFactor/linkedin.svg" />
                  </a>
                </div>
                <div>
                  <a href={factory.twitter}>
                    <img src="/nahoor home page/productOfFactor/twitter.svg" />
                  </a>
                </div>
              </div>
              <div className="ProductOfFactorSocialTitle">
                <h3>شبکه های اجتماعی</h3>
              </div>
            </div>
          </div>

          {/* //test */}

          {/* {sideBarItems.map((sideBarItem) => {
            return (
              <>
                <div className="ProductOfFactorTitle">
                  <div>
                    <img src={sideBarItem.starImg} />
                  </div>
                  <h1>{sideBarItem.title}</h1>
                </div>

                <div className="ProductOfFactorImg" style={{ width: "100%" }}>
                  <img
                    src={sideBarItem.mainImg}
                    width="100%"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="FactorListImage-containers">
                    <img
                      src={props.shortPic}
                      alt=""
                      height="40px"
                      width="65px"
                    />
                  </div>
                </div>
                <div className="ProductOfFactor-body">
                  <div className="ProductOfFactorParagraph">
                    <p>{sideBarItem.paragraph}</p>
                  </div>

                  <div className="ProductOfFactorInformation">
                    <h3>دفتر مرکزی</h3>
                    <div className="ProductOfFactorAddress">
                      <div>
                        <img src={sideBarItem.addressImg} />
                      </div>
                      <div>
                        <p>{sideBarItem.address}</p>
                      </div>
                    </div>

                    <div className="ProductOfFactorPhone">
                      <div>
                        <p>{sideBarItem.phone}</p>
                      </div>
                      <div>
                        <img src={sideBarItem.phoneImg} />
                      </div>
                    </div>

                    <div className="ProductOfFactorEmail">
                      <div>
                        <p>{sideBarItem.email}</p>
                      </div>
                      <div>
                        <img src={sideBarItem.emailImg} />
                      </div>
                    </div>
                  </div>

                  <div className="ProductOfFactorSocial ">
                    <div className="ProductOfFactorSocialImg ">
                      <div>
                        <a href="#">
                          <img src={sideBarItem.instagram} />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img src={sideBarItem.linkedin} />
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <img src={sideBarItem.twitter} />
                        </a>
                      </div>
                    </div>
                    <div className="ProductOfFactorSocialTitle">
                      <h3>شبکه های اجتماعی</h3>
                    </div>
                  </div>
                </div>
              </>
            );
          })}  */}
        </div>

        {/* //end navbar */}
        <div className="centeralTitleProduct">
          <h2>محصولات {factory.name}</h2>
          <div className="productOfFactor-cards">
            {console.log(factory.products)}
            {console.log("what?", loading)}
            {loading ? (
              factory.products?.map((information) => {
                return (
                  <div style={{ cursor: "pointer" }}>
                    <ProductOfFactorCard
                      id={information.id}
                      imgProduct={information.place_holder_image}
                      product={information.name}
                      paragraph={information.desc}
                      // factor={information.factor}
                      star={information.rating}
                      Rial={information.price_irt}
                      afghan={information.price_aff}
                    />
                  </div>
                );
              })
            ) : (
              <Loading />
            )}

            {/* {cards.map((card) => {
              return (
                <div>
                  <ProductOfFactorCard
                    id={card.id}
                    imgProduct={card.imgProduct}
                    product={card.product}
                    paragraph={card.paragraph}
                    factor={card.factor}
                    star={card.star}
                    Rial={card.Rial}
                    afghan={card.afghan}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOfFactor;
