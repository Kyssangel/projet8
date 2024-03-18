

import Rating from "./Rating";
import { useParams } from "react-router-dom";
import logements from "../../public/logements.json";
import Caroussel from "./Caroussel";
import Collapse from "./Collapse";
import Host from "./Host";

export default function Logement() {
  const { id } = useParams();

  // Find the logement with the provided ID
  const logement = logements.find((item) => item.id === id);

  // Check if the logement with the provided ID exists
  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Caroussel logementId={id} />
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        
        <Host host={logement.host} />
        <Rating rating={logement.rating} />
        <Collapse title="Rating" id={id} />
      
      </div>
    </div>
  );
}
