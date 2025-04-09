import "react";
import "./about.css";

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
        </div>
    )
}