import React, { useState, useEffect } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import withGrid from "./hoc/withGrid";

//get ratio from webAIM api and render the result
const ContrastRatio = ({ colorInputs }) => {
  const [ratio, setRatio] = useState(null);
  const [icon, setIcon] = useState(null);
  const [fg, bg] = Object.values(colorInputs);

  const URL = `https://webaim.org/resources/contrastchecker/?fcolor=${
    fg.split("#")[1]
  }&bcolor=${bg.split("#")[1]}&api`;
  useEffect(() => {
    try {
      fetch(URL)
        .then(response => response.json())
        .then(({ ratio, AA }) => {
          setRatio(ratio);
          AA === "pass" ? setIcon(<CheckIcon />) : setIcon(<ClearIcon />);
        });
    } catch (err) {
      console.log(err);
    }
  }, [fg, bg]);

  return (
    <React.Fragment>
      {icon}
      <div style={{ fontSize: "4rem" }}>{ratio}</div>
    </React.Fragment>
  );
};

export default withGrid(ContrastRatio, "column", "center", "center");
// export default ContrastRatio;
