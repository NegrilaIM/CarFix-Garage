import React from "react";
import "./Styles/Parteneri.scss";
import AUTONET from "../Assets/Parteners/AUTONET.png";
import BARDIAUTO from "../Assets/Parteners/BARDIAUTO.png";
import CONEX from "../Assets/Parteners/CONEX.png";
import ELIT from "../Assets/Parteners/ELIT.jpg";
import INTERCARS from "../Assets/Parteners/INTERCARS.png";
import MOBIL1 from "../Assets/Parteners/MOBIL1.png";
import MOTUL from "../Assets/Parteners/MOTUL.png";
import RAVENOL from "../Assets/Parteners/RAVENOL.png";
import UNIX from "../Assets/Parteners/UNIX.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Parteneri() {
  return (
    <section className="parteneri" id="parteneri">
      <div>
        <h2>Partenerii nostri</h2>
      </div>
      <MDBCarousel>
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={1}
          src={AUTONET}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={2}
          src={BARDIAUTO}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={3}
          src={CONEX}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={4}
          src={ELIT}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={5}
          src={INTERCARS}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={6}
          src={MOBIL1}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={7}
          src={MOTUL}
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={8}
          src={RAVENOL}
          alt="www.ravenol.ro"
        />
        <MDBCarouselItem
          className="w-100 photo d-block"
          itemId={9}
          src={UNIX}
          alt="https://www.unixauto.ro/"
        />
      </MDBCarousel>
    </section>
  );
}

export default Parteneri;
