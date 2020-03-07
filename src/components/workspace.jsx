import React, { Component } from "react";
import { Paper, Container, Grid } from "@material-ui/core/";
import CurrentImage from "./currentImage";
import Palette from "./palette";

const styles = {
  grid: {
    minWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%"
  },
  currentImage: {
    width: "100%",
    height: "70%",
    maxHeight: "100%"
  }
};

class Workspace extends Component {
  state = { dominant: "", palette: "" };

  handleImageLoad = (dominant, palette) => {
    this.setState({ dominant, palette });
  };

  render() {
    return (
      <Paper
        variant="outlined"
        style={{ height: "100%", width: "100%" }}
        // style={{ height: "100vh", width: "70vw" }}
      >
        {/* <CurrentImage handleImageLoad={this.handleImageLoad} />
        <Palette dominant={this.state.dominant} palette={this.state.palette} /> */}
      </Paper>
    );
  }
}

export default Workspace;
