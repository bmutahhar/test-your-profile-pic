import React from "react";
import fb1 from "../assets/img/FB-1.png"
import fb2 from "../assets/img/FB-2.png"
import fb3 from "../assets/img/FB-3.png"
import fb4 from "../assets/img/FB-4.png"

const FacebookDesign = ({ finalCroppedImage }) => {
  return (
    <div className="p-0  position-relative overflow-auto">
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
          <div
            className="position-relative m-0  align-items-center"
          >
            <img src={fb1} alt="" />
            {finalCroppedImage != null && finalCroppedImage != "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="facebook_design-profile1"
              />
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 facebook_design align-items-xl-end align-items-center">
          <div
            className="p-4 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={fb2} alt=""  />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="facebook_design-profile2"
              />
            )}
          </div>
          <div
            className="p-5 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={fb3} alt="" className="facebook_design-base2" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="facebook_design-profile3"
              />
            )}
          </div>
          <div
            className="p-2 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={fb4} alt="" className="facebook_design-base3" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="facebook_design-profile4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookDesign;
