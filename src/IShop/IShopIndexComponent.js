import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import IShopHome from "./IShopHome";
import IShopRegister from "./IShopRegister";
import IShopLogin from "./IShopLogin";
import IShopDashboard from "./IShopDashboard";
import IShopProducts from "./IShopProducts";
import IShopProductDetails from "./IShopProductDetails";

const IShopIndexComponent = () => {
  return (
    <div className=" container-fluid">
      <header className="bg-danger text-white text-center p-2 mt-2">
        <h1>IShop-Online Store</h1>
      </header>
      <section className="mt-2 row">
        <BrowserRouter>
          <nav className=" col-3">
            <div className=" mb-2">
              <Link className="btn btn-danger w-100" to="/home">
                Home
              </Link>
            </div>
            <div className=" mb-2">
              <Link className="btn btn-danger w-100" to="/register">
                Register
              </Link>
            </div>
            <div className=" mb-2">
              <Link className="btn btn-danger w-100" to="/login">
                Login
              </Link>
            </div>
            <div className=" mb-2">
              <Link className="btn btn-danger w-100" to="/dashboard">
                Dashboard
              </Link>
            </div>
          </nav>
          <main className="col-9">
            <Routes>
              <Route path="/" element={<IShopHome />} />
              <Route path="home" element={<IShopHome />} />
              <Route path="register" element={<IShopRegister />} />
              <Route path="login" element={<IShopLogin />} />
              <Route path="dashboard" element={<IShopDashboard />} />
              <Route path="products/:category" element={<IShopProducts />} />
              <Route path="details/:_id" element={<IShopProductDetails/>} />
              <Route
                path="errorpage"
                element={
                  <div>
                    <h2 className=" bg-danger"> Invalid Credentials</h2>
                    <Link to="/login">Try Again</Link>
                  </div>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </section>
    </div>
  );
};

export default IShopIndexComponent;
