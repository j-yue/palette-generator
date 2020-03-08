import React, { useContext } from "react";

import SelectionContext from "../context/selectionContext";
import CloseButton from "./closeButton";
import Image from "./image";
import withGrid from "./hoc/withGrid";

const CurrentImage = () => {
  const imageContext = useContext(SelectionContext);
  const [selectedImage, handleImageLoad] = [
    imageContext.selectedImage,
    imageContext.handleImageLoad
  ];

  return (
    <React.Fragment>
      <CloseButton />
      <Image src={selectedImage} handleLoad={handleImageLoad} />
    </React.Fragment>
  );
};

export default withGrid(CurrentImage, "column", "space-evenly", "center");
