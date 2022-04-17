import React from "react";
const Footer = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="social_add fw-bolder col-lg-8 mt-4 d-flex justify-content-center align-items-center text-primary">
            ad space
          </div>

          <div className="col-lg-2 mt-4 d-flex justify-content-center">
            <div
              className="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
            >
              <h5 className="f-title f_600 t_color f_size_18">COMPANY</h5>
              <ul className="list-unstyled f_list footer_data mt-4">
                <li className="mb-3">
                  <a href="/">Try Our Tool</a>
                </li>
                <li className="mb-3">
                  <a href="/">Advertisements</a>
                </li>
                <li className="mb-3">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 mt-3 d-flex justify-content-center">
            <h1 className="">testprofile pic</h1>
          </div>
        </div>
      </div>

      <div className="mt-5 pb-2 d-flex justify-content-center">
        <p className="mb-0 f_400">design & ontwikkeling door Mar</p>
      </div>
    </div>
  );
};

export default Footer;
