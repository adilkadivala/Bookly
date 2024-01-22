import React from "react";
import Navbar from "../layouts/Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import NewArrivel from "./NewArrivel";
import Deal from "./Deal";
import ClientsReview from "./ClientsReview";
import Blog from "./Blog";
import Footer from "../layouts/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivel />
      <Featured />
      <Deal />
      <ClientsReview />
      <Blog />
      <Footer />
    </>
  );
};

export default Index;
