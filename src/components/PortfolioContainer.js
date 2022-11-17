import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/scrollToTop";
import Header from './Header';
import Footer from "./Footer";
import MediaLinks from "./MediaLinks";

import Home from './pages/Home';
import Project from "./pages/Project";
import FourOhFour from "./pages/FourOhFour";


export default function PortfolioContainer() {
  return (
    <>
      <Header />
        <ScrollToTop>
          <Routes>
            <Route path="*" element={<FourOhFour />} />
            <Route path="/" element={<Home/>} />
            <Route path="/ux-dev-portfolio" element={<Home/>} />
            <Route path="work/:project" element={<Project/>} />
          </Routes>
        </ScrollToTop>
      <Footer />
      <MediaLinks />
      </>
  );
}
