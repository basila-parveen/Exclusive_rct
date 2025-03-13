import React from "react";
import Share from "../../assets1/icon_send.svg";
import Qrcode from "../../assets1/Qrcode 1.png";
import Gplay from "../../assets1/google_play.png";
import Apple from "../../assets1/download-appstore.png";
import Copyright from "../../assets1/icon-copyright.svg";
import Facebook from "../../assets1/Icon-Facebook.svg";
import Twitter from "../../assets1/Vector (5).svg";
import Instagram from "../../assets1/icon-instagram.svg";
import Linkedin from "../../assets1/Icon-Linkedin.svg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="wrapper3">
          <div className="footer_contentbox">
            <div className="footer_content">
              <h3>
                <a href="#" class="head">
                  Exclusive
                </a>
              </h3>
              <p className="subscribe">
                <a href="#">Subscribe</a>
              </p>
              <p className="offer">
                <a href="#">Get 10% off your first order</a>
              </p>
              <div className="inputbox2">
                <input type="text" placeholder="Enter your email" />
                <span>
                  <img src={Share} alt="icn" />
                </span>
              </div>
            </div>
            <div className="footer_content">
              <h3>
                <a href="#">Support</a>
              </h3>
              <p>
                <a href="#">
                  111 Bijoy sarani, Dhaka,
                  <br />
                  DH 1515, Bangladesh.
                </a>
              </p>
              <p>
                <a href="#">exclusive@gmail.com</a>
              </p>
              <p>
                <a href="#">+88015-88888-9999</a>
              </p>
            </div>
            <div className="footer_content">
              <h3>
                <a href="#">Account</a>
              </h3>
              <p>
                <a href="#">My Account</a>
              </p>
              <p>
                <a href="#">Login / Register</a>
              </p>
              <p>
                <a href="#">Cart</a>
              </p>
              <p>
                <a href="#">Wishlist</a>
              </p>
              <p>
                <a href="#">Shop</a>
              </p>
            </div>
            <div className="footer_content">
              <h3>
                <a href="#">Quick Link</a>
              </h3>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms Of Use</a>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </div>
            <div className="footer_content">
              <h3>
                <a href="#">Download App</a>
              </h3>
              <p>
                <a href="#" class="new_user">
                  Save $3 with App New User Only
                </a>
              </p>
              <div className="scanner">
                <a href="#">
                  <img src={Qrcode} alt="qr" />
                </a>

                <div className="scanner_station">
                  <a href="#">
                    <img src={Gplay} alt="gp" />
                  </a>
                  <a href="#">
                    <img src={Apple} alt="as" />
                  </a>
                </div>
              </div>
              <div className="SocialMedia">
                <a href="https://www.facebook.com/">
                  <img src={Facebook} />
                </a>

                <a href="https://www.twitter.com/">
                  <img src={Twitter} />
                </a>
                <a href="https://www.instagram.com/">
                  {" "}
                  <img src={Instagram} />
                </a>
                <a href="https://www.linkedin.com/">
                  <img src={Linkedin} />
                </a>
              </div>
            </div>
          </div>
          <hr className="last_hr" />
          <div className="footer_copyright">
            <img src={Copyright} alt="footer" />
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
