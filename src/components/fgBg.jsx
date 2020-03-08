import React from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import withGrid from "./hoc/withGrid";
import ColorInput from "./colorInput";

const FgBg = () => {
  return (
    <React.Fragment>
      <ColorInput name="Foreground" value="#FFFFFF" />
      <IconButton aria-label="Swap colors">
        <SwapHorizIcon />
      </IconButton>
      <ColorInput name="Background" value="#000000" />
    </React.Fragment>
  );
};

// export default FgBg;
export default withGrid(FgBg, "column", "space-around", "center");
