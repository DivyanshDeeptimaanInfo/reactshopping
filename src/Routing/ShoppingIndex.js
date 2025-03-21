import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Footwear from "./Footwear";

const ShoppingIndex = () => {
  return (
    <Router>
      <div className="container-fluid">
        <ul>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/footwear">Footwear</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<div>Welcome to Shopping Index Page</div>} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/footwear" element={<Footwear />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ShoppingIndex;
