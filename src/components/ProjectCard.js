import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { FiGithub, FiExternalLink, FiMap } from "react-icons/fi";
import { DiReact, DiMongodb, DiNodejsSmall, DiJsBadge } from "react-icons/di";
import { IconName } from "react-icons/fa";
import { SiNodedotjs, SiLeaflet, SiMongodb, SiReact, SiJavascript, SiExpress, SiAdobexd } from "react-icons/si";
import useIntersection from "../utils/intersectionObserver";
import Marquee from "react-fast-marquee";

function ProjectCard(props) {
    // Intersection Observer code to programmatically apply and remove rasied class to the respective cards
    
    const ref = useRef();

    const inViewport = useIntersection(ref); // Trigger if 200px is visible from the element

    const raisedClass = inViewport ? "raised" : ""

    // ///////////////////////////////////

    // Assigned JSON data passed through props to variables
    const title = props.title;
    const projectImg = props.projectHeader.headerImgUrl;
    const subHeading = props.projectHeader.projectSubheading;
    const description = props.projectHeader.projectDescription;
    const projectLink = props.projectLink

    // Roles list items that we feed to the Marquee element

      // Roles list generation -- animation handled by front-end JS
      const roleData = props.projectHeader.projectRoles;

      // Tripling or doubling roles list if role number is low -- this ensures there are no awkward gaps in the animation
      // Also modifying marquee velocity dpeending on the number of items after replication
      let marqueeVelocity = roleData.length * 12.5;

      if (roleData.length <= 2) {
        roleData.push(...roleData);
        roleData.push(...roleData);
      } else if (roleData.length > 2 && roleData.length <= 4) {
        roleData.push(...roleData);
      }

      // Mapping the potentially duplicated or triplicated roleData to an array of list items to be used in the respective marquees
      let roles = roleData.map((role, index) => (
        <li key={index} className='listitem'>{role}</li>
      ))

    return (
        <article ref={ref} id={props.id} className={"project-card " + raisedClass}>
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        {/* style={{backgroundImage: 'url(' + require('./images/sword.png') + ')'}} */}
        <div className="project-card-img-container"  style={{ backgroundImage: `url("images${projectImg}")` }}></div>  

        <div className="project-card-text-and-ui">
          <div className="external-icons">
              <IconContext.Provider value={{ className: "mobile-footer-icons", size: 26 }}>
                <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiGithub /></a>
                <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiExternalLink /></a>
              </IconContext.Provider>
          </div>
          <div className="project-card-text-container">

            <h4>{title}</h4>
            <h5>{subHeading}</h5>
            
            <p>{description}</p>

            <ul className="technology-stack">
              <IconContext.Provider value={{ className: "techstack-icons", size: 16 }}>
                <li><SiReact />React</li>
                <li><SiMongodb />MongoDB</li>
                <li><SiNodedotjs />NodeJS</li>
                <li><SiExpress/>ExpressJS</li>
                <li><SiLeaflet />LeafletJS</li>
                <li><SiAdobexd />Adobe XD</li>
              </IconContext.Provider>
            </ul>
          </div>

          <div className="card-bottom-container">
            <div className="role-marquee-container">
              <ul className="role-marquee">
                <Marquee gradient={false} speed={marqueeVelocity}>{roles}</Marquee>
              </ul>
            </div>

            <Link className="card-button-link" to={`work/${projectLink}`}>
              <div className="card-button-link-content">
                <p>Read More</p>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </div>
            </Link>
      
          </div>
        </div>
        
      </article>
    );
    }
export default ProjectCard;