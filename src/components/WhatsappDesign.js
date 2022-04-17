import React from "react";
import whatsapp1 from "../assets/img/whatsapp-1.png";
import whatsapp2 from "../assets/img/whatsapp-2.png";
import whatsapp3 from "../assets/img/whatsapp-3.png";
import whatsapp4 from "../assets/img/whatsapp-4.png";

const WhatsappDesign = ({ finalCroppedImage }) => {
  return (
    <div className="p-0 border border-primary position-relative overflow-auto">
      <div className="row">
        <div className="col-lg-6 col-md-12 border border-secondary">
          <div className="position-relative m-0 border border-primary align-items-center" style={{width:"max-content"}}>
            <img src={whatsapp1} className="whatsapp_design-base1" alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="whatsapp_design-profile1"
              />
            )}

            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="whatsapp_design-profile2"
              />
            )}
          </div>
          <div
            className="pt-4 position-relative border border-secondary"
            style={{ width: "max-content" }}
          >
            <img src={whatsapp2} className="whatsapp_design-base2" alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <>
                <img
                  src={finalCroppedImage}
                  alt=""
                  className="whatsapp_design-profile3"
                />
              </>
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md-12 border border-secondary">
          <div className="position-relative" style={{ width: "max-content" }}>
            <img src={whatsapp4} alt="" className="whatsapp_design-base3" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="whatsapp_design-profile4"
              />
            )}
          </div>
          <div
            className="pt-4 position-relative"
            style={{ width: "max-content" }}
          >
            <img src={whatsapp3} className="whatsapp_design-base4" alt="" />
            {finalCroppedImage != null && finalCroppedImage !== "" && (
              <img
                src={finalCroppedImage}
                alt=""
                className="whatsapp_design-profile5"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappDesign;
