import React from "react";
import '../Components/Styles/Program.scss'
import { useState, useEffect } from "react";
import { WorkingHours } from "../Data/WorkingHours"

function Program() {

  const [dayOfWeek, setDayOfWeek] = useState(null);

  useEffect(() => {
    const date = new Date();
    const currentDay = date.getDay();
    setDayOfWeek(currentDay);
  }, []);

  function CallMe() {
    window.location.href = 'tel: +40720261991'
  }

  function Email(emailAddress) {
    const subject = encodeURIComponent('Salut!');
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;
    window.location.href = mailtoLink;
  }

  return (
    <section className="program" id="program">
      <div className="contact">
        <h4>Contact</h4>
        <div className="d_flex">
          <p>Nr. Telefon: <br /> <i class="fa-solid fa-phone fa-shake fa-xl"></i> <a onClick={CallMe} target="_blank" href="/">0720261991</a></p>
          <p onClick={() => Email('13carfix@gmail.com')}>Email: <br /> <i class="fa-solid fa-envelope fa-xl"></i> 13carfix@gmail.com</p>
        </div>
      </div>
      <div className="about-us">
        <h2>Adresa noastra</h2>
        <p>
          <b>Strada Grânelor, Fetești-Gară 925150</b> <br />
          Sau puteti apasa butonul de mai jos pentru <br />
          a activa gps-ul pentru adresa noastra <br />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              "CarFix Garage, Strada Grânelor, Fetești-Gară 925150"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Activeaza GPS
          </a>
        </p>
      </div>
      <div className="working-hours">
        <h2>Program de lucru</h2>
        <div className="lists">
        {WorkingHours.map((item,index) => {
          return(
            <div key={index}>
              <ul>
                <li className={dayOfWeek -1 === index ? "turqoise" : ""}>{item.day}</li>
                <li className={dayOfWeek -1 === index ? "turqoise" : ""}>{item.hours}</li>
              </ul>
            </div>
          )
        })}
        </div>
        </div>
    </section>
  );
}

export default Program;
