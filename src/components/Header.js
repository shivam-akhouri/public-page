import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "bootstrap";
import RegisterModal from "./RegisterModal";

export default function Header() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navigation a");
    navLinks.forEach((l) => {
      l.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
    });
  });

  function openModal(e) {
    e.preventDefault();
    let subsModal = new Modal(document.getElementById("registmodal"));
    subsModal.show();
  }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-md-5 col-lg-4">
              <Link to="#" className="top-logo">
                <img src={"images/logo.png"} alt="logo" />
              </Link>
            </div>
            <div className="col d-none d-lg-block text-center">
              <h1>देश के मेन्टर</h1>
              <h5>An initiative of Youth for Education</h5>
            </div>
            <div className="col-6 col-md-7 col-lg-4 text-end">
              <button className="btn btn-light rounded-0 d-inline-block d-md-none mobile-menu-toggle">
                <svg className="icon icon-5x">
                  <use href="#icon_list"></use>
                </svg>
              </button>
              <div className="d-none d-md-inline-block ">
                <ul className="list-inline text-nowrap">
                  <li className="list-inline-item">
                    <Link to="#" className="top-social social-fb">
                      <a href="https://www.facebook.com/Desh-Ke-Mentor-107174851688515/" style={{color: "inherit" }}>
                        <svg className="icon icon-4x">
                          <use href="#icon_facebook"></use>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="top-social social-insta">
                      <a href="https://instagram.com/deshkementor?utm_medium=copy_link" style={{color: "inherit" }}>
                        <svg className="icon icon-4x">
                          <use href="#icon_instagram"></use>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="top-social social-tw">
                      <a href="https://twitter.com/DeshKeMentor?s=20" style={{color: "inherit" }}>
                        <svg className="icon icon-4x">
                          <use href="#icon_twitter"></use>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="top-social social-yt">
                      <a href="https://youtube.com/channel/UCW2QzzkkzohkKYhVFpsfiAw" style={{color: "inherit" }}>
                        <svg className="icon icon-4x">
                          <use href="#icon_youtube"></use>
                        </svg>
                      </a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-sm btn-outline-primary text-uppercase"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-sm btn-primary text-uppercase"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
                <div className="text-center">
                  <img
                    src={"images/delhi-sarkar.png"}
                    className="mw-100"
                    alt="delhisakar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navigation">
        <a href="" className="disabled">
            Home
        </a>
        <a href="#about-us">
            About Us
        </a>
        <a href="#our-impact">
          Our Impact
        </a>
        <a href="#" onClick={openModal} title="Register">
          Register
        </a>
        <a href="" className="disabled">
          Delhi Education Revolution
        </a>
        <a href="https://docs.google.com/document/d/1N_zvwn_DQqCU8qE-eLSBHtZwIedGmNKDfQlcqRLdk7s/edit?usp=sharing">
          FAQ
        </a>
      </nav>

      {/* Register Modal */}
      <RegisterModal></RegisterModal>
    </>
  );
}
