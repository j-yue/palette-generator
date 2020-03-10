import React, { Component } from "react";
import { CssBaseline, Grid, Paper, Typography } from "@material-ui/core";
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
import ColorInputsContext from "./context/colorInputsContext";
import ClipboardContext from "./context/clipboardContext";
import CopyModeContext from "./context/copyModeContext";
import CloseContext from "./context/closeContext";
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
        },
        handleCloseClick: () => {
          const key = this.state.selectedImageKey;
          let images = this.state.images;
          delete images[key];
          this.setState({ images: images, selectedImageKey: null });
        },
        handleSwapClick: () => {
          const [fg, bg] = Object.values(this.state.colorInputs);
          this.setState({
            colorInputs: {
              foreground: bg,
              background: fg
            }
          });
        },
        handleColorChange: (key, color) => {
          this.setState({
            colorInputs: { ...this.state.colorInputs, [key]: color }
          });
        },
        handleCopyModeClick: mode => {
          this.setState({ copyMode: mode });
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
      paletteColors: "",
      colorInputs: {
        foreground: "#000000",
        background: "#FFFFFF"
      },
      copyMode: "clipboard"
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
              <CloseContext.Provider
                value={{
                  handleCloseClick: this.state.handlers.handleCloseClick
                }}
              >
                <CopyModeContext.Provider
                  value={{
                    handleCopyModeClick: this.state.handlers.handleCopyModeClick
                  }}
                >
                  <Workspace
                    currentImage={this.state.selectedImageKey}
                    dominant={this.state.dominantColor}
                    palette={this.state.paletteColors}
                  />
                </CopyModeContext.Provider>
              </CloseContext.Provider>
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
                    <ColorInputsContext.Provider
                      value={{
                        colorInputs: this.state.colorInputs,
                        handleSwapClick: this.state.handlers.handleSwapClick,
                        handleColorChange: this.state.handlers.handleColorChange
                      }}
                    >
                      <Actions />
                    </ColorInputsContext.Provider>
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
