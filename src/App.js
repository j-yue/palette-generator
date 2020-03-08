import React, { Component } from "react";
import { CssBaseline, Grid, Paper } from "@material-ui/core";
import {
  createMuiTheme,
  // makeStyles,
  // ThemeProvider,
  MuiThemeProvider
} from "@material-ui/core/styles";
// import { orange } from "@material-ui/core/colors";
import ImagesContext from "./context/imagesContext";
import SelectionContext from "./context/selectionContext";
import ThumbnailContext from "./context/thumbnailContext";
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
        },
        handleThumbnailClick: src => {
          this.setState({ selectedImage: src });
        }
      },
      imageArray: [
        "images/sunConure.jpg",
        "images/kea.jpg",
        "images/hyacinth.jpg",
        "images/lovebirds.jpg",
        "images/scarlet.jpg",
        "images/smallParrot.jpg",
        "images/eclectus.jpg",
        "images/feathers.jpg",
        "images/hahns.jpg",
        "images/lorries.jpg",
        "images/blueAndGold.jpg"
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
          container
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
                dominant={this.state.dominantColor}
                palette={this.state.paletteColors}
              />
            </SelectionContext.Provider>
          </Grid>
          <Grid item xs={4}>
            <ImagesContext.Provider
              value={{ imageArray: this.state.imageArray }}
            >
              <ThumbnailContext.Provider
                value={{
                  handleThumbnailClick: this.state.handlers.handleThumbnailClick
                }}
              >
                <Paper style={{ height: "100%" }}>
                  <Actions />
                </Paper>
              </ThumbnailContext.Provider>
            </ImagesContext.Provider>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
