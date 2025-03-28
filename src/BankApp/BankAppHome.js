import React from "react";
import { Link, Outlet } from "react-router-dom";

const BankAppHome = () => {
  return (
    <div>
      <h2>Bank Home</h2>
      <nav className="d-flex justify-content-between">
        <span>
          <Link to="/personallogin">Personal Login</Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/personalregister">Personal Register</Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/nrilogin">NRI Login</Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/nriregister">NRI Register</Link>
        </span>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default BankAppHome;
