import React from "react";
import { CatalogCategory } from "types";
import Card from "./components/Card";

interface CatalogCategoryConnectedProps {
  categories: CatalogCategory[];
}

const CategoryCatalog = ({ categories }: CatalogCategoryConnectedProps) => {
  return (
    <section className="category js-category">
      <div className="container category__container">
        <ul className="category__list js-category-list">
          {categories.map((cat) => (
            <li className="category__li">
              <Card category={cat}></Card>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="show-more category__show-more js-category-btn"
      >
        Show more
      </button>
    </section>
  );
};

export default CategoryCatalog;
