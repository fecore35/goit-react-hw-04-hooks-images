import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ images, onOpenModal }) {
  return images.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li key={id} id={id} className={s.item}>
        <a href={largeImageURL} onClick={onOpenModal}>
          <img
            src={webformatURL}
            data-modal={largeImageURL}
            alt=""
            className={s.image}
          />
        </a>
      </li>
    );
  });
}

ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
