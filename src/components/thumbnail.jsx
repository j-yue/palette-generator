import React from "react";
// import Image from "./common/image";

const styles = {
  height: "10vh",
  maxWidth: "5vw",
  borderRadius: "5px",
  margin: "2.5px",
  objectFit: "cover"
  // marginBottom: "5px"
};

const Thumbnail = ({ src }) => {
  return (
    <React.Fragment>
      <img src={src} alt={`Thumbnail for ${src}.`} style={{ ...styles }} />
    </React.Fragment>
  );
};

export default Thumbnail;
