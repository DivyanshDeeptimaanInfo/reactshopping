import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const IShopLogin = () => {
  let navigate = useNavigate();
  function handleButtonClick() {
    navigate("/register");
  }
  const [users, setUsers] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (values) => {
      for (let user of users) {
        if (
          user.UserId === values.UserId &&
          user.Password === values.Password
        ) {
          setCookie("userid", user.UserId);
          navigate("/dashboard");
          break;
        } else {
          navigate("/errorpage");
        }
      }
    },
  });
  useEffect(() => {
    axios
      .get("http://localhost:4545/getusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              onChange={formik.handleChange}
              value={formik.values.UserId}
              type="text"
              name="UserId"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              onChange={formik.handleChange}
              value={formik.values.Password}
              type="password"
              name="Password"
            />
          </dd>
        </dl>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <button onClick={handleButtonClick}>New User</button>
    </div>
  );
};

export default IShopLogin;
