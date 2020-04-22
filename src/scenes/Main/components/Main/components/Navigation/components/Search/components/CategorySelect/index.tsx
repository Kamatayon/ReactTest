import React from "react";
import CategoryList from "./component/CategoryList";

interface Category {
  subCategories: Record<string, Category>;
}

interface CategorySelectOwnProps {
  category: Category;
}

const CategorySelect = (props: CategorySelectOwnProps) => {
  return (
    <div className="category-select js-category-select search__category-select">
      <button
        type="button"
        className="category-select__header js-category-select-btn"
      >
        <div className="category-select__header-text js-category-select-placeholder">
          All Categories
        </div>
        <svg className="icon icon-chevron-down category-select__header-icon">
          <use xlinkHref="#chevron-down" />
        </svg>
      </button>
      <ul>
        <CategoryList category={props.category} />
      </ul>
    </div>
  );
};

export default CategorySelect;
