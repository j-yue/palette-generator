import React, { useState, useEffect, useContext } from "react";

import IconButton from "@material-ui/core/IconButton";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import CopyModeContext from "../context/copyModeContext";
import CopyButton from "./copyButton";

//give active button color
const isActive = (mode, value) => {
  if (mode === value) return "primary";
  return "inherit";
};

const ToggleCopyMode = () => {
  //modes are 'clipboard' 'foreground' 'background
  const [mode, setMode] = useState("clipboard");
  const { handleCopyModeClick } = useContext(CopyModeContext);

  useEffect(() => {
    handleCopyModeClick(mode);
  }, [mode]);

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <IconButton
          color={isActive(mode, "clipboard")}
          aria-label="Copy to clipboard"
          onClick={() => setMode("clipboard")}
        >
          <AssignmentIcon />
          Clipboard
        </IconButton>
        <IconButton
          color={isActive(mode, "foreground")}
          aria-label="Copy to foreground input"
          onClick={() => setMode("foreground")}
        >
          <InsertPhotoOutlinedIcon />
          Foreground
        </IconButton>
        <IconButton
          color={isActive(mode, "background")}
          aria-label="Copy to background input"
          onClick={() => setMode("background")}
        >
          <InsertPhotoIcon />
          Background
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default ToggleCopyMode;
// export default withGrid(ToggleCopyMode, "row", "space-evenly", "center");
