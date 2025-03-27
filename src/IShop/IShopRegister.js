import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const IShopRegister = () => {
  let navigate = useNavigate();
  // function handleButtonClick() {
  //   navigate("/login");
  // }
  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Age: "",
      Mobile: "",
      Subscribed: false,
    },
    onSubmit: (values) => {
      axios.post("http://localhost:4545/registeruser", values);
      alert("Registration Successfully");
      navigate("/login");
    },
  });

  return (
    <div>
      <h2>Register New User</h2>
      {/* <button onClick={handleButtonClick}>Go to Login</button> */}
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              name="UserId"
              // onKeyUp={verifyUserId}
              value={formik.values.UserId}
              onChange={formik.handleChange}
            />
          </dd>
          {/* <dd>{userError}</dd> */}
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              value={formik.values.UserName}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Age</dt>
          <dd>
            <input
              type="number"
              name="Age"
              value={formik.values.Age}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              value={formik.values.Mobile}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Subscription</dt>
          <dd className="form-switch">
            <input
              type="checkbox"
              className="form-check-input me-3"
              name="Subscribed"
              checked={formik.values.Subscribed}
              onChange={formik.handleChange}
            />
            Yes
          </dd>
        </dl>
        <button className="btn btn-primary">Register</button>
      </form>
      <Link to="/login" className="btn btn-primary mt-3">
        Already have account ?
      </Link>
    </div>
  );
};

export default IShopRegister;
