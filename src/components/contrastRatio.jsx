import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import withGrid from "./hoc/withGrid";

const ContrastRatio = (fg, bg) => {
  //   const url =
  //     "https://webaim.org/resources/contrastchecker/?fcolor=0000FF&bcolor=FFFFFF&api";
  //   fetch(url)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(({ ratio, AA }) => console.log(ratio, AA));
  return (
    <React.Fragment>
      <div>8.59</div>
    </React.Fragment>
  );
};

// export default withGrid(ContrastRatio, "row", "center", "center");
export default ContrastRatio;
