import React, { useState, useEffect } from "react";

import Dropzone from "react-dropzone";
import Design from "./Design";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const UploadImg = () => {
  const [tempImage, setTempImage] = useState(null);
  const [cropImage, setcropImage] = useState(null);
  const [finalCroppedImage, setFinalCroppedImage] = useState(null);

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
  return (
    <>
      <div id="img-upload" className="container mb-5 p-4">
        <Dropzone onDrop={handleDrop} maxFiles={1} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <i className="fa fa-plus-circle mb-4" aria-hidden="true"></i>

              <small>
                upload or drag <br /> or refresh to try again
              </small>
            </div>
          )}
        </Dropzone>
        <div>
          <div className="row">
            {tempImage && (
              <div className="col-lg-12 mt-5 mb-5 d-flex align-align-items-center justify-content-center">
                <>
                  <ReactCrop
                    src={tempImage}
                    onImageLoaded={setcropImage}
                    crop={crop}
                    onChange={setCrop}
                  />
                </>
              </div>
            )}
            <div className="col-lg-12">
              <a className="btn btn-primary d-block" onClick={getCroppedImg}>
                Check Profile
              </a>
            </div>
          </div>
        </div>
        <div className="upload_sec_add fw-bolder col-12 mt-4 d-flex justify-content-center align-items-center">
          ad space
        </div>
        <div className="row imprt_instr_section mt-4 p-2 p-md-2 h-auto">
          <div className="col-md-5 p-2 d-flex flex-column justify-content-center align-items-md-start align-items-center">
            <h5>Instagram</h5>
            <p>Compatible with LinkedIn</p>
            <p>WhatsApp, Instagram, etc.</p>
          </div>
          <div className="col-md-5 p-2 d-flex flex-column justify-content-center align-items-md-start align-items-center">
            <h5>WhatsApp</h5>
            <p>Compatible with LinkedIn</p>
            <p>WhatsApp, Instagram, etc.</p>
          </div>
        </div>
      </div>
      <Design finalCroppedImage={finalCroppedImage} />
    </>
  );
};
export default UploadImg;
