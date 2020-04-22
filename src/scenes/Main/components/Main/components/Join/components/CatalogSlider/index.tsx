import React, { useEffect, useLayoutEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";
const CatalogSlider = () => {
  useLayoutEffect(() => {
    //@ts-ignore
    var options = {
      container: ".js-catalog-slider",
      loop: false,
      items: 1,
      slideBy: 1,
      nav: true,
      controls: false,
      autoplay: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: false,
      autowidth: true,
      center: false,
      swipeAngle: false,
      gutter: 10,
      autoHeight: true,
      responsive: {
        0: {
          disable: false,
          nav: true,
        },
        1280: {
          disable: false,
          nav: true,
        },
      },
    };
    tns(options);
  }, []);
  return (
    <section className="catalog-slider">
      <div className="catalog-slider__container">
        <ul className="catalog-slider__list js-catalog-slider">
          <li className="catalog-slider__li">
            <div
              style={{
                backgroundImage:
                  'url("assets/img/content/catalog-slider-bg.jpg")',
              }}
              className="catalog-slider__item"
            >
              <div className="catalog-slider__header">
                Project site based needs
              </div>
              <img
                src="assets/svg_icons/slider-arrow-right.svg"
                alt=""
                className="catalog-slider__icon"
              />
              <div className="catalog-slider__desc">
                Nuts, bolts, tools, consumables Create bundles &amp; repeat buys
                Local vendors &amp; simple process
              </div>
            </div>
          </li>
          <li className="catalog-slider__li">
            <div
              style={{
                backgroundImage:
                  'url("assets/img/content/catalog-slider-bg.jpg")',
              }}
              className="catalog-slider__item"
            >
              <div className="catalog-slider__header">
                Project site based needs
              </div>
              <img
                src="assets/svg_icons/slider-arrow-right.svg"
                alt=""
                className="catalog-slider__icon"
              />
              <div className="catalog-slider__desc">
                Nuts, bolts, tools, consumables Create bundles &amp; repeat buys
                Local vendors &amp; simple process
              </div>
            </div>
          </li>
          <li className="catalog-slider__li">
            <div
              style={{
                backgroundImage:
                  'url("assets/img/content/catalog-slider-bg.jpg")',
              }}
              className="catalog-slider__item"
            >
              <div className="catalog-slider__header">
                Project site based needs
              </div>
              <img
                src="assets/svg_icons/slider-arrow-right.svg"
                alt=""
                className="catalog-slider__icon"
              />
              <div className="catalog-slider__desc">
                Nuts, bolts, tools, consumables Create bundles &amp; repeat buys
                Local vendors &amp; simple process
              </div>
            </div>
          </li>
          <li className="catalog-slider__li">
            <div
              style={{
                backgroundImage:
                  'url("assets/img/content/catalog-slider-bg.jpg")',
              }}
              className="catalog-slider__item"
            >
              <div className="catalog-slider__header">
                Project site based needs
              </div>
              <img
                src="assets/svg_icons/slider-arrow-right.svg"
                alt=""
                className="catalog-slider__icon"
              />
              <div className="catalog-slider__desc">
                Nuts, bolts, tools, consumables Create bundles &amp; repeat buys
                Local vendors &amp; simple process
              </div>
            </div>
          </li>
          <li className="catalog-slider__li">
            <div
              style={{
                backgroundImage:
                  'url("assets/img/content/catalog-slider-bg.jpg")',
              }}
              className="catalog-slider__item"
            >
              <div className="catalog-slider__header">
                Project site based needs
              </div>
              <img
                src="assets/svg_icons/slider-arrow-right.svg"
                alt=""
                className="catalog-slider__icon"
              />
              <div className="catalog-slider__desc">
                Nuts, bolts, tools, consumables Create bundles &amp; repeat buys
                Local vendors &amp; simple process
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CatalogSlider;
