import React from "react";

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
