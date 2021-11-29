import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
// import ButtonComponent from "../../../components/Button/button";
import "./editInformation.css";
const EditInformation = () => {
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
              className="text-input"
              style={{ border: "2px solid red" }}
              {...field}
              {...props}
            />

            <div className="formik-error">{meta.error}</div>
          </div>
        ) : (
          <div className="formik-items">
            <input className="text-input" {...field} {...props} />
          </div>
        )}
      </div>
    );
  };
 const Button=(e)=>{
     return(
         <button type="button" className="editInformation-button">ثبت</button>
     )
 }
  return (
    <div className="editInformation-container">
      <div className="editInformation-back">
        <p>بازگشت</p>
        <img src="/nahoor home page/profile/Vector.svg" />
      </div>

      <div className="editInformation-title">
        <h2>ویرایش اطلاعات حساب کاربری</h2>
      </div>

      <div className="editInformation-main">
        <div className="editInformation-img">
          <img
            className="editInformation-profileImg"
            src="/nahoor home page/profile/profile photo.svg"
          />
          <div className="editInformation-changePhoto">
            <img src="/nahoor home page/profile/Group 422.svg" />
            <h3>تغییر عکس پروفایل</h3>
          </div>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            story: "",
            cellPhone: "",
            NationalCode: "",
            iban: "",
            cartNumber: "",
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
            NationalCode: Yup.string()
              .max(8, "شما مجاز به استفاده از حداکثر 10 کاراکتر هستید")
              .required("لطفا فیلد را کامل کنید"),
            email: Yup.string()
              .email("لطفا ایمیل را درست وارد کنید")
              .required("لطفا فیلد را کامل کنید"),
            iban: Yup.string()
            .max(22, "شما مجاز به استفاده از حداکثر 24 کاراکتر هستید")
            .required("لطفا فیلد را کامل کنید"),
            cartNumber: Yup.string()
            .max(16, "شما مجاز به استفاده از حداکثر 16 کاراکتر هستید")
            .required("لطفا فیلد را کامل کنید"),
            story: Yup.string().required("لطفا فیلد را کامل کنید"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 100);
          }}
        >
          <Form className="editInformation-content">
            <div>
              <h2>اطلاعات شخصی</h2>
            </div>
            <div className="editInformation-items">
              <MyTextInput2
                className="editInformation-item"
                name="firstName"
                type="text"
                placeholder="نام"
              />
              <MyTextInput2
                className="editInformation-item"
                name="lastName"
                type="text"
                placeholder=" نام خانوادگی"
              />
              <MyTextInput2
                className="editInformation-item"
                name="cellPhone"
                type="number"
                placeholder="شماره تلفن همراه"
              />
              <MyTextInput2
                className="editInformation-item"
                name="NationalCode"
                type="number"
                placeholder="کدملی"
              />
              <MyTextInput2
                className="editInformation-item"
                label="ایمیل"
                name="email"
                type="email"
                placeholder="ایمیل"
              />
            </div>
            <div>
              <h2>اطلاعات حساب</h2>
            </div>
            <div>
              <MyTextInput2
                className="editInformation-item"
                name="iban"
                type="number"
                placeholder="شماره شبا"
              />
              <MyTextInput2
                className="editInformation-item"
                name="cartNumber"
                type="number"
                placeholder="شماره کارت"
              />
            </div>
            <div>
              {/* <Button  onSubmit /> */}
              <button type="submit" className="editInformation-button" >ثبت</button>
            </div>
            {/* <div className="formikmain-bottom">
              <ButtonComponent
                onSubmit
                className="formik-button"
                title="ارسال نظر"
              />
            </div> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditInformation;
