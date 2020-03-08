import React from "react";
import Typography from "@material-ui/core/Typography";
import withGrid from "./hoc/withGrid";

const styles = {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%"
};

const ColorInput = ({ value, name }) => {
  return (
    <React.Fragment>
      <Typography variant="body1">{name}</Typography>
      <label
        className="MuiButtonBase-root MuiButton-root MuiButton-contained"
        style={{
          backgroundColor: value,
          ...styles
        }}
      >
        <input
          type="color"
          name={name}
          value={value}
          onChange={() => console.log("youre trying to change the color")}
          hidden
        />
      </label>
    </React.Fragment>
  );
};

export default ColorInput;
