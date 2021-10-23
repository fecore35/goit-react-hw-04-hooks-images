import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  handlerSearchQuery = (event) => {
    this.setState({
      searchQuery: event.currentTarget.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      return alert("Enter query search");
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handlerSearchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
