import react, { useState } from "react";

const Votes = () => {
  const [like, SetLike] = useState(0);
  const likeUp = () => {
    SetLike((item) => item + 1);
  };
  const likeDwon = () => {
    SetLike((item) => item - 1);
  };
  const Reset = () => {
    SetLike((item) => (item = 0));
  };
  return (
    <div>
      <h1>{like}</h1>
      <button onClick={likeUp}>clickk to up </button>
      <button onClick={likeDwon}>clickk to Dwon </button>
      <button onClick={Reset}>clickk to Reset </button>
    </div>
  );
};
export default Votes;
