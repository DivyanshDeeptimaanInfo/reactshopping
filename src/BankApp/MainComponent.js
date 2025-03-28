import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankAppHome from "./BankAppHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";
import NRILogin from "./NRI/NRILogin";
import NRIRegister from "./NRI/NRIRegister";

const MainComponent = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<BankAppHome />}></Route>
          <Route path="personallogin" element={<PersonalLogin />} />
          <Route path="personalregister" element={<PersonalRegister />} />
          <Route path="nrilogin" element={<NRILogin />} />
          <Route path="nriregister" element={<NRIRegister />} /> */}
          <Route path="/" element={<BankAppHome />}>
            <Route path="personallogin" element={<PersonalLogin />} />
            <Route path="personalregister" element={<PersonalRegister />} />
            <Route path="nrilogin" element={<NRILogin />} />
            <Route path="nriregister" element={<NRIRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainComponent;
