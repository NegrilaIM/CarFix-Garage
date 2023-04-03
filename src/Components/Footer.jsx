import React from "react";
import "./Styles/Footer.scss";
import DropdownBtn from "./DropDownButton";


function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-social-media">
            <h4>Social Media</h4>
            <i><i class="fa-brands fa-facebook fa-lg"></i></i>
            <i><i class="fa-brands fa-whatsapp fa-lg"></i></i>
            <i><i class="fa-solid fa-envelope fa-lg"></i></i>
        </div>
        <div className="footer-contact">
            <h4>Contact</h4>
            <p>Telefon: +40 720 261 991</p>
            <p>Email: 13carfix@gmail.com</p>
        </div>
        <div className="footer-dropdown">
            <h4>Program</h4>
            <DropdownBtn />
            <DropdownBtn />
        </div>
      </div>
      <h6 className="developer">® All rights reserved by <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/iulian-marinel-negrila/">Negrila Iulian</a></h6>
    </footer>
  );
}

export default Footer;
