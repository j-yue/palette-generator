import React, { useContext, useRef } from "react";
import { Container } from "@material-ui/core";
import ColorThief from "colorthief";
import CloseButton from "./closeButton";
import Image from "./image";
import SelectionContext from "../context/selectionContext";

const styles = {
  container: {
    height: "50vh",
    maxWidth: "60%",
    width: "auto",
    textAlign: "center"
  },
  figure: {
    height: "100%"
  },
  image: {
    height: "80%"
  }
};

// given the current img provided by context, use colorthief to find the
// dominant colors and palette, then invoke eventhandler passed by parent to
// update 'dominant' and 'palette' in ancestor's state
const generatePalette = (ref, handleImageLoad) => {
  const colorThief = new ColorThief();
  const dominant = colorThief.getColor(ref);
  const palette = colorThief.getPalette(ref);
  handleImageLoad(dominant, palette);
};

// const handleImageLoad = (dominant, palette) => {
//   console.log(dominant, palette);
// }

const CurrentImage = ({ handleImageLoad }) => {
  const imageContext = useContext(SelectionContext);
  const imgEl = useRef(null);
  console.log(imageContext);

  return (
    // <Container style={{ ...styles.container }}>
    <Container style={{ width: "70%", height: "70%" }}>
      <CloseButton />
      <figure style={{ ...styles.image }}>
        <Image
          src={imageContext.selectedImage}
          handleLoad={imageContext.handleImageLoad}
        />
        {/* <img
          src={imageContext.selectedImage}
          style={{ ...styles.image }}
          ref={imgEl}
          onLoad={() => generatePalette(imgEl.current, handleImageLoad)}
        /> */}
        <figcaption>{imageContext.selectedImage}</figcaption>
      </figure>
    </Container>
    // </Container>
  );
};

export default CurrentImage;
