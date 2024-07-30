import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Props } from "react-loader-spinner";
import { Image } from "../../Types/types";

Modal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
};

const ImageModal = ({ isOpen, onClose, image }: ModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={css.modal}
    overlayClassName={css.overlay}
    closeTimeoutMS={300} // optional, adds fade-out transition
  >
    {image && (
      <div>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
        <div className={css.info}>
          <p>Author: {image.user.name}</p>
          <p>{image.likes} likes</p>
          {image.description && <p>Description: {image.description}</p>}
        </div>
        <button onClick={onClose} className={css.closeBtn}>
          Close
        </button>
      </div>
    )}
  </Modal>
);

export default ImageModal;
