/**
 * HOC to wrap MUI grid around components
 */

import React from "react";
import Grid from "@material-ui/core/Grid";

const withGrid = (Component, direction, justify, align) => ({ ...props }) => {
  return (
    <Grid
      container
      direction="column"
      justify={justify}
      alignItems={align}
      style={{ height: "100%", width: "100%" }}
    >
      <Component {...props} />
    </Grid>
  );
};

export default withGrid;
