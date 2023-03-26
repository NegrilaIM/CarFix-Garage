import React from "react";
import './Styles/AboutUs.scss'

function AboutUs() {
  return (
    <section className="about-us">
      <div className="despre-noi">
        <h2>Despre noi</h2>
        <p>
          Echipa noastră de experti te va ajuta să rezolvi rapid orice problemă
          auto. Stim că iti doresti să găsesti cea mai bună solutie, să te
          bucuri de masina ta cat mai repede, să achiti pretul corect si să fii
          informat cu privire la fiecare pas. Fiecare client ce ne păseste
          pragul ne dorim să plece multumit iar tu poti fi unul dintre ei.
          Dedicăm fiecărei lucrări atentie si implicare, asigurăndu-ne că te vei
        </p>
      </div>
      <div className="working-hours">
        <h2>Program de lucru</h2>
        <p>Luni: 09:00-18:00 <br/>
            Marti: 09:00-18:00 <br/>
            Miercuri: 09:00-18:00 <br/>
            Joi: 09:00-18:00 <br/>
            Vineri: 09:00-18:00 <br/>
            Sambata: 09:00-12:00 <br/>
            Duminica: Inchis <br/>
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
