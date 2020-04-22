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
      <ul className="category-select__list js-category-select-list">
        <li className="category-select__li js-category-select-item">
          <a
            href="#"
            className="category-select__list-header js-category-select-sub-btn"
          >
            Abrasives
            <svg className="icon icon-arrow-next category-select__list-header-icon">
              <use xlinkHref="#arrow-next" />
            </svg>
          </a>
          <ul className="category-select__list js-category-select-list">
            <li className="category-select__li js-category-select-item">
              <div className="category-select__item">
                <a
                  href="#"
                  className="category-select__list-header js-category-select-sub-btn"
                >
                  Electrical Supplies
                  <svg className="icon icon-arrow-next category-select__list-header-icon">
                    <use xlinkHref="#arrow-next" />
                  </svg>
                </a>
                <ul className="category-select__list js-category-select-list">
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category-select__li js-category-select-item">
              <div className="category-select__item">
                <a
                  href="#"
                  className="category-select__list-header js-category-select-sub-btn"
                >
                  Electrical Supplies
                  <svg className="icon icon-arrow-next category-select__list-header-icon">
                    <use xlinkHref="#arrow-next" />
                  </svg>
                </a>
                <ul className="category-select__list js-category-select-list">
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="category-select__li js-category-select-item">
          <a
            href="#"
            className="category-select__list-header js-category-select-sub-btn"
          >
            Adhesives &amp; Sealants Chemicals
            <svg className="icon icon-arrow-next category-select__list-header-icon">
              <use xlinkHref="#arrow-next" />
            </svg>
          </a>
          <ul className="category-select__list js-category-select-list">
            <li className="category-select__li js-category-select-item">
              <div className="category-select__item">
                <a
                  href="#"
                  className="category-select__list-header js-category-select-sub-btn"
                >
                  Electrical Supplies
                  <svg className="icon icon-arrow-next category-select__list-header-icon">
                    <use xlinkHref="#arrow-next" />
                  </svg>
                </a>
                <ul className="category-select__list js-category-select-list">
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="category-select__li js-category-select-item">
          <a
            href="#"
            className="category-select__list-header js-category-select-sub-btn"
          >
            Lbricants &amp; Paints
            <svg className="icon icon-arrow-next category-select__list-header-icon">
              <use xlinkHref="#arrow-next" />
            </svg>
          </a>
          <ul className="category-select__list js-category-select-list">
            <li className="category-select__li js-category-select-item">
              <div className="category-select__item">
                <a
                  href="#"
                  className="category-select__list-header js-category-select-sub-btn"
                >
                  Electrical Supplies
                  <svg className="icon icon-arrow-next category-select__list-header-icon">
                    <use xlinkHref="#arrow-next" />
                  </svg>
                </a>
                <ul className="category-select__list js-category-select-list">
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="category-select__li js-category-select-item">
          <a
            href="#"
            className="category-select__list-header js-category-select-sub-btn"
          >
            Electronic Hardware &amp; Supplies
            <svg className="icon icon-arrow-next category-select__list-header-icon">
              <use xlinkHref="#arrow-next" />
            </svg>
          </a>
          <ul className="category-select__list js-category-select-list">
            <li className="category-select__li js-category-select-item">
              <div className="category-select__item">
                <a
                  href="#"
                  className="category-select__list-header js-category-select-sub-btn"
                >
                  Electrical Supplies
                  <svg className="icon icon-arrow-next category-select__list-header-icon">
                    <use xlinkHref="#arrow-next" />
                  </svg>
                </a>
                <ul className="category-select__list js-category-select-list">
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Lighting products
                      </a>
                    </div>
                  </li>
                  <li className="category-select__li">
                    <div className="category-select__item">
                      <a
                        href="#"
                        className="category-select__link js-category-select-link"
                      >
                        Wire Management &amp; Organisation
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="category-select__li js-category-select-item">
          <a
            href="#"
            className="category-select__list-header js-category-select-sub-btn"
          >
            Pipes &amp; Fittings
            <svg className="icon icon-arrow-next category-select__list-header-icon">
              <use xlinkHref="#arrow-next" />
            </svg>
          </a>
          <ul className="category-select__list js-category-select-list"></ul>
        </li>
      </ul>
    </div>
  );
};

export default CategorySelect;
