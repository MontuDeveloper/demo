import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { register } from "../features/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{message}</p>}
    </div>
  );
};

export default RegisterForm;
