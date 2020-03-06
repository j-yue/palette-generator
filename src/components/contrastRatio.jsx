import React from "react";
import { Paper, Container, Grid } from "@material-ui/core";
import ColorInput from "./colorInput";

const ContrastRatio = () => {
  return (
    <Paper variant="outlined" style={{ height: "30vh" }}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <h1>Contrast Ratio</h1>
        <ColorInput name="Foreground" value="#888" />
        <ColorInput name="Background" value="#CCC" />
      </Grid>
    </Paper>
  );
};

export default ContrastRatio;
