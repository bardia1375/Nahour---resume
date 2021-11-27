import React from "react";
import ProductOfFactorCard from "../../../components/shopping/FactorList/ProductOfFactorCard/ProductOfFactorCard";
import "./productOfFactor.css";
import {useParams} from "react-router-dom";
const ProductOfFactor = (props) => {
  const params =useParams()
  console.log(params.id)
  console.log(props.match)
  const Title = ["محصولات میهن"];
  const cards = [
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
    {
      imgProduct: "/nahoor home page/productOfFactor/mast.svg",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      product: "ماست ست پرچرب میهن",
      paragraph: "لورم ایپسوم متن ساختگی با تولید سادگی نام طراحان گرافیک است",
      star: "4.5",
      Rial: "416,000",
      afghan: "612,000",
    },
  ];
  const sideBarItems = [
    {
      mainImg: "/nahoor home page/productOfFactor/mihan.svg",
      title: "کارخانه میهن",
      starImg: "/nahoor home page/productOfFactor/Icon Artwork.svg",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
      address:
        "تهران - کیلومتر 22 جاده تهران ساوه - اسلامشهر - روبروی شهرک قایمیه - شرکت میهن",
      phone: "021-57524",
      email: "info@mihan-dairy.com",
      addressImg: "/nahoor home page/productOfFactor/location.svg",
      phoneImg: "/nahoor home page/productOfFactor/phone.svg",
      emailImg: "/nahoor home page/productOfFactor/website.svg",
      twitter: "/nahoor home page/productOfFactor/twitter.svg",
      linkedin: "/nahoor home page/productOfFactor/linkedin.svg",
      instagram: "/nahoor home page/productOfFactor/instagram.svg",
      subTitle: ["لبنیات", "ماکارونی", "سس های خوراکی ", "رب گوجه فرنگی"],
    },
  ];
  return (
    <div className="productOfFactor-container">
      <h2 style={{ marginRight: "350px" }}>{Title}</h2>
      <div className="productOfFactor-main">
        <div
          className="productOfFactor-sideNavbar"
          style={{ textAlign: "right" }}
        >
          {sideBarItems.map((sideBarItem) => {
            return (
              <>
                <div className="ProductOfFactorTitle">
                  <div>
                    <img src={sideBarItem.starImg} />
                  </div>
                  <h1>{sideBarItem.title}</h1>
                </div>

                <div className="ProductOfFactorImg">
                  <img src={sideBarItem.mainImg} width="100%" />
                </div>
                <div className="ProductOfFactor-body">
                  <div className="ProductOfFactorParagraph">
                    <p>{sideBarItem.paragraph}</p>
                  </div>

                  <div className="ProductOfFactorInformation">
                    <h3>دفتر مرکزی</h3>
                    <div className="ProductOfFactorAddress">
                      <div>
                        <p>{sideBarItem.address}</p>
                      </div>
                      <div>
                        <img src={sideBarItem.addressImg} />
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
                    <div className="ProductOfFactorSocialTitle"><h3>شبکه های اجتماعی</h3></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* //end navbar */}
        <div className="productOfFactor-cards">
          {cards.map((card) => {
            return (
              <div>
                <ProductOfFactorCard
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
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductOfFactor;
