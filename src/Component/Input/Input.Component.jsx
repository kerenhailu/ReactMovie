import react from "react";
export const Input=(props)=>{
    const{TitleInput,NameInput,TypeInput,InputChange}=props;
return(<div>
    <label>{TitleInput}</label>
    <input onChange={InputChange} type={TypeInput} name={NameInput}></input>

</div>)
}
export default Input;