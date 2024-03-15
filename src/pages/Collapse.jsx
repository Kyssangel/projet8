
import { useState } from "react";
import logementsData from "../../public/logements.json";
import Vector from "../assets/images/ChevronUp.png";

export default function Collapse({ title, id }) {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");

  const logement = logementsData.find((logement) => logement.id === id);

  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
  }

  return (
    <div>
      <div className="collapse-block" onClick={inputCollapse}>
        <h1 id="title">{title}</h1>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="chevron"
          />
        </button>
      </div>
      <div
        className={`texte ${isActive}`}
        key={id}
        style={{ display: `${display}` }}
      > <h3>Déscription</h3>
        <p>{logement.description}</p>
       
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

