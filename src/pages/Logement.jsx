
import Rating from "./Rating"; // Importez le composant Rating
import { useParams } from "react-router-dom";
import logementsData from "../../public/logements.json";
import Carousel from "./Caroussel";
import Collapse from "./Collapse";

export default function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Carousel logementId={id} />
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <Rating rating={logement.rating} />
        <Collapse title="Description" id={id} />
        <Collapse title="Équipements" id={id} />
       
      </div>
    </div>
  );
}
