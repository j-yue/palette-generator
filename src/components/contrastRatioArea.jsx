import React, { useContext } from "react";
import ColorInputsContext from "../context/colorInputsContext";
import FgBg from "./fgBg";
import ContrastRatio from "./contrastRatio";
import withGrid from "./hoc/withGrid";
import Grid from "@material-ui/core/Grid";

const ContrastRatioArea = () => {
  const { colorInputs, handleSwapClick, handleColorChange } = useContext(
    ColorInputsContext
  );
  console.log(colorInputs);
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <FgBg
          colorInputs={colorInputs}
          handleClick={handleSwapClick}
          handleChange={handleColorChange}
        />
      </Grid>
      <Grid item xs={6}>
        <ContrastRatio colorInputs={colorInputs} />
      </Grid>
    </React.Fragment>
  );
};

// export default ContrastRatioArea;
export default withGrid(ContrastRatioArea, "row", "center", "center");
