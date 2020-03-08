import React from "react";
import { Paper, Container, Grid } from "@material-ui/core";
import ColorInput from "./colorInput";

const ContrastRatio = () => {
  return (
    <React.Fragment>
      <h1>Contrast Ratio</h1>
      <ColorInput name="Foreground" value="#888" />
      <ColorInput name="Background" value="#CCC" />
    </React.Fragment>
  );
};

export default ContrastRatio;
