import React from "react";
import loading from "./loading.gif";

const Spinner = (props) => {
  return (
    <div className="text-center">
      <img className="my-3" src={props.loading} alt="loading" />
    </div>
  );
};

export default Spinner;
