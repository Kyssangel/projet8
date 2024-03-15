/*import { useParams } from "react-router-dom";
import logements from "../../public/logements.json";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <div className="pictures">
        {logement.pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt={logement.title} />
          </div>
        ))}
      </div>
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
    </div>
  );
}*/
import { useParams } from "react-router-dom";
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
      <Carousel logementId={id} /> {/* Passer l'ID du logement au composant Carousel */}
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
    </div>
  );
}