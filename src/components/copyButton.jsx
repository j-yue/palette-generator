import React from "react";
import IconButton from "@material-ui/core/IconButton";

const CopyButton = ({ Component, name, ...props }) => {
  return (
    <IconButton>
      <Component {...props} />
      {name}
    </IconButton>
  );
};

export default CopyButton;
