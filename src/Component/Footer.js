import React from "react";
import "../Component/Footer.css";
import { LOGO } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="parent">
      <div className="home_footer">
        <div className="logo_row">
          <img src={LOGO} alt="food" />
          <b>YumRun</b>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not
        </p>
        <div className="lodo_so">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI4yriK7VQa75x57C5GJZ6BLePZsENBwmzQ&s" alt="facebook"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI4yriK7VQa75x57C5GJZ6BLePZsENBwmzQ&s" alt="facebook"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI4yriK7VQa75x57C5GJZ6BLePZsENBwmzQ&s" alt="facebook"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI4yriK7VQa75x57C5GJZ6BLePZsENBwmzQ&s" alt="facebook"></img>

            
          </div>
      </div>

      <div className="pages_footer">
        <label
          style={{
            color: "white",
            alignItems: "start",
          }}
        >
          Pages
        </label>

        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Cart</p>
      </div>

      <div className="service_footer">
        <label
          style={{
            color: "white",
          }}
        >
          service
        </label>

        <p>Restaurant Listing</p>
        <p>Menu Management</p>
        <p>Bulk Orders</p>
        <p>Party Orders</p>
        <p>Cloud Kitchen Support</p>
      </div>
      <div className="map_location">
        <h4>Maps Location</h4>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.642120207283!2d77.13818217409751!3d28.704311180820017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017cd13394f5%3A0x811f2d3fe616d07a!2sPC%20Training%20Institute%20Limited%20(PCTIL)!5e1!3m2!1sen!2sin!4v1769801846833!5m2!1sen!2sin"
          width="100%"
          height="220"
          style={{ marginTop: "5px" }}
          //   allowFullScreen=""
          //   loading="lazy"
          //   referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
