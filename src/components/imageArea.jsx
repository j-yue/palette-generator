import React from "react";
import { Grid, Container } from "@material-ui/core";
import UploadButton from "./uploadButton";
import UploadedImages from "./uploadedImages";

const ImageArea = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      style={{ height: "70vh", width: "100%" }}
    >
      <UploadButton />
      <Container>
        <UploadedImages />
      </Container>
    </Grid>
  );
};

export default ImageArea;
