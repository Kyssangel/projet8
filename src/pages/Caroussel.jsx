
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
        setIndex(0); 
    }, [logementId]);

    useEffect(() => {
        if (logement) {
            const totalPictures = logement.pictures.length - 1;
            if (index < 0) setIndex(totalPictures);
            if (index > totalPictures) setIndex(0);
        }
    }, [index, logement, logementId]); 

    if (!logement) {
        return null; 
    }

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <img
                src={logement.pictures[index]}
                className="classImage"
                key={"car-" + index}
                alt={"photo " + index}
                
            />
            {logement.pictures.length > 1 && (
                <>
                    <img src={chevronGauche} className='classChevronGauche' alt="flèche gauche pour changer de photo" onClick={prevSlide} />
                    <img src={chevronDroit} className='classChevronDroit' alt="flèche droite pour changer de photo" onClick={nextSlide} />
                </>
            )}
            {logement.pictures.length > 1 && (
                <p className='compteurImages'>
                    {index + 1}/{logement.pictures.length}
                </p>
            )}
        </>
    );
}

Carousel.propTypes = {
    logementId: PropTypes.string.isRequired
};

const findLogementByID = (id) => {
    return logements.find((logement) => logement.id === id);
};
