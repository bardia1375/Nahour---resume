import React from "react";
import "./Login.css";
const Login = () => {
  const senetnses = [
    {
      matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
    },
  ];
  return (
    <div className="login-container">
      <div className="login-container2">
        <div style={{width: '50%', margin:"0 auto"}}>
          <img
            width="100%"
            className="NavbarLogo"
            src="/nahoor home page/logo.svg"
          />
        </div>
        <div className="login-main">
          {senetnses.map((senetnse) => {
            return (
              <div className="login-content">
                <h2>به ناهور خوش آمدید</h2>
                <p>{senetnse.matn}</p>
                <button>ورود</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Login;
