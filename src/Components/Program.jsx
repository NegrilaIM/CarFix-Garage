import React from "react";
import '../Components/Styles/Program.scss'
import { useState, useEffect } from "react";
import { WorkingHours } from "../Data/WorkingHours";

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

  return (
    <section className="program" id="program">
      <div className="contact">
        <h4>Contact</h4>
        <div className="d_flex">
          <p>Nr. Telefon: <br /> <i class="fa-solid fa-phone fa-shake fa-xl"></i> <a onClick={CallMe} target="_blank" href="/">0720261991</a></p>
          <p>Email: <br /> <i class="fa-solid fa-envelope fa-xl"></i> 13carfix@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Program;
