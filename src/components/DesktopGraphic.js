import React from "react";
import cyberpunkWheel from "../images/cyberpunk-wheel.svg";
import spacewave from "../images/spacewave.svg";
import calculation from "../images/calculation.svg";
import topography from "../images/topography.svg";


function DesktopGraphic() {
    return (
        <div className='desktop-bg-outer-container'>
            <div className='desktop-bg-inner-container'>
                <img className="cyberpunk-wheel spin" src={cyberpunkWheel} alt="" />
                <div className='spacey-ui-graphics'>
                    <img className="spacewave-img" src={spacewave} alt="" />
                    <img className="calculation-img" src={calculation} alt="" />
                    <img className="topography-img" src={topography} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DesktopGraphic;








