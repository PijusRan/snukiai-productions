import "react";
import { Link } from "react-router-dom";
import "./home.css";

//Assets
import BG1 from "../assets/Background_L1.png";
import ButtonAbout from "../assets/Button_1.png";
import ButtonVideo from "../assets/Button_2.png";
import SnukiaiLogo from "../assets/Snukiai_productions.png";


export default function homePage(){
    return(
        <div className='Main'>
            <div className="Buttons">

                <Link to="/snukiai-productions/apie" className="Link">
                    <img src={ButtonAbout}/>
                    <h1>APIE</h1>
                </Link>

                <Link to="/snukiai-productions/404" className="Link">
                    <img src={SnukiaiLogo}/>
                </Link>

                <Link to="/snukiai-productions/video" className="Link">
                    <img src={ButtonVideo}/>
                    <h1>VIDEKAI</h1>
                </Link>
                
            </div>

            <img src={BG1} className="BG1"/>
        </div>
    )
}