import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Thumb ({logements}){
    return(
logements.map((logement)=>(
    <Link to={`/logement/${logement.id}`} className='thumb' key={logement.id}>
    <img src={logement.cover} alt={logement.cover}/>
    <h3>{logement.title}</h3>
    </Link>
))

)}
    






Thumb.PropTypes ={
    logements:PropTypes.array.isRequired
}