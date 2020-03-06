import React from "react";
// import Image from "./common/image";

const styles = {
  height: "10vh",
  borderRadius: "1rem",
  marginBottom: ".5rem"
};

const Thumbnail = ({ src }) => {
  return (
    <React.Fragment>
      <img src={src} alt={`Thumbnail for ${src}.`} style={{ ...styles }} />
    </React.Fragment>
  );
};

export default Thumbnail;
