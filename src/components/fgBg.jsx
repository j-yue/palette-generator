import React, { useState, useContext } from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import withGrid from "./hoc/withGrid";
import ColorInput from "./colorInput";
import ColorInputsContext from "../context/colorInputsContext";

const FgBg = () => {
  const inputColors = useContext(ColorInputsContext);
  // const {bg, fg}
  // console.log(colorInputs);
  const { colorInputs, handleSwapClick } = inputColors;
  const { foreground, background } = colorInputs;
  // console.log(foreground, background);
  // console.log(colorInputs, handleSwapClick);
  return (
    <React.Fragment>
      <ColorInput name="Foreground" value={foreground} />
      <IconButton aria-label="Swap colors" onClick={() => handleSwapClick()}>
        <SwapHorizIcon />
      </IconButton>
      <ColorInput name="Background" value={background} />
    </React.Fragment>
  );
};

// export default FgBg;
export default withGrid(FgBg, "column", "space-around", "center");
