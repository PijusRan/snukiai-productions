import "react";
import "./about.css";

import BG1 from "../assets/Background_L1.png";
import Logo from "../assets/Snukiai_productions.png"

export default function homePage(){
    return(
        <div>
            <div className="AboutSection">
            <img src={Logo} className="Logo"/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            


            <img src={BG1} className="BG1"/>
        </div>
    )
}