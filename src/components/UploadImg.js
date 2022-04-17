import React, { useState, useRef, useEffect } from "react";

import Dropzone from "react-dropzone";
import Design from "./Design";
import InstagramDesign from "./InstagramDesign";
import ReactCrop from "react-image-crop";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-circle.svg";

import "react-image-crop/dist/ReactCrop.css";
import FacebookDesign from "./FacebookDesign";
import WhatsappDesign from "./WhatsappDesign";

const UploadImg = () => {
  const [tempImage, setTempImage] = useState(null);
  const [cropImage, setcropImage] = useState(null);
  const [finalCroppedImage, setFinalCroppedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cropSection = useRef(null);

  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    unit: "px",
    x: 50,
    y: 0,
    height: 200,
    width: 200,
  });

  const handleDrop = (acceptedFiles) => {
    setFinalCroppedImage(null);
    acceptedFiles.map((file) => {
      setTempImage(window.URL.createObjectURL(file));
    });
    cropSection?.current.scrollIntoView();
  };

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = cropImage.naturalWidth / cropImage.width;
    const scaleY = cropImage.naturalHeight / cropImage.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      cropImage,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/png");
    setFinalCroppedImage(base64Image);
  }

  const changeActiveIndex = (idx) => {
    setActiveIndex(idx);
  };
  return (
    <section id="img-upload" className="upload_section">
      <div className="container mb-5 p-4">
        <div>
          <div className="row">
            <div className="row mt-5 mb-5">
              <div className="col-4 text-justify">
                <h3>
                  Select the part of the image that you wish to set as your
                  profile.
                </h3>
                <p>
                  Once you have selected the part you wish as your new profile
                  pic. press the “Check Profile” button below. Everytime you
                  select a new section of an image, or upload a new picture,
                  make sure to hit the button below.
                </p>
              </div>
              <div className="upload_sec_add fw-bolder col-8 d-flex justify-content-center align-items-center text-primary">
                ad space
              </div>
            </div>
            <Dropzone onDrop={handleDrop} maxFiles={1} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <PlusIcon className="upload-icon" />

                  <small>
                    upload or drag <br /> or refresh to try again
                  </small>
                </div>
              )}
            </Dropzone>

            <div
              ref={cropSection}
              id="crop_img_section"
              className="col-lg-12 d-flex align-align-items-center justify-content-center"
            >
              {tempImage && (
                <ReactCrop
                  src={tempImage}
                  onImageLoaded={setcropImage}
                  crop={crop}
                  onChange={setCrop}
                />
              )}
            </div>

            <div className="col-lg-12 mt-5">
              <a className="btn btn-primary d-block" onClick={getCroppedImg}>
                Check Profile
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-xl-2 col-lg-12 mb-xl-0 mb-2">
            <div className="h-100 row  border border-primary d-flex flex-xl-column justify-content-lg-evenly">
              <div className="social_links col-xl-12 col-lg-4 mb-xl-3">
                <div
                  className={`social_links-item ${
                    activeIndex === 0 ? "fw-bolder" : ""
                  }`}
                  onClick={() => changeActiveIndex(0)}
                >
                  Instagram
                </div>
                <div
                   className={`social_links-item ${
                    activeIndex === 1 ? "fw-bolder" : ""
                  }`}
                  onClick={() => changeActiveIndex(1)}
                >
                  Facebook
                </div>
                <div
                   className={`social_links-item ${
                    activeIndex === 2 ? "fw-bolder" : ""
                  }`}
                  onClick={() => changeActiveIndex(2)}
                >
                  Whatsapp
                </div>
                <div
                   className={`social_links-item ${
                    activeIndex === 3 ? "fw-bolder" : ""
                  }`}
                  onClick={() => changeActiveIndex(3)}
                >
                  Tiktok
                </div>
              </div>
              <div className="col-xl-12 col-lg-4 social_add text-primary flex-xl-grow-1">
                ad space
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-12">
            {activeIndex === 0 && <InstagramDesign finalCroppedImage={finalCroppedImage} />}
            {activeIndex === 1 && <FacebookDesign finalCroppedImage={finalCroppedImage} />}
            {activeIndex === 2 && <WhatsappDesign finalCroppedImage={finalCroppedImage} />}
          </div>
          <div className="col-xl-2 p-0 border border-primary">
            <div className="h-100 social_add fw-bolder d-flex justify-content-center align-items-center text-primary">
              ad space
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UploadImg;
