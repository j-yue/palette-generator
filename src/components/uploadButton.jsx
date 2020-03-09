import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
// import withGrid from "./hoc/withGrid";
import UploadContext from "../context/uploadContext";

//check if the uploaded img is has jpg, jpeg, or png extension
const hasValidExtension = img => {
  const extension = img.split(".")[1];
  if (extension === "jpg" || extension === "jpeg" || extension === "png")
    return true;
  return false;
};

// generate an image object for each file and save to state as long as it's a valid type
const handleChange = (callback, images) => {
  let result = {};
  console.log(images);
  console.log(Object.entries(images).length);
  for (let file of images) {
    if (!hasValidExtension(file.name)) break;
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
        accept=".png, .jpg, .jpeg"
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
