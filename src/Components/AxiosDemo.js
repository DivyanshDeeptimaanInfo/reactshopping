import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosDemo = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4545/getusers")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className=" container-fluid">
      <h2>Users</h2>
      <ol>
        {users.map((user) => (
          <li key={user._id}>{user.UserId}</li>
        ))}
      </ol>
    </div>
  );
};

export default AxiosDemo;
