import React from "react";
import { useContext } from "react/cjs/react.development";
import { ContextWatching, CreateWatchingContext } from "../Context/ContextWatching.Component";
import Movie from "../Movie/Movie.Component";
import Watching from "../Watching/Watching.Component";
const Comments = () => {
  return (
    <div>
      <ContextWatching>
        <Watching />
      </ContextWatching>
    </div>
  );
};
export default Comments;
