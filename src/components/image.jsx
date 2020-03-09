/**
 * returns a responsive image with caption wrapped in MUI container
 * this is where the magic happens
 * when this image loads, invoke colothief methods to create dominant and palette colors, then update main state via prop
 */

import React, { useRef } from "react";
import ColorThief from "colorthief";
import Typography from "@material-ui/core/Typography";

// given the current img provided by the image ref, use colorthief to find the
// dominant colors and palette and save results to App.js state
const generatePalette = img => {
  const colorThief = new ColorThief();
  return [colorThief.getColor(img), colorThief.getPalette(img)];
};

const Image = ({ src, name, handleLoad }) => {
  const imgRef = useRef(null);

  return (
    <React.Fragment>
      <img
        src={src}
        alt="Current selection."
        ref={imgRef}
        onLoad={() => handleLoad(...generatePalette(imgRef.current))}
        style={{
          height: "40vh",
          borderRadius: "8px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      />
      <Typography variant="subtitle1">{name}</Typography>
    </React.Fragment>
  );
};

export default Image;
