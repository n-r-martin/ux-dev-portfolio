import React, {useState, useEffect} from "react";
import { Pivot as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";

import $ from 'jquery';
import arrowLogo from '../images/arrow-logo.svg'
import Navigation from './Navigation';
import MobileNav from "./MobileNav";

function Header(props) {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [headerHeight, setHeaderHeight] = useState($('header').outerHeight())

    const [isMobileViewport, setIsMobileViewport] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Function to simply close the menu if it is open when any link is clicked -- toggle will sometimes open the menu via a link so we need a simple close.
    const closeMobileMenu = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }

    // Find all the links and assign the closeMobileMenu function, which only fires IF the mobile menu is open.
    // All the links have to coverted to a "true array" before we can add the event listeners
    useEffect(() => {
        const allLinks = document.getElementsByTagName('a');
        const allLinksArr = Array.prototype.slice.call(allLinks);

        allLinksArr.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        }); 
        return () => {
            allLinksArr.forEach(link => {
               link.removeEventListener('click', closeMobileMenu);
            });
        };
    });

      if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
    }
    

    // Handling the window resize does two things
    // 1. Dictates whether or not the hamburger menu is shown versus the full navigation
    // 2. Close the mobile menu IF it's open when the window is resized
    const handleResize = () => {
        setIsMobileViewport(window.innerWidth < 768)
   
        if (!isMobileViewport && isMobileMenuOpen) {
           setIsMobileMenuOpen(false);
        }
       }

    // Our React hook for managing the eventListener, also calls the handle resize function on initial load
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })
    
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           let newHeight = $('header').outerHeight();

            // Initial state of "visible" is true, and the new argument evaluate whether 'position' on rerender is greater than 'moving' and either set the state to true or false. Example: scrolling up means that 'position' IS greater than 'moving' and therefore 'visible' is set to true
           setVisible(position > moving);
           setPosition(moving)
           setHeaderHeight(newHeight);
        };


        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }

        // isMobileMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  
        window.addEventListener("scroll", handleScroll);
        
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })
  
    let headerClass;

    // Cannot use a simple ternary for visible or not visible since we technially have 3 states for the header -- dynamically apply CSS classes depending on whether or not the user is scrolling AND if they are at the top of the page or not...
    // When the header is at the top - expand to larger height and no bottom-border or shadow -- postion = 0 (top of page)
    if (position === 0 && visible) {
        headerClass = "header-window-top"
    }
    // When user is scrolling down but we don't want the header to disapper immediately when leaving the top of the page, so only disappear after the user has scrolled past whatever the height of the header is
    else if (position > headerHeight && !visible) {
        headerClass = "header-up"
    // Lastly, if user are scrolling up, header is down
    } else {
        headerClass = "header-down"
    }

    // // const menuOpenedClass = isMobileMenuOpen ? "opened" : "closed";
    // !isMobileMenuOpen ? console.log('menu was closed') : console.log('menu was opened');

    return (
        <>
        <header className={headerClass}>
            <div className="header-content-container">
            <Link to="/">
            <div className="logo-name-container">
                <img id='logo-header' src={arrowLogo} alt="logo of arrow piercing through tech stack icon" />
                <div id="name-description-container">
                    <h1>Nick Martin</h1>
                    <h2>UX Designer | Developer</h2>
                </div>
            </div> 
            </Link>   
           
           {isMobileViewport ? 
                <button className="mobile-menu-toggle">
                    <Hamburger size={32} duration={0.2} toggled={isMobileMenuOpen} onToggle={setIsMobileMenuOpen} />
                </button>
            :
                <Navigation />
            } 
            </div>
        </header>

        <div>
        {isMobileMenuOpen ? (
                <MobileNav />
        ) : (
            null
        )}
        </div>
        </>
    );
}

export default Header;

