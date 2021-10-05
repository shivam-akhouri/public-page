import React from "react";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Modal } from "bootstrap";
import RegisterModal from "./RegisterModal";
function openModal(e) {
  e.preventDefault();
  let subsModal = new Modal(document.getElementById("registmodal"));
  subsModal.show();
}
function MainSlider() {
  return (
    <OwlCarousel
      items={1}
      className="loop owl-carousel owl-theme1 bg-white"
      center={true}
      loop={true}
      margin={0}
      nav={false}
      stagePadding={0}
      autoplay={true}
      autoplayTimeout={6000}
      autoplayHoverPause={true}
    >
      <div className="item">
        <div className="slider-box">
          <div className="sb-left">
            <img src={"images/slide1.jpg"} alt="slide 1" />
          </div>
          <div className="sb-right">
            <h3>India’s biggest mentorship programme</h3>
            <h3 className="text-white py-3">देश के मेन्टर</h3>
            <Link
              to="#"
              onClick={openModal}
              className="btn btn-primary btn-lg text-yellow"
            >
              Register Now &#10148;
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-box">
          <div className="sb-left">
            <img src={"images/slide2.jpg"} alt="slide 2" />
          </div>
          <div className="sb-right">
            <h3>India’s biggest mentorship programme</h3>
            <h3 className="text-white py-3">देश के मेन्टर</h3>
            <Link
              to="/"
              onClick={openModal}
              className="btn btn-primary btn-lg text-yellow"
            >
              Register Now &#10148;
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-box">
          <div className="sb-left">
            <img src={"images/slide3.jpg"} alt="slide 3" />
          </div>
          <div className="sb-right">
            <h3>India’s biggest mentorship programme</h3>
            <h3 className="text-white py-3">देश के मेन्टर</h3>
            <Link
              to="/"
              onClick={openModal}
              className="btn btn-primary btn-lg text-yellow"
            >
              Register Now &#10148;
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-box">
          <div className="sb-left">
            <img src={"images/slide4.jpg"} alt="slide 4" />
          </div>
          <div className="sb-right">
            <h3>India’s biggest mentorship programme</h3>
            <h3 className="text-white py-3">देश के मेन्टर</h3>
            <Link
              to="/"
              onClick={openModal}
              className="btn btn-primary btn-lg text-yellow"
            >
              Register Now &#10148;
            </Link>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slider-box">
          <div className="sb-left">
            <img src={"images/slide5.jpg"} alt="slide 5" />
          </div>
          <div className="sb-right">
            <h3>India’s biggest mentorship programme</h3>
            <h3 className="text-white py-3">देश के मेन्टर</h3>
            <Link
              to="/"
              onClick={openModal}
              className="btn btn-primary btn-lg text-yellow"
            >
              Register Now &#10148;
            </Link>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}
export default MainSlider;
