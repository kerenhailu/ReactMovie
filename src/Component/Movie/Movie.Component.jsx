import react, { useContext } from "react";
import { ArrayMovieContext } from "../Context/ContextMovie.Component";

const Movie=()=>{
    const NameMovieContext = useContext(ArrayMovieContext);
    return(<div>
<h1>
     name Movies : {NameMovieContext.map((item)=>
     <div>
    <p>{item.movieName}</p> 
    <p>{item.rating}</p>)
    </div> )}</h1>
    </div>)
}
export default Movie;