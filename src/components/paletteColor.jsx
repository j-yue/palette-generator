import React from "react";
import Button from "@material-ui/core/Button";
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

const style = {
  display: "inline-block",
  width: "10vh",
  borderRadius: "10vh",
  height: "10vh"
};

const PaletteColor = ({ color }) => {
  const colorHex = toHex(color);
  return (
    <Button
      variant="contained"
      style={{ color: colorHex, backgroundColor: colorHex, ...style }}
      onClick={() => console.log(color)}
    >
      *
    </Button>
  );
};

export default PaletteColor;
