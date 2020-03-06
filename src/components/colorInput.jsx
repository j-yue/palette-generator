import React from "react";
import Container from "@material-ui/core/Container";

const styles = {
  display: "block",
  width: "50px",
  height: "50px",
  borderRadius: "50px"
};

const ColorInput = ({ value, name }) => {
  return (
    <Container>
      <label
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
          style={{ visibility: "hidden" }}
        />
      </label>
      <label>{name}</label>
    </Container>
  );
};

export default ColorInput;
