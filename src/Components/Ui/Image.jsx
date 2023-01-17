import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image(props) {
  return (
    <LazyLoadImage
      src={props.src}
      alt={props.alt}
      className={props.className}
      effect="blur"
    />
  );
}

export default Image;
