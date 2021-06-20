import React from "react";

import {default as rectbg} from '../res/svg/rect_tilt.svg';
import {default as fire} from '../res/svg/fire.svg';

function Progress(){
    return(
        <div height="100%">
            <img src={rectbg} className="imgceter"  alt="opion"/>
            <img src={fire} className="imgceter1"  alt="opion"/>
        </div>
       
    )
}
export default Progress;
