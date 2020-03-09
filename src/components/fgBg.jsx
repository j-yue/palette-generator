import React from "react";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import IconButton from "@material-ui/core/IconButton";
import withGrid from "./hoc/withGrid";
import ColorInput from "./colorInput";

const FgBg = ({ colorInputs, handleClick, handleChange }) => {
  const [foreground, background] = Object.values(colorInputs);

  return (
    <React.Fragment>
      <ColorInput
        name="Foreground"
        value={foreground}
        handleChange={handleChange}
      />

      <IconButton aria-label="Swap colors" onClick={() => handleClick()}>
        <SwapHorizIcon />
      </IconButton>

      <ColorInput
        name="Background"
        value={background}
        handleChange={handleChange}
      />
    </React.Fragment>
  );
};

export default withGrid(FgBg, "column", "space-around", "center");
