import React from "react";

function Banner() {
  return (
    <>
      <div className="container mt-5 p-4 mb-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              className="banner_img mb-5"
              src={require("../assets/img/tpp1.png")}
              alt="image"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center banner">
            <h1 className="fw-bolder mb-4">
              Want to test a new profile picture without anyone noticing?
            </h1>
            <p className="mb-4">
              Annoying right, when everyone else can see that you are looking
              for a new profile pic.. Try it out here and see what it looks on
              all social platforms. <strong>Unlimited</strong>. For <strong>free</strong>
            </p>
            <a className="btn btn-primary w-25 p-2 mb-4" href="#img-upload">
              Try our tool
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
