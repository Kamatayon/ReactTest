import React from "react";
import CategorySelect from "./components/CategorySelect";

const Search = () => {
  return (
    <form action="" className="search navigation__search">
      <CategorySelect />
      <div className="search__field-box">
        <input placeholder="Search" type="text" className="search__field" />
        <button type="submit" className="search__submit">
          <img
            src="assets/svg_icons/search.svg"
            alt=""
            className="search__submit-icon"
          />
        </button>
      </div>
    </form>
  );
};

export default Search;
