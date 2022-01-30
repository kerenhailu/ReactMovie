import React ,{ useState } from "react";
export const ObjContext=React.createContext();
export const ContextObj=({children})=>{
    const [obj,setObj]=useState({});
    return(
<ObjContext.Provider value={{obj,setObj}}>
    {children}
</ObjContext.Provider>
    )
}