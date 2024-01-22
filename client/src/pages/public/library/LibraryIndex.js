import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Relegion from "./Relegion";
import Geography from "./Geography";
import History from "./History";

const LibraryIndex = () => {
  return (
    <>
      <Navbar />
      <Relegion />
      <Geography />
      <History />
      <Footer />
    </>
  );
};

export default LibraryIndex;
