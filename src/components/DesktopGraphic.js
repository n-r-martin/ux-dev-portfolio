import React from "react";
import cyberpunkWheel from "../images/cyberpunk-wheel.svg";

function DesktopGraphic() {
    return (
        <div className='desktop-bg-outer-container'>
            <div className='desktop-bg-inner-container'>
                <img className="cyberpunk-wheel spin" src={cyberpunkWheel} alt="" />
            </div>
        </div>
    );
}

export default DesktopGraphic;








