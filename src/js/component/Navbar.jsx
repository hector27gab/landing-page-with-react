import React from "react";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-100">
          <a className="navbar-brand fw-bold" href="#">
            <spam className="text-light">Start Bootstrap</spam>
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <a
                className="nav-link active text text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text text-light" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
