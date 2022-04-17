import React from "react";
import insta1 from "../assets/img/instagram-1.png";
import insta2 from "../assets/img/instagram-2.png";
import insta3 from "../assets/img/instagram-3.png";
import insta4 from "../assets/img/instagram-4.png";
import insta5 from "../assets/img/instagram-5.png";

const InstagramDesign = ({ finalCroppedImage }) => {
  return (
    <div className="p-0  position-relative overflow-auto">
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
          <div
            className="position-relative m-0  align-items-center"
          >
            <img src={insta1} alt="" />
            {finalCroppedImage != null && finalCroppedImage != "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="instagram_design-profile1"
              />
            )}
          </div>
          <div
            className="position-relative "
            style={{ width: "max-content" }}
          >
            <img src={insta5} alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <>
                <img
                  src={finalCroppedImage}
                  alt=""
                  className="instagram_design-profile2"
                />
                <img
                  src={finalCroppedImage}
                  alt=""
                  className="instagram_design-profile3"
                />
              </>
            )}
          </div>
        </div>
        <div className="col-lg-6 col-md-12 instagram_design align-items-xl-end align-items-center">
          <div
            className="p-4 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={insta2} alt="" className="instagram_design-base1" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="instagram_design-profile4"
              />
            )}
          </div>
          <div
            className="p-4 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={insta3} alt="" className="instagram_design-base2" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="instagram_design-profile5"
              />
            )}
          </div>
          <div
            className="p-2 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={insta4} alt="" className="instagram_design-base3" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="instagram_design-profile6"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramDesign;
