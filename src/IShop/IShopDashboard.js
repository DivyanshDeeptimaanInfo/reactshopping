import React, { useEffect, useState } from "react";
import ChartToggle from "./ChartToggle";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.userid) {
      navigate("/login");
    } else {
      setUserId(cookies.userid);

      // Ensure cookie is correctly set (avoid unnecessary updates)
      if (!cookies.userid) {
        setCookie("userid", cookies.userid, { path: "/" });
      }
    }
  }, [cookies, navigate, setCookie]);

  function handleSignout() {
    removeCookie("userid", { path: "/" });
    navigate("/login");
  }
  return (
    <div>
      <h2>
        User Dashboard - {userId}{" "}
        <span onClick={handleSignout} className="btn btn-primary">
          Signout
        </span>
      </h2>
      {/* <img src="" alt="" /> */}
      <ChartToggle />
    </div>
  );
};

export default IShopDashboard;
