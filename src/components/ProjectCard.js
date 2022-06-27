import React, { useRef } from "react";
import useIntersection from "../utils/intersectionObserver";
import Marquee from "react-marquee-slider";

function ProjectCard(props) {
    // Intersection Observer code to programmatically apply and remove rasied class to the respective cards
    
    const ref = useRef();

    const inViewport = useIntersection(ref); // Trigger if 200px is visible from the element

    const raisedClass = inViewport ? "raised" : ""

    // ///////////////////////////////////

    // Roles list items that we feed to the Marquee element

      // Roles list generation -- animation handled by front-end JS
      const roleData = props.roles

      let roles = roleData.map((role, index) => (
        <li key={index} className='listitem'>{role}</li>
      ))

      // Tripling or doubling roles list if role number is low -- this ensures there are no awkward gaps in the animation
      // Also modifying marquee velocity dpeending on the number of items after replication
      let marqueeVelocity;

      if (roles.length <= 2) {
        roles.push(...roles);
        roles.push(...roles);
        marqueeVelocity = 40;
      } else if (roles.length === 3) {
        roles.push(...roles)
        marqueeVelocity = 50;
      } else {
        marqueeVelocity = 60;
      }

    return (
        <article ref={ref} id={props.id} className={"project-card " + raisedClass}>
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">

            <h4>{props.title}</h4>
            <h5>{props.subHeading}</h5>
            
            <p>{props.description}.</p>
          </div>

          <div className="card-bottom-container">
            <div className="role-marquee-container">
              <ul className="role-marquee">
                <Marquee velocity={marqueeVelocity}>{roles}</Marquee>
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