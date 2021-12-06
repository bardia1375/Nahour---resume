import React from 'react'
import "./step4.css"

const Step4 = () => {
    const senetnses = [
        {
          matn: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. ",
        },
      ];
    
    const changePage=()=>{
      window.location="/store/profile"
    }
    return (
        <div className="login-container">
        <div className="login-container2">
          <div style={{ width: "50%", margin: "0 auto" }}>
            <img
              width="100%"
              className="NavbarLogo"
              src="/nahoor home page/logo.svg"
              alt=""
            />
          </div>
          <div className="login-main">
            {senetnses.map((senetnse) => {
              return (
                <div className="login-content">
                  <h2>به ناهور خوش آمدید</h2>
                  <p>{senetnse.matn}</p>
                  <button onClick={()=>changePage()}>ورود</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="login-bottom1">
          <div
            style={{
              fontFamily: "IranSans",
              fontWeight: "600",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </div>
          <div
            style={{
              borderTop: "4px solid #fff",
              width: "50px",
              transform: "translateY(10px)",
              margin: "0px 8px",
            }}
          ></div>
          <div
            style={{
              fontFamily: "IranSans",
              fontWeight: "600",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2
          </div>
          <div
            style={{
              borderTop: "4px solid #fff",
              width: "50px",
              transform: "translateY(10px)",
              margin: "0px 8px",
      
            }}
          ></div>
        <div
            style={{
              fontFamily: "IranSans",
              fontWeight: "600",
              backgroundColor: "white",
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </div>
        </div>
      </div>
    )
}

export default Step4
