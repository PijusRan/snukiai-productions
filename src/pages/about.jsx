import "react";
import "./about.css";

import BG1 from "../assets/Background_L1.png";
import Logo from "../assets/Snukiai_productions.png"

export default function AboutPage(){
    return(
        <div>
            <div className="AboutSection">
            <img src={Logo} className="Logo"/>
                <p>
                Realiai trūputį ligoti esam...
                </p>
            </div>
            
            <img src={BG1} className="BG1"/>
        </div>
    )
}