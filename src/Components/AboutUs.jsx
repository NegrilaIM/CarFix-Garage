import React from "react";
import "./Styles/AboutUs.scss";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="despre-noi">
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
        <p>
          Luni: 09:00-18:00 <br />
          Marti: 09:00-18:00 <br />
          Miercuri: 09:00-18:00 <br />
          Joi: 09:00-18:00 <br />
          Vineri: 09:00-18:00 <br />
          Sambata: 09:00-12:00 <br />
          Duminica: Inchis <br />
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
