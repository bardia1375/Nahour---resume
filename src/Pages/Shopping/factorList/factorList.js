import React, { useEffect, useState } from "react";
import FactorListCard from "../../../components/shopping/FactorList/FactorListCard";
// import SideBar from "../../../components/shopping/FactorList/SideBar/SideBar";
import "./factorList.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const FactorList = (props) => {
  console.log("asdasda",props)
  const Title = ["لیست کارخانه های لبنیات"];
  const [factors, setfactors] = useState([]);
  const params = useParams();
  console.log("iddddddddddddddddddddddddd", params.id);
  const [factorsfilter, setfactorsfilter] = useState([
 
  ]);
  const [informations, setinformations] = useState([]);
  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/category/")

      .then((response) => setfactors(response.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/category/"+params.id)

      .then((response) =>setfactorsfilter(response.data.company_set));
  }, []);

  console.log("first state", factors);
  console.log("first filter state", factorsfilter);

  const changeGrope = (subtitle) => {
    // console.log(subtitle)
    // console.log("second state ", factors);
    const updatedItems = factors
      .filter((cards) => {
        return cards.id == subtitle;
      })
      .map((updatedItem) => {
        return updatedItem.company_set;
      });

    console.log("updatedItemsfilter", updatedItems[0]);
    setfactorsfilter(updatedItems[0]);
  };

  console.log("second filter state", factorsfilter);

  const cards = [
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
    {
      id: "14",
      View: "126",
      product: "محصولات:شیر-ماست ...",
      factor: "کارخانه میهن",
      largPic: "/nahoor home page/میهن.png",
      shortPic: "/nahoor home page/Mihan LOGO.png",
      star: "4.5",
      imgstar: "/nahoor home page/productOfFactor/Icon Artwork-white.svg",
    },
  ];
  const sideBarItems = [
    {
      title: "صنایع غذایی",
      subTitle: [
        { id: "1", name: "لبنیات" },
        { id: "2", name: "ماکارونی" },
        { id: "3", name: "رب گوجه فرنگی " },
        { id: "4", name: "سس های خوراکی" },
      ],
    },
    {
      title: "صنایع ساختمانی",
      subTitle: [
        { id: "5", name: "کاشی" },
        { id: "6", name: "اره" },
        { id: "7", name: "سنگ " },
        { id: "8", name: "آجر" },
      ],
    },
    {
      title: "صنایع غذایی",
      subTitle: [
        { id: "1", name: "لبنیات" },
        { id: "2", name: "ماکارونی" },
        { id: "3", name: "رب گوجه فرنگی " },
        { id: "4", name: "سس های خوراکی" },
      ],
    },
  ];

  return (
    <div className="factorList-container">
      <div className="factorList-main">
        <div className="factorList-sideNavbar">
          <div className="factorListMainTitle">
            <h2>دسته بندی کارخانه ها</h2>
          </div>

          {/* start sideBar */}

          {sideBarItems.map((sideBarItem) => {
            return (
              // <SideBar
              //   title={sideBarItem.title}
              //   subTitle={sideBarItem.subTitle}
              // />
              <>
                <div className="factorListSideNavbarTitle">
                  <div>
                    <h3>{sideBarItem.title}</h3>
                  </div>
                  <div style={{ width: "20px" }}>
                    <img
                      src="/nahoor home page/About Page/behinde.svg "
                      width="100%"
                    />
                  </div>
                </div>

                <div className="factorListSideNavbarItems">
                  <hr
                    style={{
                      width: "140px",
                      height: "2px",
                      color: "black",
                    }}
                  ></hr>
                  {sideBarItem.subTitle.map((subtitle) => {
                
                    return (
                      <>
                        <NavLink
                          className={(navData) =>
                            navData.isActive ? "changeHover" : "hover"
                          }
                          to={`${sideBarItem.title}/${subtitle.id}`}
                          onClick={() => changeGrope(subtitle.id)}
                        >
                          <p>{subtitle.name}</p>
                        </NavLink>
                      </>
                    );
                  })}
                  {/* <Link to="" ><p>صنایع غذایی</p></Link> */}
                </div>
              </>
            );
          })}
        </div>
        {/* end sideBar */}

        <div className="centeralTitle">
          <h2>{Title}</h2>
          <div className="factorList-cards">
            {factorsfilter.map((factor) => {
              console.log(" این مهمه", factor);
              return (
                <div>
                  <FactorListCard
                    id={factor.id}
                    factor={factor.name}
                    largPic={factor.banner_image}
                    shortPic={factor.logo_image}
                    product={factor.short_desc.substring(0, 22)}
                  />
                </div>
              );
            })}

            {/* {cards.map((card) => {
              return (
                <div>
                  <FactorListCard
                    cards={card}
                    id={card.id}
                    largPic={card.largPic}
                    shortPic={card.shortPic}
                    product={card.product}
                    factor={card.factor}
                    star={card.imgstar}
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

export default FactorList;
