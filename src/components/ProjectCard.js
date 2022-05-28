import React, { useState, useEffect } from "react";
import $ from 'jquery';
import '../styles/Index.scss';


function ProjectCard(props) {
    return (
        <article id="card-one" className="project-card">
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">

            <h4>{props.title}</h4>
            <h5>Interactive Map of Mars</h5>
            
            <p>An educational web-based application for learning more about Mars, its geography, and human efforts to better understand our planetary neighbor.</p>
          </div>

          <div className="card-bottom-container">
            <div className="role-marquee-container">
                    <ul className="role-marquee">
                        <li className='listitem'>UX Analysis</li>
                        <li className='listitem'>UX Design</li>
                        <li className='listitem'>UI Design</li>
                        <li className='listitem'>Development</li>
                        <li className='listitem'>DevOps</li>
                    </ul>
          </div>

          <a className="card-button-link" href="project-one.html">
            <div className="card-button-link-content">
              <p>View</p>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </div>
          </a>
      
          </div>
        </div>
      </article>
    );
    }
export default ProjectCard;