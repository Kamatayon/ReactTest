import React from "react";

interface Category {
  subCategories: Record<string, Category>;
}

interface CategoryListOwnProps {
  category: Category;
}

const CategoryList = ({ category }: CategoryListOwnProps) => {
  return (
    <ul className="category-select__list">
      {Object.entries(category).map(([name, subCat], i, arr) => (
        <li>
          <a className="category-select__list-header">
            {name}
            {Object.keys(subCat).length !== 0 && (
              <svg className="icon icon-arrow-next category-select__list-header-icon">
                <use xlinkHref="#arrow-next" />
              </svg>
            )}
          </a>
          {Object.keys(subCat).length !== 0 && (
            <CategoryList category={subCat} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
