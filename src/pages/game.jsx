import "react";
import "./game.css";

import KiskisPetriskis from "../assets/Running.gif";

export default function GamePage(){
    return(
        <div className="Game">
            <h1>PIJAU DARYK ZAIDIMA JOBSIKMAT</h1>
            <img src={KiskisPetriskis}/>
        </div>
    )
}