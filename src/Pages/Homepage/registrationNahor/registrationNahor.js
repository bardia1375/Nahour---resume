import React from "react";
import ButtonComponent from "../../../components/Button/button";
import Title from "../../../components/home/title/Title";
import "./registrationNahor.css";

export const RegistrationNahor = () => {
  const components = [
    {
      title: "ثبت نام تاجران",
      explain: "همکاری با ناهور و ثبت نام در سایت و اپلیکیشن",
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    },
  ];
  return (
    <div className="registrationNahorContainer">
      {components.map((component) => {
        return (
          <div className="registrationNahorRight">
            <div className="registrationNahorRightTitle">
              <Title title={component.title} />
            </div>
            <div>
              <h3>{component.explain}</h3>
            </div>
            <div className="registrationNahor-paragraph">
              <p>{component.paragraph}</p>
            </div>
            <div className="registrationNahorButton"><ButtonComponent title="ثبت نام"/></div>
          </div>
        );
      })}

      <div  className="registrationNahorLeft">
        <img width="100%" src="./nahoor home page/partnership.svg" style={{marginRight:"90px", minWidth:"200px"}} />
      </div>
    </div>
  );
};
