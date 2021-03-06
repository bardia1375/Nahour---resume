import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./shareBlogForm.css";
import NavbarSmall from "../../../components/Navbar/Navbar";
import ButtonComponent from "../../../components/Button/button";
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="formik-items">
      <label style={{ fontSize: "0.8rem" }} htmlFor={props.id || props.name}>
        {label}
      </label>

      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="formik-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextInput2 = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="formik-main-items" style={{ margin:"0 16px"}}>
      {meta.touched && meta.error ? (
        <div className="formik-items">
          <label
            className="formik-lable"
            style={{ fontSize: "0.8rem" }}
            htmlFor={props.id || props.name}
          >
            {label}<span style={{ color: "red"}}> *</span>
          </label>
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
          <label
            className="formik-lable"
            style={{ fontSize: "0.8rem" }}
            htmlFor={props.id || props.name}
          >
            {label}<span style={{ color: "red"}}> *</span>
          </label>
          <input className="text-input" {...field} {...props} />
        </div>
      )}
    </div>
  );
};
const MyTextArea = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "text" });
  return (
    <div className="formik-textArea" >
      <label className="formik-lable" for="story">
        ???????? ???????? / ?????????? ??????
      </label>
      <textarea
        className="textareaInput"
        style={{ borderRadius: "20px", border: "2px solid #C9C9C9" }}
        type="text"
        {...field}
        {...props}
      >
        {children}
      </textarea>
      {meta.touched && meta.error ? (
        <div className="formik-error" style={{ textAlign: "right" }}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const MyTextArea2 = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "text" });
  return (
    <div className="formik-textArea">
      {meta.touched && meta.error ? (
        <div className="formik-textArea-false">
          <div>
            <label className="formik-lable" for="story">
              ???????? ???????? / ?????????? ??????<span style={{ color: "red" }}> *</span>
            </label>
          </div>
          <div>
            <textarea
              className="textareaInput"
              style={{ borderRadius: "20px", border: "2px solid red" }}
              type="text"
              {...field}
              {...props}
            >
              {children}
            </textarea>
          </div>

          <div className="formik-error" style={{ textAlign: "right" }}>
            {meta.error}
          </div>
        </div>
      ) : (
        <div className="formik-textArea-true">
          <div>
            <label className="formik-lable" for="story">
              ???????? ???????? / ?????????? ??????<span style={{ color: "red" }}> *</span>
            </label>
          </div>
          <div>
            <textarea
              className="textareaInput"
              style={{ borderRadius: "20px", border: "2px solid #C9C9C9" }}
              type="text"
              {...field}
              {...props}
            >
              {children}
            </textarea>
          </div>
        </div>
      )}
    </div>
  );
};
// And now we can use these
const SignupForm = () => {
  return (
    <div className="formik-container">
      <div>
        <h2>??????????</h2>
      </div>
      <div className="formik-container-main">
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            story: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(25, "?????? ???????? ???? ?????????????? ???? ???????????? 15 ?????????????? ??????????")
              .required("???????? ???????? ???? ???????? ????????"),
            email: Yup.string()
              .email("???????? ?????????? ???? ???????? ???????? ????????")
              .required("???????? ???????? ???? ???????? ????????"),
            story: Yup.string().required("???????? ???????? ???? ???????? ????????"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              console.log(values);
            }, 100);
          }}
        >
          <Form className="formik-shairblog-main">
            <div className="formik-shareblog-top">
              <MyTextInput2
                label="?????? ??????"
                name="firstName"
                type="text"
                placeholder="???????? ?????? ????????????????"
               
              />
              <MyTextInput2
                label="??????????"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />
            </div>
            <div className="formik-bottom">
              <MyTextArea2
                placeholder=" ???????? ???????? ?????? ?????? ???? ???????? ???? ?????????????? :))"
                id="story"
                name="story"
                rows="5"
                cols="33"
              ></MyTextArea2>
            </div>
            <div className="formikmain-bottom">
            <ButtonComponent
                onSubmit
                className="formik-button"
                title="?????????? ??????"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default SignupForm;
