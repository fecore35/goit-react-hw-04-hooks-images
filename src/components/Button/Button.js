import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={s.button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
