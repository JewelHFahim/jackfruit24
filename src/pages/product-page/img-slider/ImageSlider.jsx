import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./ImageSlider.css";

const images = [
  {
    original:
      "https://static-01.daraz.com.bd/p/c764931de5125f36067c4d4ec62cec6c.jpg_750x750.jpg_.webp",
    thumbnail:
      "https://static-01.daraz.com.bd/p/c764931de5125f36067c4d4ec62cec6c.jpg_750x750.jpg_.webp",
  },
  {
    original:
      "https://static-01.daraz.com.bd/p/3f8730a047305572248e7f5980187c32.jpg_750x750.jpg_.webp",
    thumbnail:
      "https://static-01.daraz.com.bd/p/3f8730a047305572248e7f5980187c32.jpg_750x750.jpg_.webp",
  },
  {
    original:
      "https://bd-live-21.slatic.net/kf/S3f797c4e3fbc45d697cbc487b6eb348aH.jpg_750x750.jpg_.webp",
    thumbnail:
      "https://bd-live-21.slatic.net/kf/S3f797c4e3fbc45d697cbc487b6eb348aH.jpg_750x750.jpg_.webp",
  },
];

const ImageSlider = () => {
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
