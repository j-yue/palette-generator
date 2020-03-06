import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import ImagesContext from "../context/imagesContext";
import Thumbnail from "./thumbnail";

const generateGallery = imageArray => {
  let result = [...imageArray].map(img => `<Thumbnail src=${{ img }} />`);
  // console.log(imageArray);
  return result;
};

const UploadedImages = () => {
  const uploadedContext = useContext(ImagesContext);
  let key = 0;
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{
        height: "50vh",
        maxHeight: "50vh",
        overflowY: "auto",
        paddingRight: ".5rem"
      }}
    >
      {uploadedContext.imageArray.map(img => (
        <Thumbnail src={img} key={img + key++} />
      ))}
    </Grid>
  );
};

export default UploadedImages;
