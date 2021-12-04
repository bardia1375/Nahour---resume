import React from "react";
import "./step2.css";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const Step2 = () => {
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
    <div ClassName="step2-container">
      <div className="step2-main">
        <div className="step2-title">
          <img  src="/nahoor home page/profile/Vector.svg" />
          <h1>تایید شماره همراه</h1>
        </div>
      
          <Formik
            initialValues={{
                number: "",
                number1:"",
                number2:"",
                number3:"",
            }}
            validationSchema={Yup.object({
                number: Yup.string()
                .required("*"),
                number1: Yup.string()
                .required("*"),
                number2: Yup.string()
                .required("*"),
                number3: Yup.string()
                .required("*"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                console.log(values);
              }, 100);
            }}
          >
            <Form  className="step2-inputs">
              <MyTextInput2
                className="step2-input1"
                name="number"
                type="number"
         
              />
                <MyTextInput2
                className="step2-input"
                name="number1"
                type="number"
       
              />
                <MyTextInput2
                className="step2-input"
                name="number2"
                type="number"
              />
                <MyTextInput2
                className="step2-input"
                name="number3"
                type="number"
              />
            </Form>
          </Formik>
          {/* <input type="number" />
          <input className="step2-input" type="number" />
          <input className="step2-input" type="number" />
          <input className="step2-input" type="number" /> */}
   
        <div className="step2-text">
          <p>ارسال دوباره کد</p>
          <p>/</p>
          <p>بررسی دوباره شماره تلفن</p>
        </div>
        <button type="submit" className="step2-btn">
          تایید
        </button>
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

export default Step2;
