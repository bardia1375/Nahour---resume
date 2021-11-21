import React from "react";
import NavbarSmall from "../../components/Navbar/Navbar";
import Footer from "../Homepage/footer/footer";
import CallOfNahor from "./callOfNahor/callOfNahor";
import CallOfNahor1 from "./callOfNahor/callOfNahor";
import CommiunicationForm from "./commiunicationForm/commiunicationForm";
import Explain from "./explain/explain";
import FoundersofNahor from "./FoundersofNahor/FoundersofNahor";
import GoalsOfNahour from "./GoalsOfNahour/GoalsOfNahour";
import Header from "./Header/Header";
import NahorJobPositions from "./nahorJobPositions/nahorJobPositions";

const AboutUs = () => {
  return (
    <div >
     <NavbarSmall/>
      <Header />
      <Explain />
      <GoalsOfNahour />
      <FoundersofNahor />
      <CallOfNahor />
      <div style={{padding:"0 23vw"}}><CommiunicationForm /></div>
      <NahorJobPositions />
           <Footer />
    </div>
  );
};

export default AboutUs;
