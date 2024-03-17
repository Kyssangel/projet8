
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logements from "../../public/logements.json";
import chevronGauche from "../assets/images/ChevronGauche.png";
import chevronDroit from "../assets/images/ChevronDroit.png";

export default function Carousel({ logementId }) {
    const [index, setIndex] = useState(0);
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        setLogement(findLogementByID(logementId));
        setIndex(0); // Réinitialiser l'index lorsque logementId change
    }, [logementId]);

    useEffect(() => {
        if (logement) {
            const totalPictures = logement.pictures.length - 1;
            if (index < 0) setIndex(totalPictures);
            if (index > totalPictures) setIndex(0);
        }
    }, [index, logement]);

    if (!logement) {
        return null; // Gérer le cas où le logement n'est pas encore chargé
    }

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
    };

    return (
        <div className='carousel'>
            <div className='div-image'>
                <img
                    src={logement.pictures[index]}
                    className="classImage"
                    key={"car-" + index}
                    alt={"photo " + index}
                    onClick={nextSlide} // Cliquer sur l'image pour passer à la diapositive suivante
                />
            </div>
            {logement.pictures.length > 1 && (
                <div>
                    <button onClick={prevSlide}>
                        <img src={chevronGauche} className='classChevronGauche' alt="flèche gauche pour changer de photo" />
                    </button>
                    <button onClick={nextSlide}>
                        <img src={chevronDroit} className='classChevronDroit' alt="flèche droite pour changer de photo" />
                    </button>
                </div>
            )}
            {logement.pictures.length > 1 && (
                <div className='div-compteur'>
                    <p className='compteurImages'>
                        {index + 1}/{logement.pictures.length}
                    </p>
                </div>
            )}
        </div>
    );
}

Carousel.propTypes = {
    logementId: PropTypes.string.isRequired
};

const findLogementByID = (id) => {
    return logements.find((logement) => logement.id === id);
};
