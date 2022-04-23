import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import fb1 from "../assets/img/FB-1.png";
import fb2 from "../assets/img/FB-2.png";
import fb3 from "../assets/img/FB-3.png";
import fb4 from "../assets/img/FB-4.png";

const FacebookDesign = ({ finalCroppedImage }) => {
  return (
    <TransitionGroup>
      <div className="p-0  position-relative">
        <div className="row">
          <div className="col-lg-7 col-md-12 d-flex flex-column justify-content-center align-items-center facebook-design">
            <div className="position-relative m-0  align-items-center">
              <img src={fb1} alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="facebook_design-profile1"
                  />
                </CSSTransition>
              )}
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center align-items-center align-items-xl-end facebook-design">
            <div
              className="p-4 position-relative"
              style={{ width: "max-content" }}
            >
              <img src={fb2} alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="facebook_design-profile2"
                  />
                </CSSTransition>
              )}
            </div>
            <div
              className="p-5 position-relative"
              style={{ width: "max-content" }}
            >
              <img src={fb3} alt="" className="facebook_design-base2" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="facebook_design-profile3"
                  />
                </CSSTransition>
              )}
            </div>
            <div
              className="p-2 position-relative"
              style={{ width: "max-content" }}
            >
              <img src={fb4} alt="" className="facebook_design-base3" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="facebook_design-profile4"
                  />
                </CSSTransition>
              )}
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  );
};

export default FacebookDesign;
