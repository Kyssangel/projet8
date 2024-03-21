

import Rating from "./Rating";
import { useParams } from "react-router-dom";
import logements from "../../public/logements.json";
import Caroussel from "./Caroussel";
import Collapse from "./Collapse";
import Host from "./Host";
import Tags from"./Tags";


export default function Logement() {
  const { id } = useParams();

  
  const logement = logements.find((item) => item.id === id);

  
  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Caroussel logementId={id} />
      <div className="allDescription">
        <h2 className="title">{logement.title}</h2>
        <p>{logement.location}</p>
        <Tags tags={logement.tags} />
        <Host host={logement.host} />
        <Rating rating={logement.rating} />
        <Collapse title="Rating" id={id} />
      
      </div>
    </div>
  );
}
