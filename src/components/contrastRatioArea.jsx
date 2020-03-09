import React from "react";
import FgBg from "./fgBg";
import ContrastRatio from "./contrastRatio";
import withGrid from "./hoc/withGrid";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

const ContrastRatioArea = () => {
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <FgBg />
      </Grid>
      <Grid item xs={6}>
        <ContrastRatio fg="000000" bg="FFFFFF" />
      </Grid>
    </React.Fragment>
  );
};

// export default ContrastRatioArea;
export default withGrid(ContrastRatioArea, "row", "center", "center");
