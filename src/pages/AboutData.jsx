
import { useState } from "react";
import ChevronUp from "../assets/images/ChevronUp.png"; 

function AccordionItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" onClick={() => setIsActive(!isActive)}>
        {title}
        <img src={ChevronUp} alt="Arrow" className={`arrow ${isActive ? "up" : "down"}`} />
      </h2>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="accordion">
      <AccordionItem
        title="fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <AccordionItem
        title="respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AccordionItem
        title="service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <AccordionItem
        title="sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
}



