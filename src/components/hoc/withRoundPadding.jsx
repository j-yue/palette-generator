import React from "react";
import Grid from "@material-ui/core/Grid";

const withRoundPadding = (Component, radius) => ({ ...props }) => {
  return (
    <span
      style={{
        borderRadius: "50%",
        border: "2px solid transparent"
      }}
    >
      <Component {...props} />
    </span>
  );
};

export default withRoundPadding;
