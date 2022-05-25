import React, {useState, useEffect} from "react";
import $ from 'jquery';
import '../styles/Index.scss';


function Footer() {
    return (
        <footer className="clearfix">
            <div className="diamond-accent"></div>

            <div className="footer-ui">
                <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

                <h6 id="contact-number"><a href="tel:720-409-0852">720.409.0852</a></h6>

                <div className="footer-links-icons">
                    <a href="https://github.com/n-r-martin" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/martinnickr/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/misterrubberburner/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
    </footer>
    );
}

export default Footer;

