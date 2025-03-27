import React from "react";
import { BrowserRouter, Link, Outlet } from "react-router-dom";

const SPAComponent2 = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/html">HTML</Link>
            </li>
            <li>
              <Link to="/css">CSS</Link>
            </li>
            <li>
              <Link to="/js">Javascript</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </BrowserRouter>
    </div>
  );
};

export default SPAComponent2;
