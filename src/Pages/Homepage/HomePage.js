import React from "react";
import Application from "./Application/Application";
import BestFactor from "./BestFactor/BestFactor";
import FamilierNahor from "./FamilierNahor/FamilierNahor";
import FeacherOfNahor from "./feacherOfNahor/feacherOfNahor";
import Header from "./Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeacherOfNahor />
      <FamilierNahor/> 
       <BestFactor/>
      <Application />
    
    </div>
  );
};

export default HomePage;
