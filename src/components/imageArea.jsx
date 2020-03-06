import React from "react";
import { Container } from "@material-ui/core";
import UploadButton from "./uploadButton";
import UploadedImages from "./uploadedImages";

const ImageArea = () => {
  return (
    <Container style={{ height: "70vh" }}>
      <UploadButton />
      <UploadedImages />
    </Container>
  );
};

export default ImageArea;
