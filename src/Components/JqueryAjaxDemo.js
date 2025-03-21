// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// const JqueryAjaxDemo = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     $.ajax({
//       method: "GET",
//       url: "http://localhost:4545/getusers",
//       success: function (response) {
//         setUsers(response);
//       },
//     });
//   }, []);

//   return (
//     <div className="container-fluid">
//       <h2>User Details</h2>
//       <ol>
//         {users.map((user) => (
//           <div key={user._id}>
//             <li>{user.UserId}</li>
//           </div>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default JqueryAjaxDemo;

import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useFormik } from "formik";

const JqueryAjaxDemo = () => {
  const [users, setUsers] = useState([]);
  const [userError, setUserError] = useState("");

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
      //   alert(JSON.stringify(values));
      $.ajax({
        method: "POST",
        url: "http://localhost:4545/registeruser",
        data: values,
      });
      alert("Registered Successfully");
    },
  });
    useEffect(() => {
      $.ajax({
        method: "GET",
        url: "http://localhost:4545/getusers",
        success: function (response) {
          setUsers(response);
        },
      });
    }, []);

  function verifyUserId(e) {
    for (let user of users) {
      if (user.UserId === e.target.value) {
        setUserError("User ID taken - Try Another");
        break;
      } else {
        setUserError("User ID - Available");
      }
    }
  }

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              name="UserId"
              onKeyUp={verifyUserId}
              value={formik.values.UserId}
              onChange={formik.handleChange}
            />
          </dd>
          <dd>{userError}</dd>
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
    </div>
  );
};

export default JqueryAjaxDemo;
