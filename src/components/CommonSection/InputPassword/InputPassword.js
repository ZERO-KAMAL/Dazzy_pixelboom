import React, { useState } from "react";
import { Field } from "formik";
import "./InputPassword.scss";
const InputPassword = (props) => {
  //toggle passwor Icon
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordIcon = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="passwordToggle">
        <Field
          type={showPassword ? "text" : "password"}
          name={props.name}
          className="form-control "
          placeholder={props.placeholder}
        ></Field>
        <i
          class={` ${showPassword ? "ri-eye-line" : "ri-eye-close-line"}`}
          onClick={togglePasswordIcon}
        ></i>
      </div>
    </>
  );
};

export default InputPassword;
