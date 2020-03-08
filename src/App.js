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
import ClipboardContext from "./context/clipboardContext";
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
      handlers: {
        handleImageLoad: (dominant, palette) => {
          this.setState({ dominantColor: dominant, paletteColors: palette });
        }
      },
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
      selectedImage: "images/kea.jpg", //what if imgs have same name
      dominantColor: "",
      paletteColors: ""
    };
    //colorthief needs access to dom element containing img
    this.imgRef = React.createRef();
  }

  handleThumbnailClick(img) {
    this.setState({ selectedImage: img });
  }

  //use this instead of creating separate methods to change state
  updateState = (key, value) => {
    const stateKeys = Object.keys(this.state);
    if (stateKeys.includes(key)) {
      this.setState({ ...this.state, [key]: value });
    } else {
      console.log("invalid key");
    }
  };

  // handleImageLoad = (dominant, palette) => {
  //   this.setState({ dominantColor: dominant, paletteColors: palette });
  // };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          // nowrap
          container
          // xs={10}
          // xs={10}
          // spacing={5}
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            margin: "0"
          }}
        >
          <Grid item xs={8}>
            <SelectionContext.Provider
              value={{
                selectedImage: this.state.selectedImage,
                handleImageLoad: this.state.handlers.handleImageLoad
              }}
            >
              <Workspace
                updateState={this.updateState}
                dominant={this.state.dominantColor}
                palette={this.state.paletteColors}
              />
            </SelectionContext.Provider>
          </Grid>
          <Grid item xs={4}>
            <ImagesContext.Provider
              value={{ imageArray: this.state.imageArray }}
            >
              <Actions />
            </ImagesContext.Provider>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
