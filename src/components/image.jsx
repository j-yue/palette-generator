/**
 * returns a responsive image with caption wrapped in MUI container
 * this is where the magic happens
 * when this image loads, invoke colothief methods to create dominant and palette colors, then update main state via prop
 */

import React, { useRef } from "react";
import ColorThief from "colorthief";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// given the current img provided by the image ref, use colorthief to find the
// dominant colors and palette and save results to App.js state
const generatePalette = img => {
  const colorThief = new ColorThief();
  return [colorThief.getColor(img), colorThief.getPalette(img)];
};

const Image = ({ src, handleLoad }) => {
  const imgRef = useRef(null);

  return (
    <Container style={{ width: "75%", height: "75%", textAlign: "center" }}>
      <img
        src={src}
        ref={imgRef}
        onLoad={() => handleLoad(...generatePalette(imgRef.current))}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <Typography variant="subtitle1">{src}</Typography>
    </Container>
  );
};

export default Image;
