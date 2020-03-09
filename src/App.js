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
import UploadContext from "./context/uploadContext";
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
        handleThumbnailClick: key => {
          this.setState({ selectedImageKey: key });
        },
        handleImageUpload: imgs => {
          this.setState({ images: { ...this.state.images, ...imgs } });
        }
      },
      images: {
        demoPicture: {
          src: "images/sunConure.jpg",
          name: "images/sunConure.jpg",
          imgKey: "demoPicture"
        },
        demoFeathers: {
          src: "images/feathers.jpg",
          name: "images/feathers.jpg",
          imgKey: "demoFeathers"
        },
        demoLovebirds: {
          src: "images/lovebirds.jpg",
          name: "images/lovebirds.jpg",
          imgKey: "demoLovebirds"
        }
      },
      selectedImageKey: "demoPicture",
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
                selectedImageKey: this.state.selectedImageKey,
                handleImageLoad: this.state.handlers.handleImageLoad,
                images: this.state.images
              }}
            >
              <Workspace
                dominant={this.state.dominantColor}
                palette={this.state.paletteColors}
              />
            </SelectionContext.Provider>
          </Grid>
          <Grid item xs={4}>
            <ImagesContext.Provider value={{ images: this.state.images }}>
              <ThumbnailContext.Provider
                value={{
                  handleThumbnailClick: this.state.handlers.handleThumbnailClick
                }}
              >
                <UploadContext.Provider
                  value={{
                    handleImageUpload: this.state.handlers.handleImageUpload
                  }}
                >
                  <Paper style={{ height: "100%" }}>
                    <Actions />
                  </Paper>
                </UploadContext.Provider>
              </ThumbnailContext.Provider>
            </ImagesContext.Provider>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
