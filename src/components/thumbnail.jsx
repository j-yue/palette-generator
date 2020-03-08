import React, { useContext } from "react";
// import Image from "./common/image";
import ThumbnailContext from "../context/thumbnailContext";

const styles = {
  height: "10vh",
  maxWidth: "5vw",
  borderRadius: "5px",
  margin: "2.5px",
  objectFit: "cover"
};

const Thumbnail = ({ src }) => {
  const thumbnailContext = useContext(ThumbnailContext);
  const handleClick = thumbnailContext.handleThumbnailClick;
  return (
    <React.Fragment>
      <img
        src={src}
        alt={`Thumbnail for ${src}.`}
        style={{ ...styles }}
        onClick={() => handleClick(src)}
      />
    </React.Fragment>
  );
};

export default Thumbnail;
