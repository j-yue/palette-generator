import React, { useContext } from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import withGrid from "./hoc/withGrid";
import ColorInput from "./colorInput";
import ColorInputsContext from "../context/colorInputsContext";

const FgBg = () => {
  const inputColors = useContext(ColorInputsContext);
  const { colorInputs, handleSwapClick, handleColorChange } = inputColors;
  const { foreground, background } = colorInputs;
  return (
    <React.Fragment>
      <ColorInput
        name="Foreground"
        value={foreground}
        handleChange={handleColorChange}
      />
      <IconButton aria-label="Swap colors" onClick={() => handleSwapClick()}>
        <SwapHorizIcon />
      </IconButton>
      <ColorInput
        name="Background"
        value={background}
        handleChange={handleColorChange}
      />
    </React.Fragment>
  );
};

export default withGrid(FgBg, "column", "space-around", "center");
