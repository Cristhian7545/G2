import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/assets/style.css';
import '../styles/assets/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="header-wrapper">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/logitoo.png" alt="Logo" />
          </a>
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa-solid fa-house"></i>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#"><i className="fa-solid fa-gauge"></i>Red</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios"><i className="fa-solid fa-table-cells"></i>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa-solid fa-border-all"></i>Médicos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa-solid fa-user"></i>Cuenta</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="text-center">
            <h4 className="text-primary">Contact Us</h4>
            <h1>If you have any comments<br />please apply now</h1>
          </div>

          <div className="contact-content row">
            <div className="contact-img col-xl-6">
              <div className="contact-img-inner">
                <img src="/assets/img/contact-img.png" alt="Contact Image" />
              </div>
            </div>

            <div className="col-xl-6">
              <h4 className="text-primary">Send Your Message</h4>
              <p>
                The contact form is currently inactive. Get a working contact form in minutes. <a href="#">Download Now.</a>
              </p>
              <form>
                <div className="row">
                  <div className="form-floating col-xl-6">
                    <input type="text" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="form-floating col-xl-6">
                    <input type="email" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating col-xl-6">
                    <input type="text" id="phone" placeholder="Your Phone" />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                  <div className="form-floating col-xl-6">
                    <input type="text" id="project" placeholder="Your Project" />
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="full-width">
                  <div className="form-floating">
                    <input type="text" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="full-width">
                  <div className="form-floating">
                    <textarea id="message" name="message" placeholder="Message"></textarea>
                    <label htmlFor="message">Mensaje</label>
                  </div>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="contact-info-map">
        <div className="container contact-details">
          <div className="info-item">
            <i className="icon">📍</i>
            <h4>Address</h4>
            <p>123 Street New York, USA</p>
          </div>
          <div className="info-item">
            <i className="icon">✉️</i>
            <h4>Mail Us</h4>
            <p>info@example.com</p>
          </div>
          <div className="info-item">
            <i className="icon">📞</i>
            <h4>Telephone</h4>
            <p>(+012) 3456 7890</p>
          </div>
          <div className="info-item">
            <i className="icon">🌐</i>
            <h4>Website</h4>
            <p>yoursite@ex.com</p>
          </div>
        </div>

        <div className="map-wrapper">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6398741.779388219!2d-84.30995977217849!3d-9.190000397670062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c38de66359%3A0x183e18e643ab99a1!2sPer%C3%BA!5e0!3m2!1ses-419!2spe!4v1713574000000!5m2!1ses-419!2spe"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
