import {useParams} from 'react-router-dom';
import logements from '../../public/logements.json';

const findLogementID = (id) => {
    return logements.find((logement)=>logement.id === id);
}

export default function Logement() {
    const {id} = useParams();
    const logement = findLogementID(id);
    const pictures = logement.pictures;
    return (
         <div className="pictures">
        {pictures.map((picture,index)=>{
            return(
                <img src={picture} alt={picture.title} key={(picture,index)}/>
            );
        })
        }
        <div className='logement'>
        <p>voici le logement:{id}</p>
        <p>logement titre: {logement.title}</p>
        <p>logement descrition: {logement.description}</p>
        <p>équipement: {logement.equipments}</p>
        <p>étoile: {logement.rating}</p>
        <p>lieux: {logement.location}</p>
        <p>tags: {logement.tags}</p>
       
        </div>
        </div>
    )
}