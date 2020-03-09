import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import withGrid from "./hoc/withGrid";

//get ratio from webAIM api and render the result
const ContrastRatio = ({ fg, bg }) => {
  const [ratio, setRatio] = useState("ratio");
  // const [pass, setPass] = useState("pass");
  const [icon, setIcon] = useState(<CheckIcon />);
  const URL = `https://webaim.org/resources/contrastchecker/?fcolor=${fg}&bcolor=${bg}&api`;

  fetch(URL)
    .then(response => response.json())
    .then(({ ratio, AA }) => {
      setRatio(ratio);
      AA === "pass" ? setIcon(<CheckIcon />) : setIcon(<ClearIcon />);
    });

  // const icon =

  return (
    <React.Fragment>
      {icon}
      <div>{ratio}</div>
    </React.Fragment>
  );
};

export default withGrid(ContrastRatio, "column", "center", "center");
// export default ContrastRatio;
