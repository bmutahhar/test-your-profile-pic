import React from "react";
import AOS from 'aos'
import "../assets/css/main.css";
const Contact = () => {
  AOS.init();
  return (
    <div id="contact_section" className="container mb-5 p-4" data-aos="slide-right" data-aos-duration="1500" data-aos-once="true">
      <div className="row">
        <div className="col-md-6">
          <div className="contact_left d-flex flex-column justify-content-center">
            <h6 className="text-uppercase contact_title fw-bold">Contact</h6>
            <h1 className="mb-5">
              Do you have a question? Or are you interested in advertising? Let
              us know..
            </h1>
            <img src={require("../assets/img/tpp2.png")} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact_form d-flex flex-column justify-content-center">
            <form>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1" className="mb-3">
                  Your name (required)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1" className="mb-3">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1" className="mb-3">
                  Subject (required)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Subject"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1" className="mb-3">
                  Company Name (required)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Company"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="mb-3">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="form-control mb-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit_btn">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
