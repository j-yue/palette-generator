import React from "react";
import { Paper, Container, Grid } from "@material-ui/core/";
import ContrastRatio from "./contrastRatio";
import ImageArea from "./imageArea";

const Actions = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      style={{ height: "100vh", width: "30vw" }}
    >
      <Paper variant="outlined">
        <ImageArea />
        <ContrastRatio />
      </Paper>
    </Grid>
  );
};

export default Actions;
