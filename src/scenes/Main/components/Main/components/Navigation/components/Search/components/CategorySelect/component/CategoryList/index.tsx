import React from "react";

interface Category {
  subCategories: Record<string, Category>;
}

interface CategoryListOwnProps {
  category: Category;
}

const CategoryList = ({ category }: CategoryListOwnProps) => {
  return <div></div>;
};

export default CategoryList;
