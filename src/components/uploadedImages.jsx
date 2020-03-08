import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withGrid from "./hoc/withGrid";
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
    <React.Fragment>
      <Paper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            // height: "100%",
            maxHeight: "50vh",
            overflowY: "auto",
            padding: "0 1rem"
            // border: "3px solid yellow"
          }}
        >
          {uploadedContext.imageArray.map(img => (
            <Thumbnail src={img} key={img + key++} />
          ))}
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

// export default withGrid(UploadedImages, "row", "space-between", "flex-end");
export default UploadedImages;
