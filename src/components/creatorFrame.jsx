export default function CreatorComponent({name, desc, imgURL, film}){
    return(
        <div className="creatorComponent">
            <article>
                <h2>{name}</h2>
                <p>{desc}</p>
                <h3>Filmai: {(film).toUpperCase()}</h3>
            </article>
            
            <img src={imgURL}/>
            
            <hr/>
        </div>
    )
}
