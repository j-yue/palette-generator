import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import withGrid from "./hoc/withGrid";
import ImagesContext from "../context/imagesContext";
import Thumbnail from "./thumbnail";

const createThumbnails = imagesObj => {
  const result = Object.entries(imagesObj).map(img => {
    // console.log(img[1]);
    const { src, name, imgKey } = img[1];
    // console.log(src, name, key);
    return <Thumbnail src={src} key={name + imgKey} imgKey={imgKey} />;
  });
  // console.log(Object.entries(imagesObj));
  // let thumbnails = "";
  // for (let imgObj of imagesObj) {
  //   thumbnails += (
  //     <Thumbnail src={imgObj.src} key={imgObj.key} imgKey={imgObj.key} />
  //   );
  // }
  return result;
};

const UploadedImages = () => {
  const imagesContext = useContext(ImagesContext);
  const imagesObj = imagesContext.images;
  // let thumbnails = "";
  // for (let imgObj of Object.entries(imagesObj))
  //   thumbnails += <Thumbnail src={imgObj.src} key={imagesObj.key} />;
  // let key = 0;
  return (
    <React.Fragment>
      <Paper>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            minHeight: "50vh",
            maxHeight: "50vh",
            overflowY: "auto",
            padding: "0 1rem"
            // border: "3px solid yellow"
          }}
        >
          {createThumbnails(imagesObj)}
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

// export default withGrid(UploadedImages, "row", "space-between", "flex-end");
export default UploadedImages;
