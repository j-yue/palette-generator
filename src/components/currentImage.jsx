import React, { useContext } from "react";

import SelectionContext from "../context/selectionContext";
import CloseButton from "./closeButton";
import Image from "./image";
import withGrid from "./hoc/withGrid";

const CurrentImage = () => {
  const imageContext = useContext(SelectionContext);
  // const [selectedImageKey, handleImageLoad, images] = Object.values(
  //   imageContext
  // );
  // const selectedImage = images[selectedImageKey];
  // console.log(imageContext);
  const { selectedImageKey, handleImageLoad, images } = imageContext;
  // console.log(images[selectedImageKey]);
  const current = images[selectedImageKey];
  console.log(current.src);

  return (
    <React.Fragment>
      <CloseButton />
      <Image
        src={current.src}
        name={current.name}
        handleLoad={handleImageLoad}
      />
    </React.Fragment>
  );
};

export default withGrid(CurrentImage, "column", "space-evenly", "center");
