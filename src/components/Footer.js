import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";

function openModal(e) {
  e.preventDefault();
  let subsModal = new Modal(document.getElementById("registmodal"));
  subsModal.show();
}

export default function Footer() {
  return (
    <footer className="container-fluid" id="contact-us">
      <div className="row">
        <div className="col-sm-5 col-lg-3 py-4">
          <Link to="{}" className="footer-logo">
            <img src={"images/footerlogo.png"} alt="logo" className="footer-logo" />
          </Link>
        </div>
        <div className="col-6 col-sm-7 col-lg-3 py-4">
          <h4>About Desh Ke Mentor</h4>
          <ul className="footer-links">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a className="footer-links"
                href="https://docs.google.com/document/d/1OeOFTGfRV8TLPvO99cCaVnnWzyMuMpa7p0pTpdTiDfM/edit?usp=sharing"
              >Team</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1N_zvwn_DQqCU8qE-eLSBHtZwIedGmNKDfQlcqRLdk7s/edit?usp=sharing"
                className="footer-links"
              >
                FAQ
              </a>
            </li>
            <li>
              <a className="disabled">Contact us</a>
            </li>
            <li>
              <a className="disabled">Terms of Use</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1O8Q0SlQZnmVC71oJsvDnfOMjF_XmaGPMm1gseR_osv8/edit?usp=sharing" 
                className="footer-links">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-6 col-lg-3 py-4">
          <h4>Get Involved</h4>
          <ul className="footer-links">
            <li>
              <a href="#" onClick={openModal} className="footer-links">
                Join as a Mentor
              </a>
            </li>
            <li>
              <a
                className="footer-links" data-bs-toggle="modal" data-bs-target="#menteemodal">Join as a Mentee
                <div class="modal fade" id="menteemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title large d-block text-blue" id="exampleModalLabel">Join As Mentee</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body text-black">
                      Delhi government school students in classes 9th to 12th can contact their class teacher or their school principal to learn how to register themselves for this programme.
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary px-4 mb-4" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </a>

            </li>
            <li>
              <a
                href="https://forms.gle/K9oBwyiPcitmkMTC7"
                className="footer-links"
              >
                Give Suggestions
              </a>
            </li>
            <li>
              <a className="footer-links"
                href="https://forms.gle/E71ipXFmzWqowQ7U7"
              >Join the team</a>
            </li>
            <li>
              <a 
                href="https://docs.google.com/document/d/1csSpMTWPC7SelhezGkp4w0BnJHLMIEux42BQBZFKdiI/edit?usp=sharing" 
                className="footer-links">Vacancies</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-4">
          <h4>Join The Conversation</h4>
          <ul className="list-inline footer-social">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/Desh-Ke-Mentor-107174851688515/">
                <svg className="icon icon-4x">
                  <use href="#icon_facebook"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/DeshKeMentor?s=20">
                <svg className="icon icon-4x">
                  <use href="#icon_twitter"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com/deshkementor?utm_medium=copy_link">
                <svg className="icon icon-4x">
                  <use href="#icon_instagram"></use>
                </svg>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://youtube.com/channel/UCW2QzzkkzohkKYhVFpsfiAw">
                <svg className="icon icon-4x">
                  <use href="#icon_youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
          <h4>Info</h4>
          <ul className="footer-links">
            <li className="footer-links">
              <a className="footer-links disabled">Address</a> <br />
              <p className="footer-para">
                FW4FF9, 1st Floor<br />
                Mechanical Engineering Department
                Delhi Technological University<br />
                Bawana Road, Delhi-110042, India
              </p>
            </li>
            <li>
              <a className="footer-links disabled">Phone</a> <br />
              <p className="footer-para">
                +91 11 2729 8073<br />
                +91 93158 49885<br />
              </p>
            </li>
            <li>
              <a className="footer-links disabled">Email</a> <br />
              <p className="footer-para">
                contact@deshkementor.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row copyrights mt-4">
        <div className="col-sm-12 py-4">
          &copy; 2021 DKM | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
