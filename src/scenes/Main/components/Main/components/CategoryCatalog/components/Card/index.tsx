import React from "react";
import { CatalogCategory } from "types";

interface CardOwnProps {
  category: CatalogCategory;
}

interface CardConnectedProps {}
type CardProps = CardOwnProps & CardConnectedProps;

const Card = ({ category }: CardProps) => {
  return (
    <div className="category-card">
      <a href="#" className="category-card__header">
        {category.title}
      </a>
      <ul className="category-card__list">
        {category.links.map(([name, url]) => (
          <li className="category-card__li">
            <a href={url} className="category-card__link">
              {name}
            </a>
          </li>
        ))}
      </ul>
      <img src={category.image} alt="" className="category-card__img" />
    </div>
  );
};

export default Card;
