import React from 'react';
import '../../styles/Index.scss';


function Home() {
  return (
    <main>
    <section id="landing-section">
      <div className="hero-text-block">
        <p>I like to do the <span>design</span> and sometimes other <span>stuff</span> too.</p>
      </div>

      <p id="landing-section-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam enim, reprehenderit repellendus adipisci corrupti tenetur officiis magnam aperiam dolorem, quam est perspiciatis quas cum nesciunt atque, amet culpa ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

      {/* <i className="fa fa-clone" aria-hidden="true"></i> */}

      <div id="work-anchor-point"></div>
    </section>

    <section id="project-cards">
      <article id="card-one" className="project-card">
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">
            <h4>Ares View</h4>
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
                
                {/* <!-- List is repeated to ensure animation doesn't 
                  get cut short when cards are at wider widths --> */}
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

      <article id="card-two" className="project-card">
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">
            <h4>Ares View</h4>
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
                
                {/* <!-- List is repeated to ensure animation doesn't 
                  get cut short when cards are at wider widths --> */}
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

      <article id="card-three" className="project-card">
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">
            <h4>Ares View</h4>
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
                
                {/* <!-- List is repeated to ensure animation doesn't 
                  get cut short when cards are at wider widths --> */}
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
      </section>
    </main>
  );
}

export default Home;
