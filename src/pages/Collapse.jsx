import { useState } from "react";
import logementsData from "../../public/logements.json";
import Vector from "../assets/images/ChevronUp.png";

export default function LogementPage({ id }) {
  const [displayDescription, setDisplayDescription] = useState("none");
  const [isActiveDescription, setIsActiveDescription] = useState("");
  const [rotateDescription, setRotateDescription] = useState("180deg");

  const [displayEquipements, setDisplayEquipements] = useState("none");
  const [isActiveEquipements, setIsActiveEquipements] = useState("");
  const [rotateEquipements, setRotateEquipements] = useState("180deg");

  const logement = logementsData.find((logement) => logement.id === id);

  function toggleDescription() {
    setIsActiveDescription(isActiveDescription === "" ? "active" : "");
    setRotateDescription(rotateDescription === "180deg" ? "0deg" : "180deg");
    setDisplayDescription(displayDescription === "block" ? "none" : "block");
  }

  function toggleEquipements() {
    setIsActiveEquipements(isActiveEquipements === "" ? "active" : "");
    setRotateEquipements(rotateEquipements === "180deg" ? "0deg" : "180deg");
    setDisplayEquipements(displayEquipements === "block" ? "none" : "block");
  }

  return (
    <div>
      {/* Section Description */}
      <div className="collapse-block" onClick={toggleDescription}>
        <h1>Description</h1>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ transform: `rotate(${rotateDescription})` }}
            alt="chevron"
          />
        </button>
      </div>
      <div className={`texte ${isActiveDescription}`} key={`${id}-description`} style={{ display: `${displayDescription}` }}>
        <p>{logement.description}</p>
      </div>

      {/* Section Equipements */}
      <div className="collapse-block" onClick={toggleEquipements}>
        <h1>Equipements</h1>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ transform: `rotate(${rotateEquipements})` }}
            alt="chevron"
          />
        </button>
      </div>
      <div className={`texte ${isActiveEquipements}`} key={`${id}-equipements`} style={{ display: `${displayEquipements}` }}>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
