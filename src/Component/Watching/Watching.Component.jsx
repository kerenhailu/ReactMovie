import react, { useEffect, useState, useContext } from "react";
import { CreateWatchingContext } from "../Context/ContextWatching.Component";
const Watching = () => {
  const [nameUser, SetNameUser] = useState("");
  useEffect(() => {
    let nameOfUser = prompt("your name :");
    SetNameUser(nameOfUser);
    alert(`Welcomeeee, ${nameOfUser}`);
  }, []);
  const [count, SetCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const ContextWatching = useContext(CreateWatchingContext);

  const Up = () => {
    SetCount((item) => item + 1);
  };
  const Dwon = () => {
    SetCount((item) => item - 1);
  };
  const Reset = () => {
    SetCount((item) => (item = 0));
  };
  return (
    <div>
      <h1>comp watching : </h1>

      <h1>
        name views :{" "}
        {ContextWatching.map((item) => (
          <div>
            <p> name : {item.name}</p>
            <p>num text : {item.text}</p>
            <p>num numberView : {item.numberView}</p>
          </div>
        ))}
      </h1>
      {/* //////////////////////////////////////// */}
      <h1>{count}</h1>
      <button onClick={Up}>Up </button>
      <button onClick={Dwon}>Dwon </button>
      <button onClick={Reset}>Reset </button>
      <h1>nameeeee {nameUser}</h1>
      <label>name : </label>
    </div>
  );
};
export default Watching;
