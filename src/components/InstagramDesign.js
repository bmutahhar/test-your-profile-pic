import React from "react";
import insta1 from "../assets/img/instagram-1.png";
import insta2 from "../assets/img/instagram-2.png";
import insta3 from "../assets/img/instagram-3.png";
import insta4 from "../assets/img/instagram-4.png";
import insta5 from "../assets/img/instagram-5.png";

const InstagramDesign = () => {
  return (
    <div className="p-0 border border-primary position-relative overflow-auto">
      <div className="row">
        <div className="col-lg-6 col-md-12   border border-primary">
          <img src={insta1} alt="" />
          <img src={insta5} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 instagram_design align-items-xl-end">
          <div className="p-4">
            <img src={insta2} alt="" className="instagram_design-pic1" />
          </div>
          <div className="p-4">
            <img src={insta3} alt="" className="instagram_design-pic2" />
          </div>
          <div className="p-2">
            <img src={insta4} alt="" className="instagram_design-pic3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramDesign;
