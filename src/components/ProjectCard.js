import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../utils/intersectionObserver";
import $ from 'jquery';
import '../styles/Index.scss';



function ProjectCard(props) {
    // Roles list generation -- animation handled by front-end JS
    const roleData = props.roles

    const roles = roleData.map((role, index) => (
      <li key={index} className='listitem'>{role}</li>
    ))

    // Dupicating list so there are no awkward gaps in the animation, especially when the list contains few items 
    const roleListDuped = [roles, roles];
    



    const ref = useRef();
    // const cardHeight = ref.current?.clientHeight;
    // console.log(cardHeight);
    const inViewport = useIntersection(ref); // Trigger if 200px is visible from the element

    // if (inViewport) {
    //     console.log('in viewport:', ref.current);
    // }


  const raisedClass = inViewport ? "raised" : ""


    // /////////////////////////

    // const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    // const [isInView, setInView] = useState(false);

  // useEffect(() => {
  //     const onScroll = () => {

  //       // console.log(scrollPos);
        
        

  //       const cardPos = cardRef.current.getBoundingClientRect().bottom;
  //       let windowBottom = scrollPos + window.innerHeight;

  //       // console.log(windowBottom);
  //       // console.log(cardPos);

  //       console.log(scrollPos);
  
       

  //       let moving = window.scrollY;
        

  //       setInView(cardPos === windowBottom);
  //       setScrollPos(moving);
  //     };
  //     window.addEventListener("scroll", onScroll);

  //     return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollPos, isInView]);

  // const raisedClass = isInView ? "raised" : ""

  // ////////////////////////////

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
                        {roleListDuped}
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