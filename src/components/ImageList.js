import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // ojo que se puede de-estructurar el objeto de images del map a esta forma,
  // y simplificar el acceso a los atributos:
  // en vez de (images) seria ({description, id, urls})
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
