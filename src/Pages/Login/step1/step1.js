import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./step1.css";
const Step1 = () => {
  const MyTextInput2 = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="formik-main-items" style={{}}>
        {meta.touched && meta.error ? (
          <div className="formik-items">
            <input
              className="text-input1"
              style={{ border: "2px solid red" }}
              {...field}
              {...props}
            />

            <div className="formik-error">{meta.error}</div>
          </div>
        ) : (
          <div className="formik-items">
            <input className="text-input1" {...field} {...props} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="step1-container">
      <div className="step1-main">
        <div className="step2-title">
          <img  src="/nahoor home page/profile/Vector.svg" />
          <h1>ثبت نام</h1>
        </div>
        <div className="editInformation-img"></div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            cellPhone: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 100);
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(25, "شما مجاز به استفاده از حداکثر 15 کاراکتر هستید")
              .required("لطفا فیلد را کامل کنید"),
            lastName: Yup.string()
              .max(25, "شما مجاز به استفاده از حداکثر 15 کاراکتر هستید")
              .required("لطفا فیلد را کامل کنید"),
            cellPhone: Yup.string()
              .max(15, "شما مجاز به استفاده از حداکثر 15 کاراکتر هستید")
              .required("لطفا فیلد را کامل کنید"),

            email: Yup.string()
              .email("لطفا ایمیل را درست وارد کنید")
              .required("لطفا فیلد را کامل کنید"),

            password: Yup.string()
              .required("لطفا فیلد را کامل کنید")
              .min(6, "رمز عبوری وارد شده حداقل نیاز به 6 کارکتر دارد"),
            confirmPassword: Yup.string()
              .required("لطفا فیلد را کامل کنید")
              .oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 100);
          }}
        >
          <Form className="editInformation-content">
            <div className="editInformation-items">
              <MyTextInput2
                className="step1-item"
                name="firstName"
                type="text"
                placeholder="نام حود را بنویسید"
              />
              <MyTextInput2
                className="step1-item"
                name="lastName"
                type="text"
                placeholder="نام خانوادگی خود را بنویسید"
              />
              <MyTextInput2
                className="step1-item"
                name="cellPhone"
                type="number"
                placeholder="شماره تلفن همراه خودرا وارد کنید"
              />
              <MyTextInput2
                className="step1-item"
                label="ایمیل"
                name="email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />
              <MyTextInput2
                className="step1-item"
                name="password"
                type="password"
                placeholder="رمز عبور"
              />
              <MyTextInput2
                className="step1-item"
                name="confirmPassword"
                type="password"
                placeholder="رمز عبور خود را تکرار کنید"
              />
            </div>

            <div>
              <button type="submit" className="step1-button">
                بعدی
              </button>
            </div>
          </Form>
        </Formik>
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
              borderTop: "4px solid rgba(255, 255, 255, 0.32)",
              width: "50px",
              transform: "translateY(10px)",
              margin: "0px 8px",
            }}
          ></div>
          <div
            style={{
              fontFamily: "IranSans",
              fontWeight: "600",
              background:" rgba(255, 255, 255, 0.32)",
              color: "rgba(255, 255, 255, 0.32)",
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
              borderTop: "4px solid rgba(255, 255, 255, 0.32)",
              width: "50px",
              transform: "translateY(10px)",
              margin: "0px 8px",
            }}
          ></div>
        
          <div
            style={{
              fontFamily: "IranSans",
              fontWeight: "600",
              background:" rgba(255, 255, 255, 0.32)",
              color: "rgba(255, 255, 255, 0.32)",
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
  );
};

export default Step1;
