import React from "react";
import { NavbarStore } from "./components/NavbarStore/NavbarStore";
import Footer from "./Pages/Homepage/footer/footer";
import FactorList from "./Pages/Shopping/factorList/factorList";
// import Store from "./Pages/store/Store";
import { Routes, Route } from "react-router-dom";
import ProductOfFactor from "./Pages/Shopping/productOfFactor/productOfFactor";
import Store from "./Pages/store/Store";
export const Shopping = () => {
  return (
    <div className="Shopping-Container">

        <NavbarStore />

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="listFactor" element={<FactorList />} />
        <Route path="/listFactor/FactorProduct" element={<ProductOfFactor />} />
      </Routes>
     <Footer />
    </div>
  );
};
