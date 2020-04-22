import React, { useEffect } from "react";
import CatalogSlider from "./components/CatalogSlider";

const Join = () => {
  return (
    <section className="join">
      <div className="container join__container">
        <div className="join__aside">
          <form action="" className="join__auth-form">
            <ul className="join__auth">
              <li className="join__auth-li">
                <input type="text" placeholder="Username" className="field" />
              </li>
              <li className="join__auth-li">
                <input type="text" placeholder="Password" className="field" />
              </li>
              <li className="join__auth-li">
                <button className="btn btn--red   " type="button">
                  <span className="btn__text">Login</span>
                  <svg className="icon icon-arrow-right btn__icon">
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </button>
              </li>
            </ul>
          </form>
          <a href="#" className="join__reset-pass">
            Forgot Password?
          </a>
        </div>
        <div className="join__content">
          <CatalogSlider />
        </div>
      </div>
    </section>
  );
};

export default Join;
