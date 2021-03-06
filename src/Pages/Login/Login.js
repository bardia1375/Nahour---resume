import React from "react";
import { Route, Routes } from "react-router";
import "./Login.css";
import Step0 from "./step0/step0";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step4 from "./step4/step4";
const Login = () => {
  const senetnses = [
    {
      matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
    },
  ];
  return (
    <div className="login-container">
      <Routes>
      <Route path="/" element={<Step0 />} />
        <Route path="step1" element={<Step1 />} />
        <Route path="step1/step2" element={<Step2 />} />
        <Route path="step1/step2/step4" element={<Step4 />} />
      </Routes>
      {/* <Step0/> */}
      {/* <Step1 />  */}
      {/* <Step2/> */}
      {/* <Step4/> */}
    </div>
  );
};

export default Login;
