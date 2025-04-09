import "react";
import "./game.css";

import LoadingGif from "../assets/loading.gif";

export default function GamePage(){
    return(
        <div className="Game">
            <img src={LoadingGif} className="Loading"/>
            <iframe frameborder="0" src="https://itch.io/embed-upload/11588089?color=743f39" allowfullscreen="" width="640" height="380"></iframe>
        </div>
    )
}