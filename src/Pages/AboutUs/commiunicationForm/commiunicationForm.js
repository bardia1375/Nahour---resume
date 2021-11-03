// import React from "react";
// import ReactDOM from "react-dom";
// import { useFormik, FormikProvider, Form, useField } from "formik";
// import "./comminucationForm.css";
// import * as Yup from "yup";

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// const CommiunicationForm = ({ label, helpText, ...props }) => {
//   const [field, meta] = useField(props);

//   // Show inline feedback if EITHER
//   // - the input is focused AND value is longer than 2 characters
//   // - or, the has been visited (touched === true)
//   const [didFocus, setDidFocus] = React.useState(false);
//   const handleFocus = () => setDidFocus(true);
//   const showFeedback =
//     (!!didFocus && field.value.trim().length > 2) || meta.touched;

//   return (
//     <div
//       className={`form-control ${
//         showFeedback ? (meta.error ? "invalid" : "valid") : ""
//       }`}
//     >
//       <div className="flex items-center space-between">
//         <label htmlFor={props.id}>{label}</label>{" "}
//         {showFeedback ? (
//           <div
//             id={`${props.id}-feedback`}
//             aria-live="polite"
//             className="feedback text-sm"
//           >
//             {meta.error ? meta.error : "✓"}
//           </div>
//         ) : null}
//       </div>
//       <input
//         {...props}
//         {...field}
//         aria-describedby={`${props.id}-feedback ${props.id}-help`}
//         onFocus={handleFocus}
//       />
//       <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
//         {helpText}
//       </div>
//     </div>
//   );
// };

// export const Example = () => {
//   const formik = useFormik({
//     initialValues: {
//       username: "",
//     },
//     onSubmit: async (values) => {
//       await sleep(500);
//       alert(JSON.stringify(values, null, 2));
//     },
//     validationSchema: Yup.object({
//       username: Yup.string()
//         .min(8, "Must be at least 8 characters")
//         .max(20, "Must be less  than 20 characters")
//         .required("Username is required")
//         .matches(
//           /^[a-zA-Z0-9]+$/,
//           "Cannot contain special characters or spaces"
//         ),
//     }),
//   });
//   const lable = [" نام و نام خانوادگی", "شماره تماس ", "آدرس ایمیل"];
//   return (
//     <FormikProvider className="bardia"  value={formik}>
//       <Form>
//         <CommiunicationForm
//           label=" نام و نام خانوادگی"
//           id="username"
//           name="username"
//           helpText="Must be 8-20 characters and cannot contain special characters."
//           type="text"
//         />
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </Form>
//       <Form>
//         <CommiunicationForm
//           label="شماره تماس"
//           id="username"
//           name="username"
//           helpText="Must be 8-20 characters and cannot contain special characters."
//           type="text"
//         />
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </Form>
//     </FormikProvider>
//   );
// };
import React from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "./comminucationForm.css";

const genderOptions = [
  { key: "m", text: "کارخانه دار", value: "کارخانه دار" },
  { key: "f", text: "تاجر", value: "تاجر" },
];

const CommiunicationForm = () => (
  <div className="Commiunication-container">
    <Form className="Commiunication-main">
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          placeholder="First name"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          placeholder="Last name"
        />
    
      </Form.Group>
      <Form.Field
        className="email"
        id="form-input-control-error-email"
        control={Input}
        label="Email"
        placeholder="joe@schmoe.com"
        error={{
          content: "Please enter a valid email address",
          pointing: "below",
        }}
      />
      <Form.Field
      className="text-aria"
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Opinion"
        placeholder="Opinion"
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Confirm"
        label="Label with htmlFor"
      />
    </Form>
  </div>
);

export default CommiunicationForm;
