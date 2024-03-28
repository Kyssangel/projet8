
/*import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logements from "../../public/logements.json";
import chevronGauche from "../assets/images/ChevronGauche.png";
import chevronDroit from "../assets/images/ChevronDroit.png";

export default function Carousel({ logementId }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const foundLogement = logements.find(logement => logement.id === logementId);
        if (foundLogement) {
            const totalPictures = foundLogement.pictures.length - 1;
            setIndex(prevIndex => prevIndex < 0 ? totalPictures : prevIndex > totalPictures ? 0 : prevIndex);
        }
    }, [logementId]);

    const nextSlide = () => setIndex(prevIndex => (prevIndex + 1) % logements.find(logement => logement.id === logementId).pictures.length);
    const prevSlide = () => setIndex(prevIndex => (prevIndex - 1 + logements.find(logement => logement.id === logementId).pictures.length) % logements.find(logement => logement.id === logementId).pictures.length);

    const logement = logements.find(logement => logement.id === logementId);
    if (!logement) return null;

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
                    <p className='compteurImages'>{index + 1}/{logement.pictures.length}</p>
                </>
            )}
        </>
    );
}

Carousel.propTypes = {
    logementId: PropTypes.string.isRequired
};*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logements from "../../public/logements.json";
import chevronGauche from "../assets/images/ChevronGauche.png";
import chevronDroit from "../assets/images/ChevronDroit.png";

export default function Carousel({ logementId }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const foundLogement = logements.find(logement => logement.id === logementId);
        if (foundLogement) {
            const totalPictures = foundLogement.pictures.length - 1;
            setIndex(prevIndex => prevIndex < 0 ? totalPictures : prevIndex > totalPictures ? 0 : prevIndex);
        }
    }, [logementId]);

    const nextSlide = () => setIndex(prevIndex => (prevIndex + 1) % logements.find(logement => logement.id === logementId).pictures.length);
    const prevSlide = () => setIndex(prevIndex => (prevIndex - 1 + logements.find(logement => logement.id === logementId).pictures.length) % logements.find(logement => logement.id === logementId).pictures.length);

    const logement = logements.find(logement => logement.id === logementId);
    if (!logement) return null;

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
                src={logement.pictures[index]}
                className="classImage"
                key={"car-" + index}
                alt={"photo " + index}
            />
            {logement.pictures.length > 1 && (
                <>
                    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '0' }}>
                        <img src={chevronGauche} className='classChevronGauche' alt="flèche gauche pour changer de photo" onClick={prevSlide} />
                    </div>
                    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0' }}>
                        <img src={chevronDroit} className='classChevronDroit' alt="flèche droite pour changer de photo" onClick={nextSlide} />
                    </div>
                    <p className='compteurImages' style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>{index + 1}/{logement.pictures.length}</p>
                </>
            )}
        </div>
    );
}

Carousel.propTypes = {
    logementId: PropTypes.string.isRequired
};

