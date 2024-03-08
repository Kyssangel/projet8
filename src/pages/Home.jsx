import falaise from'../assets/images/falaise.svg';
import logements from'../../public/logements.json';
import Thumb from'../pages/Thumb';




export default function Home() {
    return (
        <div className="home">
            <div className="banner">
            <img src={falaise} alt="Image d'une falaise" />
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="galerie">
                <Thumb logements={logements} />
            </div>
        </div>
    )
}