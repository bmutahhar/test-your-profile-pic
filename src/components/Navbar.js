import React, { useState, useEffect } from "react";

function Navbar() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <div className="container p-4">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
            testprofilepicture
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#img-upload"
                  >
                    Try The Tool
                  </a>
                </li>
                <li className="nav-item ms-lg-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Advertisements
                  </a>
                </li>
                <li className="nav-item ms-lg-5">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#contact_section"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {showTopBtn && (
          <button onClick={goToTop} className="scroll-to-top-btn btn btn-primary rounded-circle">
            <i className="fa fa-chevron-up"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
