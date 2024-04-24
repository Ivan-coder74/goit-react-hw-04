import css from "../ImageGallery/ImageGallery.module.css";
import ImageCart from "../ImageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(images) &&
        images.map((image) => (
          <ImageCart
            key={image.id}
            small={image.urls.small}
            alt_description={image.alt_description}
            description={image.description}
            likes={image.likes}
            onClick={() => openModal(image)}
          />
        ))}
    </ul>
  );
}
