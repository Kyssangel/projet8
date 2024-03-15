import { useState } from "react";
import logementsData from "../../public/logements.json";

export default function LogementCollapse  ({id} ) {
  // Recherche du logement correspondant à l'ID
  const logement = logementsData.find((item) => item.id === Number(id));

  // Utilisation de useState pour gérer l'état de l'ouverture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="logement-collapse">
      <button onClick={toggleCollapse} className="toggle-btn">
        {isOpen ? "Fermer" : "Ouvrir"}
      </button>
      {/* Utilisation de classNames dynamiques pour ouvrir/fermer le contenu */}
      <div className={`content ${isOpen ? "open" : "close"}`}>
        <h2>{logement.title}</h2>
        <p>{logement.description}</p>
        <h3>Équipements</h3>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}



