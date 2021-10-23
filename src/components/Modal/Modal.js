import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }

  onCloseModal = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      this.props.onOpenModal(e);
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.onCloseModal}>
        <div className={s.modal}>{this.props.children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }
}

Modal.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
