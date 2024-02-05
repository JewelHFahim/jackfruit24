import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./ImageSlider.css";

const ImageSlider = ({ productDetails }) => {
  
  const images = [
    {
      original: productDetails?.image,
      thumbnail: productDetails?.image,
    },
    {
      original: productDetails?.image,
      thumbnail: productDetails?.image,
    },
  ];

  return (
    <ImageGallery
      thumbnailPosition="bottom"
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

export default ImageSlider;
