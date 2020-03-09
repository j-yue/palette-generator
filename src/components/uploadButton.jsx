import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
// import withGrid from "./hoc/withGrid";
import UploadContext from "../context/uploadContext";

const handleChange = (callback, images) => {
  let result = {};
  for (let file of images) {
    // result.push(URL.createObjectURL(file));
    // result = {...result, }
    const idSuffix = Date.now();
    const key = file.name + idSuffix;

    result = {
      ...result,
      [key]: { src: URL.createObjectURL(file), name: file.name, imgKey: key }
    };
  }
  callback(result);
};

const UploadButton = () => {
  const uploadContext = useContext(UploadContext);
  return (
    <React.Fragment>
      <input
        style={{ display: "none" }}
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={e =>
          handleChange(uploadContext.handleImageUpload, e.target.files)
        }
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
