import React from "react";
import calculation from "../images/mobile-bg-watermark.svg";



function MobileGraphic() {
    return (
        <div className='mobile-bg-outer-container'>
            <div className='mobile-bg-inner-container'>
                <img className="mobile-landing-graphic" src={calculation} alt="" />
            </div>
        </div>
    );
}

export default MobileGraphic;








