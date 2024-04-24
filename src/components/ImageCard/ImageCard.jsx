import css from "../ImageCard/ImageCard.module.css";

export default function ImageCart({
  small,
  alt_description,
  description,
  likes,
  onClick,
}) {
  return (
    <li className={css.imageCart}>
      <img
        className={css.imageCardImg}
        src={small}
        alt={alt_description}
        onClick={onClick}
      />
      <p className={css.imageCardTitle}>Title{alt_description}</p>
      <p className={css.imageCardDescription}>Description:{description}</p>
      <p className={css.imageCardLikes}>Likes:{likes}</p>
    </li>
  );
}
