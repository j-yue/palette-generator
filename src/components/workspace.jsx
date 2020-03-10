import React from "react";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CurrentImage from "./currentImage";
import Palette from "./palette";
import ToggleCopyMode from "./toggleCopyMode";

const Workspace = ({ currentImage, dominant, palette }) => {
  return (
    <Paper style={{ width: "100%", height: "100%" }}>
      <Container style={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} style={{ height: "60%", width: "100%" }}>
          {currentImage && <CurrentImage />}
        </Grid>
        <Grid item xs={12} style={{ height: "20%", width: "100%" }}>
          <Palette dominant={dominant} palette={palette} />
        </Grid>
        <Grid item xs={12} style={{ height: "20%", width: "100%" }}>
          <ToggleCopyMode />
        </Grid>
      </Container>
    </Paper>
  );
};

export default Workspace;
