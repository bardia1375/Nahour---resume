import React from "react";
import "./step0.css";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const Step0 = () => {
  const MyTextInput2 = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <div className="formik-main-items" style={{}}>
        {meta.touched && meta.error ? (
          <div >
            <input
              className="text-input1"
              style={{ border: "2px solid red", width: "100%" }}
              {...field}
              {...props}
            />

            <div className="formik-error">{meta.error}</div>
          </div>
        ) : (
          <div >
            <input className="text-input1zZ" {...field} {...props} />
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="step0-container">
      <div>
        <img src="/nahoor home page/Signup/vector.svg" />
      </div>
      <div className="step0-main">
        <div className="step0-box">
          <div className="step0-title">
            <h1>ورود به ناهور</h1>
          </div>
          <div className="step0-phone">
            <p>شماره موبایل یا پست الکترونیک خود را وارد کنید</p>
          </div>
          <Formik
            initialValues={{
              cellPhone: "",
            }}

            validationSchema={Yup.object({
              cellPhone: Yup.string()
                .max(15, "شما مجاز به استفاده از حداکثر 15 کاراکتر هستید")
                .required("لطفا فیلد را کامل کنید"),
            })}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                console.log(values);
              }, 100);
            }}
          >
            <Form  style={{width: "100%" }}>
              <MyTextInput2
                className="step1-item"
                name="cellPhone"
                type="tel"
                placeholder="---- --- --09"
              />
            </Form>
          </Formik>
          {/* <input type="number" placeholder="---- --- --09" /> */}
          <button type="submit" className="step0-btn">
            ورود
          </button>
          <p>یا از روش های زیر استفاده کنید</p>
          <div className="step0-logo">
            <div className="step0-google">
              <img src="/nahoor home page/Signup/google.svg" />
            </div>
            <div className="step0-twitter">
              <img src="/nahoor home page/Signup/twitter.svg" />
            </div>
            <div className="step0-facebook">
              <img src="/nahoor home page/Signup/Face book.svg" />
            </div>
          </div>
          <p>ثبت نام کنید</p>
          <p style={{ marginBottom: "40px" }}>
            با ورود یا ثبت نام در سایت شما{" "}
            <span style={{ color: " #FF9900" }}>شرایط و قوانین </span> استفاده
            از ناهور را میپذیرید.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step0;
