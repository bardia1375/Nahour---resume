import React from "react";
import { NavbarStore } from "./components/NavbarStore/NavbarStore";
import Footer from "./Pages/Homepage/footer/footer";
import FactorList from "./Pages/Shopping/factorList/factorList";
// import Store from "./Pages/store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductOfFactor from "./Pages/Shopping/productOfFactor/productOfFactor";

export const Shopping = () => {
  return (
    <div className="Shopping-Container">
      <Routes>
        <Route path="listFactor" element={<FactorList />} />
      </Routes>
      <div className="navSticky">
        <NavbarStore />
      </div>
      {/* <Store /> */}
      <ProductOfFactor />
      {/* <FactorList /> */}
      <Footer />
    </div>
  );
};
