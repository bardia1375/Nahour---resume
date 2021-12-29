import React from "react";
import NavbarSmall from "../../components/Navbar/Navbar";
import Footer from "../Homepage/footer/footer";
import Navbar from "../Homepage/Header/Navbar";
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
    <>
      {/* <Navbar  newStyle={{color:"red",height: "25px",border: "1px solid red"}}/> */}
      <NavbarSmall/>
      <Header />
      <Explain />
      <div style={{ padding: "0 10vw" }}>
        <GoalsOfNahour />
        <FoundersofNahor />

        {/* <CommiunicationForm /> */}

        {/* <Footer /> */}
      </div>
      <CallOfNahor />
      <NahorJobPositions />
    </>
  );
};

export default AboutUs;
