import React from "react";
import { Paper, Container } from "@material-ui/core";
import ColorInput from "./colorInput";

const ContrastRatio = () => {
  return (
    <Paper variant="outlined" style={{ height: "30vh" }}>
      <h1>Contrast Ratio</h1>
      <ColorInput name="Foreground" value="#888" />
      <ColorInput name="Background" value="#CCC" />
    </Paper>
  );
};

export default ContrastRatio;
