import React from "react";

function Navbar() {
  return (
    <>
      <div className="container p-4">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              testprofilepic
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Try The Tool
                  </a>
                </li>
                <li className="nav-item ms-lg-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Advertisements
                  </a>
                </li>
                <li className="nav-item ms-lg-5">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
