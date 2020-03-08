import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CurrentImage from "./currentImage";
import Palette from "./palette";

const Workspace = ({ dominant, palette }) => {
  return (
    <Paper style={{ width: "100%", height: "100%" }}>
      <Container style={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} style={{ height: "70%", width: "100%" }}>
          <CurrentImage />
        </Grid>
        <Grid item xs={12} style={{ height: "30%", width: "100%" }}>
          <Palette dominant={dominant} palette={palette} />
        </Grid>
      </Container>
    </Paper>
  );
};

export default Workspace;
