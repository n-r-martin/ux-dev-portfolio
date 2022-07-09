import React from 'react';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import Marquee from "react-marquee-slider";
import { FiSend, FiFileText } from "react-icons/fi";
import bgGraphic from '../../images/about-me-bg.svg';
import me from '../../images/nick-martin.jpg';


// Going to have implement database for this
// How do we transform the params back into the original formatting as listed in the database entry
// Replacing hyhens with spaces should be easy enough, but can we ignore letter case?


function AresView(props) {
  const projectTitle = props.title;
  const projectHeader = props.projectHeader;
  const roles = props.roles;



  return (
    <>
    <section className="project-heading">
      <div className="project-header-text-container">
        <h4>{projectTitle}</h4>
        <h5>{projectHeader.projectSubheading}</h5>

        <p className="project-summary">{projectHeader.projectDescription}</p>

        <div className="project-role-list-container">
          <ul className="project-role-list">
            <span className='role-list-grident-left'></span>
            <Marquee velocity={40}>
            {roles}
            </Marquee>
            <span className='role-list-grident-right'></span>
          </ul>
        </div>
      </div>

      <div className="project-header-img-container"></div>  
    </section>

    <section className="project-main-container">
      <p>Try-hard enamel pin yuccie roof party vinyl. 8-bit humblebrag chia yr readymade tofu food truck schlitz. Chicharrones pabst +1, glossier affogato tacos hammock freegan semiotics 3 wolf moon keffiyeh cloud bread literally fanny pack. Mlkshk try-hard slow-carb glossier af food truck fam neutra crucifix subway tile skateboard. Whatever blog fashion axe fam umami cold-pressed cred post-ironic selfies vaporware bespoke echo park ugh.</p>
      <p>Pug affogato leggings, intelligentsia normcore gastropub ethical PBR&B. Tousled thundercats umami palo santo fam tumeric, irony chia adaptogen humblebrag. Helvetica jean shorts tilde paleo celiac. Williamsburg ethical pitchfork whatever locavore. Ramps aesthetic forage pitchfork chia, disrupt lomo selvage semiotics kinfolk pickled messenger bag. Leggings man braid asymmetrical vexillologist, glossier pitchfork keytar raw denim single-origin coffee direct trade mlkshk ennui. Post-ironic 8-bit butcher, shabby chic hot chicken craft beer kale chips.</p>
      <p>Wayfarers mlkshk sustainable VHS. Echo park twee af, forage synth austin everyday carry lomo street art pitchfork. Raclette adaptogen farm-to-table fam lumbersexual sartorial la croix. Next level kombucha air plant fixie scenester squid locavore fashion axe occupy raclette. Pabst iceland brunch hoodie cardigan.</p>
      <p>Polaroid gochujang health goth chicharrones twee letterpress, flannel seitan fixie selvage aesthetic messenger bag iceland. Meggings thundercats PBR&B four loko sartorial, kickstarter craft beer kinfolk direct trade man braid intelligentsia vape tattooed biodiesel. Vice roof party kitsch cornhole flexitarian, seitan tattooed kinfolk raw denim hoodie salvia messenger bag. Tumeric fixie hot chicken prism williamsburg. Pabst williamsburg live-edge, hashtag beard slow-carb offal roof party squid chambray. Next level twee everyday carry, fingerstache bitters 8-bit etsy blog asymmetrical ramps pitchfork.</p>
      <p>Pickled la croix etsy, narwhal poutine copper mug polaroid tilde blue bottle. Lo-fi tumblr keffiyeh post-ironic narwhal flexitarian messenger bag lomo migas. XOXO edison bulb meggings fixie messenger bag before they sold out quinoa kickstarter squid blue bottle post-ironic roof party kombucha trust fund. Retro distillery taxidermy, craft beer flannel celiac pitchfork pok pok cold-pressed pour-over yuccie tumblr cardigan vice. Tilde church-key mlkshk wolf flannel. Pok pok etsy raclette four loko locavore 3 wolf moon. Tumblr mustache stumptown tofu ugh portland ramps tousled truffaut.</p>
    </section>
    </>
  );
}

export default AresView;