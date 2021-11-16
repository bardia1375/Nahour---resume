import React from "react";
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
      <Header />
      <Explain />
      <GoalsOfNahour />
      <FoundersofNahor />
      <CallOfNahor />
      <div style={{padding:"0 23vw"}}><CommiunicationForm /></div>
      <NahorJobPositions />
    </div>
  );
};

export default AboutUs;
