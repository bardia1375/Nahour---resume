import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../../../components/Button/button";
import "./comminucationForm.css";
import { Title } from "../../../components/AboutUs/title/Title";

const MyTextInput2 = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="formik-main-items" style={{ margin: "0 16px" }}>
      {meta.touched && meta.error ? (
        <div className="formik-items">
          <label
            className="formik-lable"
            style={{ fontSize: "0.8rem" }}
            htmlFor={props.id || props.name}
          >
            {label}
            <span style={{ color: "red" }}> *</span>
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
            {label}
            <span style={{ color: "red" }}> *</span>
          </label>
          <input className="text-input" {...field} {...props} />
        </div>
      )}
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
              style={{ borderRadius: "50px", border: "2px solid red" }}
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
              style={{ borderRadius: "50px", border: "2px solid #C9C9C9" }}
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

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="formik-select" style={{ paddingLeft: "4px" }}>
      <div className="formik-select">
        {meta.touched && meta.error ? (
          <>
            <label
              className="formik-lable"
              style={{ fontSize: "0.8rem" }}
              htmlFor={props.id || props.name}
            >
              {label}
              <span style={{ color: "red" }}> *</span>
            </label>
            <select
              style={{
                border: "2px solid red",
                padding: "8px 0",
                borderRadius: "50px",
                marginTop: "2px",
              }}
              {...field}
              {...props}
            />{" "}
            <div className="formik-error">{meta.error}</div>
          </>
        ) : (
          <>
            <label
              className="formik-lable"
              style={{ fontSize: "0.8rem" }}
              htmlFor={props.id || props.name}
            >
              {label}
              <span style={{ color: "red" }}> *</span>
            </label>
            <select
              style={{
                padding: "8px 10px",
                borderRadius: "50px",
                marginTop: "2px",
              }}
              {...field}
              {...props}
            />
          </>
        )}
        {/* {meta.touched && meta.error ? (
        <div className="formik-error">{meta.error}</div>
      ) : null} */}
      </div>
    </div>
  );
};

// And now we can use these
const CommiunicationForm = () => {
  return (
    <div className="formik-container" style={{border: "1px solid red" }}>
      <div className="formik-test" style={{border: "1px solid red" }}>
        <div>
          <div className="call-title">
            <img
              className="call-imgtitle"
              width="100%"
              src="./nahoor home page/About Page/behinde.png"
              alt=""
            />
            <div>
              <Title title="??????????" />
            </div>
          </div>
        </div>
        <div className="formik-container-main" style={{border: "1px solid red"  ,margin:" 0 auto"}}>
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              story: "",
              phone: "",
              jobType: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(25, "?????? ???????? ???? ?????????????? ???? ???????????? 15 ?????????????? ??????????")
                .required("???????? ???????? ???? ???????? ????????"),
              phone: Yup.string()
                .max(25, "?????? ???????? ???? ?????????????? ???? ???????????? 15 ?????????????? ??????????")
                .required("???????? ???????? ???? ???????? ????????"),
              email: Yup.string()
                .email("???????? ?????????? ???? ???????? ???????? ????????")
                .required("???????? ???????? ???? ???????? ????????"),
              story: Yup.string().required("???????? ???????? ???? ???????? ????????"),
              jobType: Yup.string()
                .oneOf(["designer", "development"], "Invalid Job Type")
                .required("???????? ???????? ???? ???????? ????????"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 100);
            }}
          >
            <Form className="formik-main">
              <div className="formik-top3" >
                <div className="formik-top1">
                  <div className="formik-topinput">
                    <MyTextInput2
                      label="?????? ?? ?????? ????????????????"
                      name="firstName"
                      type="text"
                      placeholder="???????? ?????? ????????????????"
                    />
                  </div>
                  <div className="formik-topinput">
                    <MyTextInput2
                      label="???????? ??????????"
                      name="email"
                      type="email"
                      placeholder="jane@formik.com"
                    />
                  </div>
                </div>
                <div className="formik-top2">
                  <div className="formik-topinput">
                    <MyTextInput2
                      label="?????????? ????????"
                      name="phone"
                      type="number"
                      placeholder="021-88882255"
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <MySelect label="?????? ????????????" name="jobType">
                      <option className="formik-lable" value="">
                        ???????????? ????????
                      </option>
                      <option className="formik-lable" value="designer">
                        ????????
                      </option>
                      <option className="formik-lable" value="development">
                        ???????????????????????
                      </option>
                    </MySelect>
                  </div>
                </div>
              </div>
              <div className="formik-bottom">
                <div>
                  <MyTextArea2
                    placeholder=" ???????? ???????? ?????? ?????? ???? ???????? ???? ?????????????? :))"
                    id="story"
                    name="story"
                    rows="5"
                    cols="33"
                  ></MyTextArea2>
                </div>
              </div>
              <div className="formikmain-bottom1">
                <ButtonComponent
                  onSubmit
                  className="formik-button"
                  title="?????????? ??????"
                />
                {/* <button onSubmit className="formik-button" type="submit">
                ?????????? ??????
              </button> */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default CommiunicationForm;
