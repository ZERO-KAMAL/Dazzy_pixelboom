import React, { useState } from "react";
import { images } from "../../constants";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputPassword from "../../components/CommonSection/InputPassword/InputPassword";

// for yup validationSchema form
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LogIn = () => {
  //state for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //form on submit
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Dummy data for demonstration purposes
    const dummyData = { email: "test@gmail.com", password: "test@123" };
    if (
      values.email === dummyData.email &&
      values.password === dummyData.password
    ) {
      setIsLoggedIn(true);
    } else {
      toast.success("Invalid username or password", {
        position: "top-center",
      });
    }
    setSubmitting(false);
    resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="signLog">
      {/* <div className="container"> */}
      <div className="signLog_container">
        <div className="row d-flex justify-content-center">
          <div className=" col-sm-8 col-md-6">
            <div className="header-wrapper d-flex align-items-center justify-content-between">
              <div className="brand d-flex align-items-center ">
                <img src={images.logo} alt="logo" className="brand_logo" />
                <h5 className="brand_name ms-3 mb-0">PixelBoom</h5>
              </div>
              <NavLink to="/signup" className="signLog_link">
                Sign Up
              </NavLink>
            </div>

            <div className="signLog_wrapper">
              <div className="content-title">
                <h3>Log In</h3>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className="signLog_form">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email address"
                      ></Field>
                      {errors.email && touched.email ? (
                        <div className="error">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <InputPassword name="password" placeholder="Enter password" />
                      {errors.password && touched.password ? (
                        <div className="error">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Create account
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="content-title">
                <span>
                  Don't have an account yet?
                  <NavLink to="/signup" className="signLog_link ms-2">
                    Sign up Now
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 rightImg">
            <img src={images.LogBg} alt="" className="signLog_image" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
