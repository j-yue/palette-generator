import React, { useContext } from "react";
import Container from "@material-ui/core/Container";

import SelectionContext from "../context/selectionContext";

import CloseButton from "./closeButton";
import Image from "./image";

const CurrentImage = () => {
  const imageContext = useContext(SelectionContext);
  const [selectedImage, handleImageLoad] = [
    imageContext.selectedImage,
    imageContext.handleImageLoad
  ];

  return (
    <Container style={{ width: "70%", height: "70%" }}>
      <CloseButton />
      <Image src={selectedImage} handleLoad={handleImageLoad} />
    </Container>
  );
};

export default CurrentImage;
