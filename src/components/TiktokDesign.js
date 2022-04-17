import React from "react";
import tiktok1 from "../assets/img/tiktok-1.png";
import tiktok2 from "../assets/img/tiktok-2.png";

const TiktokDesign = ({ finalCroppedImage }) => {
  return (
    <div className="p-0  position-relative overflow-auto">
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
          <div
            className="position-relative m-0  align-items-center"
            style={{ width: "max-content" }}
          >
            <img src={tiktok1} className="tiktok_design-base1" alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="tiktok_design-profile1"
              />
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div
            className="position-relative m-0  align-items-center"
            style={{ width: "max-content" }}
          >
            <img src={tiktok2} className="tiktok_design-base2" alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="tiktok_design-profile2"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiktokDesign;
