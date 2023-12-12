import type { NextPage } from "next";
import React, { useState } from "react";
import Header from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form'
import Team from "../components/Team/Team";
import Sales from "../components/Sales/Sales"
import Client from "../components/Client/Client";
import Slider from "../components/Slider/Slider";



const Index: NextPage = () => {

  const [scrollToForm, setScrollToForm] = useState(false);

  const handleButtonClick = () => {
    setScrollToForm(true);
  };

  return (
    <>
      <Header />
      <Sales onButtonClick={handleButtonClick} />
      <Slider />
      <div style={{ marginTop: "30rem" }}>
        <Team onButtonClick={handleButtonClick} />
      </div>
      <Client />
      <Form scrollToForm={scrollToForm} />
      <Footer />
      {/**/}
    </>
  );
};

export default Index;
