import React, {useState, useEffect} from "react";
import $ from 'jquery';
import Navigation from './Navigation';
import '../styles/Index.scss';

function Header({ currentPage, handlePageChange }) {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true) ;

    const headerHeight = $('header').outerHeight();
  
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset

           setVisible(position > moving);
           setPosition(moving)
        };
  
        window.addEventListener("scroll", handleScroll);
        
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })
  
    let headerClass;

    if (position === 0) {
        headerClass = "header-window-top"
    }
    else if (position > headerHeight && !visible) {
        headerClass = "header-up"
    } else {
        headerClass = "header-down"
    }

    return (
        <header className={headerClass}>
            <div className="header-content-container">
            <div id="name-description-container">
                <a href="#home"
                   onClick={() => handlePageChange('Home')}>
                <h1>Nick Martin</h1>
                <h2>UX Designer | Developer</h2>
                </a>
            </div>

            <Navigation handlePageChange={handlePageChange} />
            </div>
        </header>
    );
}

export default Header;

