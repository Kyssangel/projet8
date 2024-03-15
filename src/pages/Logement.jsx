
/*import { useParams } from "react-router-dom";
import logements from "../../public/logements.json";
import Carousel from "./Caroussel"; // Importez le composant Carousel depuis son emplacement

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Carousel logementId={id} /> 
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
    </div>
  );
}*/
import { useState } from "react";
import { useParams } from "react-router-dom";
import logementsData from "../../public/logements.json";
import Carousel from "./Caroussel";
import Collapse from "./Collapse"; // Import du composant Collapse

export default function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Carousel logementId={id} /> {/* Affichage du Carousel */}
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <Collapse title="Description" id={id} /> {/* Ajout du Collapse pour la description */}
        <Collapse title="Équipements" id={id} /> {/* Ajout du Collapse pour les équipements */}
      </div>
    </div>
  );
}
