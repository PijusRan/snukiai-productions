import "react";
import "./about.css";

import creatorData from "../Creators.json";
import CreatorComponent from "../components/creatorFrame";

export default function AboutPage(){
    return(
        <div className="creatorSection">
            {creatorData.map((item) => (
                <CreatorComponent
                    className = "creatorWindow"
                    key={item.ID}
                    name={item.Name}
                    desc={item.Description}
                    imgURL={item.ImageURL}
                    film={item.Movies}
                />
            ))}
        </div>
    )
}