import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import CloseContext from "../context/closeContext";

const CloseButton = () => {
  const closeContext = useContext(CloseContext);

  return (
    <IconButton
      aria-label="Remove the current image."
      onClick={() => closeContext.handleCloseClick()}
    >
      <CancelRoundedIcon />
    </IconButton>
  );
};

export default CloseButton;
