import "react"

export default function PictureProp(props) {
    return(
        <div className="Vid">
            <a href={`https://youtu.be/${props.id}`}>
                <img src={`https://i.ytimg.com/vi/${props.id}/hq720.jpg`}/>
            </a>
            
            <h2> {props.title} </h2>
        </div>
    )
    
    
}

//<iframe src={`https://www.youtube.com/embed/${props.id}?controls=0&`}/>

//https://img.youtube.com/vi/yTKZcYUNOw0/0.jpg
