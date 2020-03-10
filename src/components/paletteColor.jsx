import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

import withRoundPadding from "./hoc/withRoundPadding";
import CopyModeContext from "../context/copyModeContext";

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
    default:
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

const copyToClipboard = color => {
  const copyText = document.createElement("textarea");
  document.body.appendChild(copyText);
  copyText.value = color;
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
};

const circularStyle = radius => {
  return {
    borderRadius: "50%",
    padding: "0",
    margin: "0",
    minHeight: radius,
    maxWidth: radius
  };
};

const handleClick = (mode, color, callback) => {
  console.log("hi");
  if (mode === "clipboard") copyToClipboard(color);
  if (mode === "foreground") callback("foreground", color);
  if (mode === "background") callback("background", color);
};

const PaletteColor = ({ color }) => {
  const { copyMode, handleColorChange } = useContext(CopyModeContext);
  const colorHex = toHex(color);
  return (
    <Button
      variant="contained"
      style={{
        color: colorHex,
        backgroundColor: colorHex,
        // ...circularStyle("2rem")
        borderRadius: "50%"
      }}
      onClick={() => handleClick(copyMode, toHex(color), handleColorChange)}
    >
      .
    </Button>
  );
};

export default withRoundPadding(PaletteColor, "1rem");

// export default PaletteColor;
