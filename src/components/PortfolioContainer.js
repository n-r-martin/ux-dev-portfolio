import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../utils/scrollToTop";
import Header from './Header';
import Footer from "./Footer";

import Home from './pages/Home';
import About from './pages/About';
import UnderConstruction from './pages/UnderConstruction';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const workRef = useRef(null);
  
  const goToWork = () =>
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: "smooth",
      // You can also assign value "auto"
      // to the behavior parameter.
    });

  // const [currentPage, setCurrentPage] = useState('Home');

  // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   window.scrollTo(0, 0);
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'UnderConstruction') {
  //     return <UnderConstruction />;
  //   } 
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="play" element={<UnderConstruction />} />
          </Routes>
        </ScrollToTop>
      <Footer />
    </div>
  );
}
