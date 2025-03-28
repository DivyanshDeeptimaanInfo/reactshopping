import React, { useEffect, useState } from "react";
import ChartToggle from "./ChartToggle";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const IShopDashboard = () => {
  // const [cookie, setCookie, removeCookie] = useCookies();
  // const [userId, setUserId] = useState("");
  // let navigate = useNavigate();
  // useEffect(() => {
  //   setUserId(cookie["userid"]);
  // }, [cookie]);

  // function handleSignout() {
  //   removeCookie("userid");
  //   navigate("/login");
  // }
  // useEffect(() => {
  //   if (cookie["userid"] === undefined) {
  //     navigate("/login");
  //   } else {
  //     setCookie(cookie["userid"]);
  //   }
  // }, [cookie, navigate, setCookie]);

  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  const [userId, setUserId] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.userid) {
      navigate("/login");
    } else {
      setUserId(cookies.userid);
      loadCategories();
      // Ensure cookie is correctly set (avoid unnecessary updates)
      if (!cookies.userid) {
        setCookie("userid", cookies.userid, { path: "/" });
      }
    }
  }, [cookies, navigate, setCookie]);

  function loadCategories() {
    axios
      .get("http://localhost:4545/getcategories")
      .then((response) => setCategories(response.data));
  }

  function handleSignout() {
    removeCookie("userid", { path: "/" });
    navigate("/login");
  }
  return (
    <div>
      <h2>
        User Dashboard - {userId}{" "}
        <span onClick={handleSignout} className="btn ms-5 btn-primary">
          Signout
        </span>
      </h2>
      <h3>Product Details</h3>
      <ol>
        {/* {categories.map((category) => {
          <li key={category._id}>{category.category}</li>;
        })} */}
        {categories.map((category) => (
          <li key={category._id}>
            <Link className=" text-decoration-none" to={`/products/${category.category}`}>{category.category.toUpperCase()}</Link>
          </li>
        ))}

        {/* {categories.map((category) => (
          <li key={category}>
            {category.toUpperCase()}
          </li>
        ))} */}
      </ol>
      {/* <img src="" alt="" /> */}
      <ChartToggle />
    </div>
  );
};

export default IShopDashboard;
