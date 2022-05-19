import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

import Footer from "./Footer";
import NewCard from "./NewCard";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Jumbotron />
      </div>

      <div className="container">
        <NewCard />
      </div>
      {/* <div className="row size mx-5">

        <div className="d-flex">
        <Card class={"card col-md-3 col-12"}/>
        <Card class={"card col-md-3 col-12"}/>
        <Card class={"card col-md-3 col-12"}/>
        <Card class={"card col-md-3 col-12"}/>
        </div>
        
      </div> */}

      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default Home;
