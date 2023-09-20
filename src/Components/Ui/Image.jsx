import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// eslint-disable-next-line react/prop-types
function Image({ src, alt, className, height, width }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
    />
  );
}

export default Image;
