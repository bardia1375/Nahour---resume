import React, { useEffect, useState } from "react";
import { NavbarStore } from "./components/NavbarStore/NavbarStore";
import Footer from "./Pages/Homepage/footer/footer";
import FactorList from "./Pages/Shopping/factorList/factorList";
// import Store from "./Pages/store/Store";
import { Routes, Route } from "react-router-dom";
import ProductOfFactor from "./Pages/Shopping/productOfFactor/productOfFactor";
import Store from "./Pages/store/Store";
import Profile from "./Pages/profile/profile";
import Information from "./Pages/profile/information/information";
import Support from "./Pages/profile/support/support";
import ConditionNahor from "./Pages/profile/conditionNahor/ConditionNahor";
import Call from "./Pages/profile/call/call";
import AboutUs from "./Pages/profile/aboutUs/aboutUs";
// import Cart from "./Pages/profile/cart/cart";
import OrderActive from "./Pages/profile/order/orderActive";
import OrderPrevious from "./Pages/profile/order/orderPrevious";
import Order from "./Pages/profile/order/order";
import Product from "./Pages/Shopping/product/product";
import EditInformation from "./Pages/profile/editInformation/editInformation";
import Logout from "./Pages/profile/Logout/Logout";
import "./Shopping.css"
export const Shopping = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    // const response = await axios.post("reqres.in/api/userbytoken", {token});
    const response = {
      data: {
        user: {
          name: "bardia",
          email: "mohamad@gmail.com",
        },
      },
    };
    if (!response.data.user) {
      setUser(null);
      return;
    } else {
      setUser({ user: response.data.user });
      
    }
  },[] );
  // console.log(user?.user?.name);
  // console.log(user.user.name);
  return (
    <div className="Shopping-Container">
      <NavbarStore user={user?.user?.name} />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/listFactor/:id" element={<ProductOfFactor />} />
        <Route path="/listFactor/:id/:id" element={<Product />} />
        <Route path="listFactor" element={<FactorList />} />

        <Route path="/profile/*" element={<Profile />}>
          {/* <Route path="info" element={<Information />} /> */}
          <Route path="info" element={<EditInformation />} />
          <Route path="order" element={<Order />} />
          <Route path="order" element={<OrderPrevious />} />
          <Route path="call" element={<Call />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="support" element={<Support />} />
          <Route path="conditions" element={<ConditionNahor />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="bardia" element={<ConditionNahor />} />
        {/* <Route path="/listFactor/FactorProduct" element={<ProductOfFactor />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};
