import React from 'react'
import icon4 from '../../../assets/img/icon4.png'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <section className="wrap-footer">
          <div className="wrap-row-footer">
            <div className=".wrap-column-footer">
              <img
                src={icon4}
                style={{ width: "44px", height: "44px" }}
                alt=""
              />

              <h4 className="text9">
                Plan and book your perfect trip with expert advice, travel tips
                for vehicle information from us
              </h4>
              <h4 className="text9">
                &copy;2020 Vehicle Rental Center. All rights reserved
              </h4>
            </div>
            <div className=".wrap-column-footer">
              <h3 className="text10">Destination</h3>
              <div className="col">
                <a href="/" className="text-options">
                  Bali
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Yogyakarta
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Jakarta
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Kalimantan
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Malang
                </a>
              </div>
            </div>
            <div className=".wrap-column-footer">
              <h3 className="text10">Vehicle</h3>
              <div className="col">
                <a href="/" className="text-options">
                  Bike
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  car
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Motorbike
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Return Times
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  FAQs
                </a>
              </div>
            </div>
            <div className=".wrap-column-footer">
              <h3 className="text10">Interest</h3>
              <div className="col">
                <a href="/" className="text-options">
                  Adventure Travel
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Art And Culture
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Family Holyday
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Kalimantan
                </a>
              </div>
              <div className="col">
                <a href="/" className="text-options">
                  Culinary Trip
                </a>
              </div>
            </div>
          </div>

          <footer>
            <div className="wrap-footer2">
              <div className="line3"></div>
              <div className="social-media">
                <i className="fab fa-twitter" style={{ fontSize: "26px" }}></i>
                <i
                  className="fab fa-facebook-f"
                  style={{ fontSize: "26px" }}
                ></i>
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "26px" }}
                ></i>
                <i
                  className="fab fa-linkedin-in"
                  style={{ fontSize: "26px" }}
                ></i>
                <i className="fab fa-youtube" style={{ fontSize: "26px" }}></i>
              </div>
            </div>
          </footer>
        </section>
        </div>
    )
}
