import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withGrid from "./hoc/withGrid";

import PaletteColor from "./paletteColor";

const Palette = ({ dominant, palette }) => {
  return (
    <React.Fragment>
      <Grid item xs={5} style={{ minHeight: "100%" }}>
        <Typography variant="h5">Dominant</Typography>
        {dominant && <PaletteColor color={dominant} />}
      </Grid>
      <Grid item xs={7} style={{ minHeight: "100%" }}>
        <Typography variant="h5">Palette</Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          {palette &&
            [...palette].map(color => (
              <PaletteColor color={color} key={color} />
            ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withGrid(Palette, "row", "flex-start", "center");
