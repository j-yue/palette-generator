import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

const CloseButton = () => {
  return (
    <IconButton aria-label="Remove the current image.">
      <CancelRoundedIcon />
    </IconButton>
  );
};

export default CloseButton;
