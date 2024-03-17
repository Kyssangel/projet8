
import Rating from "./Rating"; 
import { useParams } from "react-router-dom";
import logementsData from "../../public/logements.json";
import Caroussel from "./Caroussel";
import Collapse from "./Collapse";
import Host from "./Host";
import Tags from "./Tags";

export default function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
      <Caroussel logementId={id} />
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <Tags tags={logement.tags}/>
        <Host host={logement.host}/>
        <Rating rating={logement.rating} />
        <Collapse title="Rating" id={id} />
      
       
      </div>
    </div>
  );
}
