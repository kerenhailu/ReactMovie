import React from "react";
export const ArrayMovieContext=React.createContext();
const arrayOfMovies=[{movieName:"batmen",rating:7},
{movieName:"Sleeping Beauty",rating:10},
{movieName:"Snow White",rating:71}]
export const ContextMovie=(props)=>{
    return(
<ArrayMovieContext.Provider value={arrayOfMovies}>
    {props.children}
</ArrayMovieContext.Provider>
    )
}
