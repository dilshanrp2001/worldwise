import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
    </div>
  );
}

export default HomePage;
