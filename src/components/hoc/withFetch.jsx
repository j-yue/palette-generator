//supply ratio information to ContrastRatio component from webaim api
import React from "react";

const baseURL = "https://webaim.org/resources/contrastchecker/?";

const generateQuery = (fg, bg) => {
  return `${baseURL}fcolor=${fg}&bcolor=${bg}&api`;
};

const withFetch = () => {
  return (
    <React.Fragment>
      <h2>with fetch</h2>
    </React.Fragment>
  );
};

export default withFetch;
