
import  { useRef } from "react";
import { useParams } from "react-router-dom";
import logements from "../../public/logements.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowNext from "../assets/images/Vector1.svg";
import arrowPrev from "../assets/images/Vector.svg";


// Composant de flèche personnalisé pour le bouton "prev"
const CustomPrevArrow = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowPrev} alt="Flèche précédente" />
    </div>
  );
};

// Composant de flèche personnalisé pour le bouton "next"
const CustomNextArrow = ({ onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowNext} alt="Flèche suivante" />
    </div>
  );
};

const findLogementID = (id) => {
  return logements.find((logement) => logement.id === id);
};

export default function Logement() {
  const { id } = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;
  const sliderRef = useRef(null);

  // Paramètres du slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow className="slick-next" />,
    prevArrow: <CustomPrevArrow className="slick-prev" />,
  };

  // Fonction pour passer à la diapositive suivante
    function nextSlide() {
    sliderRef.current.slickNext();
  };

  // Fonction pour passer à la diapositive précédente
 function prevSlide ()  {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="logement">
      <div className="pictures">
        <Slider ref={sliderRef} {...settings}>
          {pictures.map((picture, index) => {
            return (
              <div key={index}>
                <img src={picture} alt={logement.title} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="allDescription">
        <h2>{logement.title}</h2>
        <p>{logement.location}</p>
        <p>étoile: {logement.rating}</p>
        <p>logement description: {logement.description}</p>
        <p>équipement: {logement.equipments}</p>
      </div>
    </div>
  );
}