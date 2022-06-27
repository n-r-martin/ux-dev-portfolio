import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import Navigation from './Navigation';

function Header(props) {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [headerHeight, setHeaderHeight] = useState($('header').outerHeight())
    
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.pageYOffset
           let newHeight = $('header').outerHeight();

            // Initial state of "visible" is true, and the new argument evaluate whether 'position' on rerender is greater than 'moving' and either set the state to true or false. Example: scrolling up means that 'position' IS greater than 'moving' and therefore 'visible' is set to true
           setVisible(position > moving);
           setPosition(moving)
           setHeaderHeight(newHeight);
        };
  
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

    return (
        <header className={headerClass}>
            <div className="header-content-container">
            <Link to="/">
            <div id="name-description-container">
                <h1>Nick Martin</h1>
                <h2>UX Designer | Developer</h2>
            </div>
            </Link>

            <Navigation />
            </div>
        </header>
    );
}

export default Header;

