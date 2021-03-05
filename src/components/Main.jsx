import React from "react";
import Intro from "./Intro";
import Fotter from "./Fotter";
import Header from "./Header";
import Mlist from "./Mlist";

const Main = () => {
  return (
    <>
      <Header />
      <Intro />
      <Mlist heading="now showing"/>
      <Mlist heading="most popular"/>
      <Mlist heading="hollywood shows"/>
      <Mlist heading="bollywood shows"/>
     
      {/* <Fotter /> */}
    </>
  );
};

export default Main;
