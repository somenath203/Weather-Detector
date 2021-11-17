import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// defaultProps come into play when for some mistake(maybe, for our typing mistake), we forget to pass property
// (here, 'message' property) inside <Spinner>.
Spinner.defaultProps = {
  message: "Waiting For Location Request....",
};

export default Spinner;
