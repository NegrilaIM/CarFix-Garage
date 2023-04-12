import React from "react";
import "./Styles/Footer.scss";

function Footer() {

  function Whatapp(phoneNumber) {
    const message = encodeURIComponent('Salut! Vreau să vorbesc cu tine.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url);
  }
  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-social-media">
            <h4>Social Media</h4>
            <a href="https://www.facebook.com/profile.php?id=100074504376904" target="_blank" rel="norefferer"><i class="fa-brands fa-facebook fa-lg"></i></a>
            <a onClick={() => Whatapp('+40720261991')} href="/"><i class="fa-brands fa-whatsapp fa-lg"></i></a>
            <a onClick={() => Email('13carfix@gmail.com')} href="/"  ><i class="fa-solid fa-envelope fa-lg"></i></a>
        </div>
        <div className="footer-contact">
            <h4>Contact</h4>
            <p>Telefon: +40 720 261 991</p>
            <p>Email: 13carfix@gmail.com</p>
        </div>
        <div className="footer-program">
            <h4>Program</h4>
            <p>Luni-Vineri: 09:00-18.00</p>
            <p>Sambata: 09:00-13:00</p>
            <p>Duminica: Inchis</p>
        </div>
      </div>
      <h6 className="developer">® All rights reserved by <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/iulian-marinel-negrila/">Negrila Iulian</a></h6>
    </footer>
  );
}

export default Footer;
