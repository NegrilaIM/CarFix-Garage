import React from "react";
import "./Styles/AboutUs.scss";
import { useState, useEffect } from "react";
import { WorkingHours } from "../Data/WorkingHours";

function AboutUs() {

  const [dayOfWeek, setDayOfWeek] = useState(null);

  useEffect(() => {
    const date = new Date();
    const currentDay = date.getDay();
    setDayOfWeek(currentDay);
  }, []);

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
        <div className="lists">
        {WorkingHours.map((item,index) => {
          return(
            <div key={index}>
              <ul>
                <li className={dayOfWeek -1 === index ? "turcoeaz" : ""}>{item.day}</li>
                <li className={dayOfWeek -1 === index ? "turcoeaz" : ""}>{item.hours}</li>
              </ul>
            </div>
          )
        })}
        </div>
        </div>
    </section>
  );
}

export default AboutUs;
