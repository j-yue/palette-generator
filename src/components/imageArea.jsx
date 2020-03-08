import React from "react";

import { Grid, Container } from "@material-ui/core";
import withGrid from "./hoc/withGrid";
import UploadButton from "./uploadButton";
import UploadedImages from "./uploadedImages";

const ImageArea = () => {
  return (
    <React.Fragment>
      <UploadButton />
      <UploadedImages />
    </React.Fragment>
  );
};

// export default ImageArea;
export default withGrid(ImageArea, "column", "space-around", "center");
