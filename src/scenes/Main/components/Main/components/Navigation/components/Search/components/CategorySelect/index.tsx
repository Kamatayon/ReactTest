import React, { useState, useRef } from "react";
import CategoryList from "./component/CategoryList";
import "./index.scss";
import { useOutsideClick } from "utils/hooks";
import { connect } from "react-redux";
import { StoreRootState } from "types";
import { getAllCategories, getCurrentCategory } from "store/modules/search";
import ConnectedCategoryList from "./component/CategoryList";

interface CategorySelectOwnProps {}

interface CategorySelectConnectedProps {
  category: Record<string, any>;
  currentCategory: string;
}

type CategorySelectProps = CategorySelectOwnProps &
  CategorySelectConnectedProps;

const CategorySelect = (props: CategorySelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen((x) => !x);
    document.body.addEventListener("click", () => {
      setIsOpen(false);
    });
  };
  const ref = useRef();
  return (
    <div
      className={`category-select js-category-select search__category-select ${
        isOpen ? "active" : ""
      }`}
    >
      <button
        type="button"
        onClick={open}
        className="category-select__header js-category-select-btn"
      >
        <div className="category-select__header-text js-category-select-placeholder">
          {props.currentCategory}
        </div>
        <svg className="icon icon-chevron-down category-select__header-icon">
          <use xlinkHref="#chevron-down" />
        </svg>
      </button>
      <ConnectedCategoryList isOpen={isOpen} category={props.category} />
    </div>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  category: getAllCategories(state),
  currentCategory: getCurrentCategory(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
