import "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import useSound from "use-sound"
import "./home.css";

//Assets
import SnukiaiLogo from "../assets/Logo.svg";
import WooshSound from "../assets/sounds/Woosh.mp3";
import PunchSound from "../assets/sounds/Punch.mp3";

import VideoImage from "../assets/VideoButton.png";
import AboutImage from "../assets/AboutButton.png";
import GameImage from "../assets/GameButton.png";


export default function HomePage(){
    const [playWoosh, {stopWoosh}] = useSound(WooshSound);
    const [playPunch] = useSound(PunchSound);

    return(
        <div className='Main'>
                
                
                <section className="LogoSection">
                    <motion.img src={SnukiaiLogo} className="LogoImage" whileHover={{scale:1.1}}/>
                </section>

                <section className="RadauskoSection">
                    <pre className="RadauskoText">
                        {`Velniop nueina aukštas menas,\n Ir nebegalima liūdėt,\n  Kada pavasarį kaštanas\n   Už lango pradeda žydėt.`}
                    </pre>
                </section>

                <section className="InfoSection">
                    <Link to="/apie" className="InfoLink">
                        <motion.div
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}
                            onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}
                        >
                            <img src={AboutImage} className="InfoImage"/>
                            <p className="InfoText">Apie</p>
                        </motion.div>
                    </Link>

                    <Link to="/video" className="InfoLink">
                        <motion.div
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}
                            onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}
                        >
                            <img src={VideoImage} className="InfoImage"/>
                            <p className="InfoText">Videkai</p>
                        </motion.div>
                    </Link>

                    <Link to="/404" className="InfoLink">
                        <motion.div
                            whileHover={{scale:1.2}}
                            whileTap={{scale:0.8}}
                            onMouseEnter={playWoosh} onMouseLeave={stopWoosh} onClick={playPunch}
                        >
                            <img src={GameImage} className="InfoImage"/>
                            <p className="InfoText">Kiškis Petriškis</p>
                        </motion.div>
                    </Link>
                </section>
        </div>
    )
}