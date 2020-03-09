import React from "react";
import Typography from "@material-ui/core/Typography";
import withGrid from "./hoc/withGrid";

const styles = {
  width: "2rem",
  height: "2rem",
  borderRadius: "50%"
};

const ColorInput = ({ value, name, handleChange }) => {
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
          onChange={e => handleChange(name.toLowerCase(), e.target.value)}
          hidden
        />
      </label>
    </React.Fragment>
  );
};

export default ColorInput;
