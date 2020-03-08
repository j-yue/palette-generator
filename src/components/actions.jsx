import React from "react";
import { Paper, Container, Grid } from "@material-ui/core/";
import withGrid from "./hoc/withGrid";
import ContrastRatio from "./contrastRatio";
import ImageArea from "./imageArea";

const Actions = () => {
  return (
    <React.Fragment>
      {/* <Paper
        style={{ width: "100%", height: "100%", border: "3px solid blue" }}
      > */}
      <Container style={{ height: "65%" }}>
        <ImageArea />
      </Container>
      <Container style={{ height: "30%", textAlign: "center", margin: "0" }}>
        <ContrastRatio />
      </Container>
      {/* </Paper> */}
    </React.Fragment>
  );
};

// export default Actions;
export default withGrid(Actions, "column", "space-evenly", "center");
