import React from "react";
import { images } from "../../constants";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputPassword from "../../components/CommonSection/InputPassword/InputPassword";

// for yup validationSchema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  retypePassword: Yup.string()
    .required("Retype password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  coupon: Yup.string(),
});

const SignUp = () => {
  //form on submit
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    toast.success("Signup has been Successfull", {
      position: "top-center",
    });
  };
  return (
    <div className="signLog">
      {/* <div className="container"> */}
      <div className="signLog_container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-8 col-md-6">
            <div className="header-wrapper d-flex align-items-center justify-content-between">
              <div className="brand d-flex align-items-center ">
                <img src={images.logo} alt="logo" className="brand_logo" />
                <h5 className="brand_name ms-3 mb-0">PixelBoom</h5>
              </div>
              <NavLink to="/login" className="signLog_link">
                Log In
              </NavLink>
            </div>

            <div className="signLog_wrapper">
              <div className="content-title">
                <h3>Create your account</h3>
                <span>
                  Already have an account?
                  <NavLink to="/login" className="signLog_link ms-2">
                    Log In
                  </NavLink>
                </span>
              </div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  retypePassword: "",
                  coupon: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, handleSubmit, isSubmitting }) => (
                  <Form className="signLog_form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Jack"
                      ></Field>
                      {errors.name && touched.name ? (
                        <div className="error">{errors.name}</div>
                      ) : null}
                    </div>
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
                      <InputPassword
                        name="password"
                        placeholder="Enter password"
                      />
                      {errors.password && touched.password ? (
                        <div className="error">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Re-enter Password</label>
                      <InputPassword
                        name="retypePassword"
                        placeholder="Retype Password"
                      />

                      {errors.retypePassword && touched.retypePassword ? (
                        <div className="error">{errors.retypePassword}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Coupon code (optional)
                      </label>
                      <Field
                        type="text"
                        name="coupon"
                        className="form-control"
                        placeholder="Enter coupon code"
                      ></Field>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary w-100"
                        type="submit"
                        name="submit"
                        disabled={isSubmitting}
                      >
                        Create account
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
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

export default SignUp;
