import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Design({ finalCroppedImage }) {
  return (
    <TransitionGroup>
      <div className="container mb-5 social_section" id="main-container">
        <div className="row h-100">
          <div className="col-lg-5 insta_profile overflow-scroll">
            <img
              className=""
              src={require("../assets/img/inst.png")}
              alt="insta-base-img"
            />
            {finalCroppedImage !== "" && finalCroppedImage != null && (
              <CSSTransition
                in={finalCroppedImage !== "" && finalCroppedImage != null}
                timeout={1000}
                classNames="fade"
              >
                <img
                  className="profile"
                  src={finalCroppedImage}
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
              </CSSTransition>
            )}

            {/* {finalCroppedImage != "" && finalCroppedImage != null && (
              <img className="profile" src={finalCroppedImage} alt="image" />
            )} */}
          </div>
          <div className="col-lg-5 whatsapp_profile overflow-scroll">
            <img
              className=" "
              src={require("../assets/img/whatsapp.jpeg")}
              alt="whatsapp-base-img"
            />
            {finalCroppedImage !== "" && finalCroppedImage != null && (
              <CSSTransition
                in={finalCroppedImage !== "" && finalCroppedImage != null}
                timeout={1000}
                classNames="fade"
              >
                <img
                  className="profile2"
                  src={finalCroppedImage}
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
              </CSSTransition>
            )}
            {finalCroppedImage !== "" && finalCroppedImage != null && (
              <CSSTransition
                in={finalCroppedImage !== "" && finalCroppedImage != null}
                timeout={1000}
                classNames="fade"
              >
                <img
                  className="profile3"
                  src={finalCroppedImage}
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
              </CSSTransition>
            )}

            {/* {finalCroppedImage != "" && finalCroppedImage != null && (
              <>
                <img className="profile2" src={finalCroppedImage} alt="image" />
                <img className="profile3" src={finalCroppedImage} alt="image" />
              </>
            )} */}
          </div>

          <div className="col-lg-2 social_add h-auto d-flex justify-content-center align-items-center fw-bolder">
            add space
          </div>
        </div>
        <div className="col-12 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
          <h5 className="fw-bold">important</h5>
          <p className="imp_instr text-center">
            we do not save any data or pictures. We care about privacy and
            therefore you can use our tools securely.{" "}
          </p>
        </div>
        <div className="upload_sec_add fw-bolder col-12 mt-4 d-flex justify-content-center align-items-center">
          ad space
        </div>
      </div>
    </TransitionGroup>
  );
}

export default Design;
