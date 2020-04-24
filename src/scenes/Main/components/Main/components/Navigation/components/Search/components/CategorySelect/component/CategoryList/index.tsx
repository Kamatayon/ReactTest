import React, { useState, useEffect } from "react";
import { changeCaterogy } from "store/modules/search";
import { connect } from "react-redux";
import { StoreRootState } from "types";
interface CategoryListOwnProps {
  category: Record<string, any>;
  isOpen: boolean;
}

interface CategoryListDispatchProps {
  changeCategory: typeof changeCaterogy;
}

interface CategoryListConnectedProps {}

type CategoryListProps = CategoryListOwnProps &
  CategoryListConnectedProps &
  CategoryListDispatchProps;

const CategoryList = (props: CategoryListProps) => {
  const [selected, setSelected] = useState(-1);
  useEffect(() => {
    setSelected(-1);
  }, [props.isOpen]);
  return (
    <ul className={`category-select__list ${props.isOpen ? "active" : ""}`}>
      {Object.entries(props.category).map(([name, subCat], i, arr) => (
        <li
          onMouseOver={() => setSelected(i)}
          onClick={(ev) => {
            ev.stopPropagation();
            props.changeCategory(name);
          }}
        >
          <a
            className={`category-select__list-header ${
              i === selected ? "active" : ""
            }`}
          >
            {name}
            {Object.keys(subCat).length !== 0 && (
              <svg className="icon icon-arrow-next category-select__list-header-icon">
                <use xlinkHref="#arrow-next" />
              </svg>
            )}
          </a>
          {Object.keys(subCat).length !== 0 && (
            <ConnectedCategoryList isOpen={selected === i} category={subCat} />
          )}
        </li>
      ))}
    </ul>
  );
};

const ConnectedCategoryList = connect<
  CategoryListConnectedProps,
  CategoryListDispatchProps,
  CategoryListOwnProps
>(null, {
  changeCategory: changeCaterogy,
})(CategoryList);

export default ConnectedCategoryList;
