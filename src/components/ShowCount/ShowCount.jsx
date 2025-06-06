import React from "react";
import "./ShowCount.css";

function ShowCount({ count }) {
  return (
    <h2>
      You clicked here {count} {count === 1 ? "time" : "times"}
    </h2>
  );
}

export default ShowCount;
