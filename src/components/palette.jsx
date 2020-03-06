import React from "react";

import PaletteColor from "./paletteColor";

const Palette = ({ dominant, palette }) => {
  return (
    <React.Fragment>
      <PaletteColor color={dominant} />
      {[...palette].map(color => (
        <PaletteColor color={color} key={color} />
      ))}
    </React.Fragment>
  );
};

export default Palette;
