import React, { Component } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import {
  createMuiTheme,
  // makeStyles,
  // ThemeProvider,
  MuiThemeProvider
} from "@material-ui/core/styles";
// import { orange } from "@material-ui/core/colors";
import ImagesContext from "./context/imagesContext";
import SelectionContext from "./context/selectionContext";
// import CurrentImage from "./components/currentImage";
import Workspace from "./components/workspace";
import Actions from "./components/actions";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#888"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [
        "images/sunConure.jpg",
        "images/kea.jpg",
        "images/sunConure.jpg",
        "images/kea.jpg",
        "images/sunConure.jpg",
        "images/kea.jpg",
        "images/sunConure.jpg",
        "images/kea.jpg",
        "images/sunConure.jpg"
      ],
      selectedImage: "images/kea.jpg"
    };
    //colorthief needs access to dom element containing img
    this.imgRef = React.createRef();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="row" justify="center" alignItems="center">
          <SelectionContext.Provider
            value={{ selectedImage: this.state.selectedImage }}
          >
            <Workspace />
          </SelectionContext.Provider>
          <ImagesContext.Provider value={{ imageArray: this.state.imageArray }}>
            <Actions />
          </ImagesContext.Provider>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
