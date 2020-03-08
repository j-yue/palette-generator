import React from "react";
import Button from "@material-ui/core/Button";

import withRoundPadding from "./hoc/withRoundPadding";

//match numbers > 9 to their hex value
const decToHex = num => {
  let result = parseInt(num);
  switch (result) {
    case 10:
      result = "A";
      break;
    case 11:
      result = "B";
      break;
    case 12:
      result = "C";
      break;
    case 13:
      result = "D";
      break;

    case 14:
      result = "E";
      break;
    case 15:
      result = "F";
      break;
  }
  return result;
};

const calculateHex = num => {
  const wholeNuum = num / 16;
  const remainder = num % 16;
  return `${decToHex(wholeNuum)}${decToHex(remainder)}`;
};

const toHex = rgb => {
  let result = "#";
  [...rgb].map(num => (result += calculateHex(num)));
  return result;
};

// const style = {
//   borderRadius: "2rem",
//   minHeight: "2rem",
//   minHeight: "2rem",
//   minWidth: "2rem",
//   maxWidth: "2rem"
// };

const circularStyle = radius => {
  return {
    borderRadius: "50%",
    padding: "0",
    margin: "0",
    minHeight: radius,
    minHeight: radius,
    maxWidth: radius,
    maxWidth: radius
  };
};

const PaletteColor = ({ color }) => {
  const colorHex = toHex(color);
  return (
    <Button
      variant="contained"
      style={{
        color: colorHex,
        backgroundColor: colorHex,
        ...circularStyle("2rem")
      }}
      onClick={() => console.log(color)}
    >
      .
    </Button>
  );
};

export default withRoundPadding(PaletteColor, "1rem");
// export default PaletteColor;
