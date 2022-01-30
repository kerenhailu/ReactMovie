import React,{ useContext } from "react";
import { ObjContext } from "../Component/Context/ContextObj";
const Massage = () => {
  let ContextsOfObj=useContext(ObjContext);
  function changeValue(event){
    ContextsOfObj.obj={firstName :event.target.value};
  }
  return <div>
      <input onChange={changeValue} type="text" />
      <button onClick={()=>ContextsOfObj.setObj(ContextsOfObj.obj)}>click</button>
      <h1>obj : {ContextsOfObj.obj.firstName}</h1>
  </div>;
};
export default Massage;