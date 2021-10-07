import React, { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const initialState = {
  picture: "",
};

const Searchbar = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, picture: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.picture.trim() === "") {
      toast.error("Введите название картинки");
      return;
    }
    onSubmit(form.picture);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
