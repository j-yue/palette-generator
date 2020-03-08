import React from "react";
import Button from "@material-ui/core/Button";
// import withGrid from "./hoc/withGrid";

const UploadButton = () => {
  return (
    <React.Fragment>
      <input
        style={{ display: "none" }}
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          size="large"
        >
          Upload Pictures
        </Button>
      </label>
    </React.Fragment>
  );
};

export default UploadButton;
// export default withGrid(UploadButton, "row", "center", "center");
