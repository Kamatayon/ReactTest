import React from "react";
import Search from "./components/Search";
import logo from "assets/svg_icons/logo.svg";
const Navigation = () => {
  return (
    <section className="navigation js-navigation ">
      <div className="container navigation__container">
        <a href="#" className="navigation__logo">
          <img src="/assets/svg_icons/logo.svg" alt="" />
        </a>
        <Search />
        <div className="navigation__cart js-cart">
          <div className="navigation__cart-icon-wrap">
            <svg className="icon icon-cart navigation__cart-icon">
              <use xlinkHref="#cart" />
            </svg>
            <div className="circle-counter navigation__cart-counter">123</div>
          </div>
          <div className="navigation__cart-text">Shopping Cart</div>
          <div className="cart-popup js-cart-popup">
            <div className="cart-popup__header">
              <div className="cart-popup__header-text">My Cart</div>
              <button
                className="btn btn--red   cart-popup__header-btn"
                type="button"
              >
                <span className="btn__text">Checkout</span>
                <svg className="icon icon-arrow-right btn__icon">
                  <use xlinkHref="#arrow-right" />
                </svg>
              </button>
            </div>
            <div className="cart-popup__content-container">
              <div className="cart-popup__overflow-container">
                <ul className="cart-popup__list">
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__card-header">
                        <span className="cart-popup__card-header-text">
                          Supplier:
                        </span>{" "}
                        <span className="cart-popup__text-bold">
                          Desert Valley
                        </span>
                      </div>
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__card-header">
                        <span className="cart-popup__card-header-text">
                          Supplier:
                        </span>{" "}
                        <span className="cart-popup__text-bold">Trade key</span>
                      </div>
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                  <li className="cart-popup__li">
                    <div className="cart-popup__item">
                      <div className="cart-popup__img-container">
                        <button type="button" className="cart-popup__close">
                          <svg className="icon icon-close cart-popup__close-icon">
                            <use xlinkHref="#close" />
                          </svg>
                        </button>
                        <a href="#" className="cart-popup__img-box">
                          <img
                            src="assets/img/content/catalog0.png"
                            alt=""
                            className="cart-popup__img"
                          />
                        </a>
                      </div>
                      <div className="cart-popup__content">
                        <div className="cart-popup__title">
                          <a href="#" className="cart-popup__title-text">
                            Easel Pads 3M 25 x 30 Inches 30 sheets per pad white
                          </a>
                        </div>
                        <div className="cart-popup__desc">Desert Valley</div>
                      </div>
                      <div className="counter cart-popup__counter js-counter">
                        <button type="button" className="counter__cart">
                          <img
                            src="assets/svg_icons/cart-small.svg"
                            alt=""
                            className="counter__cart-img"
                          />
                        </button>
                        <div className="counter__main">
                          <button
                            type="button"
                            className="counter__btn counter__btn--prev js-counter-btn-prev"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/minus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/minus--hover.svg"
                              alt=""
                            />
                          </button>
                          <input
                            size={3}
                            type="text"
                            className="counter__number js-counter-number"
                            defaultValue={125}
                          />
                          <button
                            type="button"
                            className="counter__btn counter__btn--next js-counter-btn-next"
                          >
                            <img
                              className="counter__icon counter__icon--default"
                              src="assets/svg_icons/plus.svg"
                              alt=""
                            />
                            <img
                              className="counter__icon counter__icon--hover"
                              src="assets/svg_icons/plus--hover.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div className="cart-popup__price">10.50</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cart-popup__total">
              <div className="cart-popup__total-header">
                Total Product Price:
              </div>
              <div className="cart-popup__total-price">28,705.43</div>
            </div>
            <div className="cart-popup__content-container">
              <button
                className="btn btn--red   cart-popup__btn-checkout"
                type="button"
              >
                <span className="btn__text">Checkout</span>
                <svg className="icon icon-arrow-right btn__icon">
                  <use xlinkHref="#arrow-right" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
