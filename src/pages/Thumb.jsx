import PropTypes from 'prop-types';


export default function Thumb ({logements}){
    return(
logements.map((logement)=>(
    <div className='thumb' key={logement.id}>
    <img src={logement.cover} alt={logement.cover}/>
    <h3>{logement.title}</h3>
    </div>
))

)}
    






Thumb.PropTypes ={
    logements:PropTypes.array.isRequired
}