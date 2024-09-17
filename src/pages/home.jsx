import "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import useSound from "use-sound"
import "./home.css";

//Assets
import BG1 from "../assets/Background_L1.png";
import ButtonAbout from "../assets/Button_1.png";
import ButtonVideo from "../assets/Button_2.png";
import SnukiaiLogo from "../assets/Snukiai_productions.png";
import WooshSound from "../assets/sounds/Woosh.mp3";
import PunchSound from "../assets/sounds/Punch.mp3";



export default function HomePage(){
    const [playWoosh, {stopWoosh}] = useSound(WooshSound);
    const [playPunch] = useSound(PunchSound);

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    return(
        <div className='Main'>
            <div className="Buttons">
                

                <Link to="/apie" className="Link">
                    <motion.div
                        whileHover={{scale:1.2, rotate:getRandom(-30,30)}}
                        whileTap={{scale:0.8}}
                        onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}
                    >
                        <img src={ButtonAbout} />
                        <h1>APIE</h1>
                    </motion.div>
                </Link>

                <Link to="/404" className="Link">
                    <motion.img src={SnukiaiLogo} className="SnukiuLogo" whileHover={{scale:1.5}} onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}/>
                </Link> 

                <Link to="/video" className="Link" >
                    <motion.div
                        whileHover={{scale:1.2, rotate:getRandom(-30,30)}}
                        whileTap={{scale:0.8}}
                        onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}
                    >
                        <img src={ButtonVideo}/>
                        <h1>VIDEKAI</h1>
                    </motion.div>
                    
                </Link>
                
            </div>

            <img src={BG1} className="BG1"/>
        </div>
    )
}