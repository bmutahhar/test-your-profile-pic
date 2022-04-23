import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import tiktok1 from "../assets/img/tiktok-1.png";
import tiktok2 from "../assets/img/tiktok-2.png";

const TiktokDesign = ({ finalCroppedImage }) => {
  return (
    <TransitionGroup>
      <div className="p-0  position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center my-4 tiktok-design">
            <div
              className="position-relative m-0  align-items-center"
              style={{ width: "max-content" }}
            >
              <img src={tiktok1} className="tiktok_design-base1" alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="tiktok_design-profile1"
                  />
                </CSSTransition>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center my-4 tiktok-design">
            <div
              className="position-relative m-0  align-items-center"
              style={{ width: "max-content" }}
            >
              <img src={tiktok2} className="tiktok_design-base2" alt="" />
              {finalCroppedImage != null && finalCroppedImage !== "" && (
                <CSSTransition
                  in={finalCroppedImage != null && finalCroppedImage !== ""}
                  timeout={700}
                  classNames="fade"
                >
                  <img
                    src={finalCroppedImage}
                    alt=""
                    className="tiktok_design-profile2"
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

export default TiktokDesign;
