import React, { useState } from "react";
import '../styles/Index.scss';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import UnderConstruction from './pages/UnderConstruction';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'UnderConstruction') {
      return <UnderConstruction />;
    }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Header handlePageChange={handlePageChange} />
    {renderPage()}
    </div>
  );
}
