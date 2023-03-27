import React from "react";
import '../Components/Styles/Program.scss'

function Program() {

  function CallMe() {
    window.location.href = 'tel: +40731689359'
  }

  return (
    <section className="program">
      <div className="contact">
        <h4>Contact</h4>
        <div className="d_flex">
          <p>Nr. Telefon: <br /> <i class="fa-solid fa-phone fa-shake fa-xl"></i> <a onClick={CallMe} target="_blank" href="/">0731689359</a></p>
          <p>Email: <br /> <i class="fa-solid fa-envelope fa-xl"></i> email@email.com</p>
        </div>
      </div>
    </section>
  );
}

export default Program;
