import{ useState } from "react";
import Vector from "../assets/images/ChevronUp.png";
import aboutData from "../../public/aboutData";

const AboutTable = () => {
  const [collapsedSections, setCollapsedSections] = useState({
    slogan: true,
    fiability: true,
    respect: true,
    service: true,
    security: true
  });

  const toggleCollapse = section => {
    setCollapsedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="about-table">
     
      <div className="category">
        <h2 onClick={() => toggleCollapse("fiability")}>Fiabilité</h2>
        {!collapsedSections["fiability"] && <p>{aboutData.fiability}</p>}
        <button className="button" onClick={() => toggleCollapse("fiability")}>
          <img src={Vector} alt="chevron" style={{ transform: collapsedSections["fiability"] ? "rotate(0deg)" : "rotate(180deg)" }} />
        </button>
      </div>
      <div className="category">
        <h2 onClick={() => toggleCollapse("respect")}>Respect</h2>
        {!collapsedSections["respect"] && <p>{aboutData.respect}</p>}
        <button className="button" onClick={() => toggleCollapse("respect")}>
          <img src={Vector} alt="chevron" style={{ transform: collapsedSections["respect"] ? "rotate(0deg)" : "rotate(180deg)" }} />
        </button>
      </div>
      <div className="category">
        <h2 onClick={() => toggleCollapse("service")}>Service</h2>
        {!collapsedSections["service"] && <p>{aboutData.service}</p>}
        <button className="button" onClick={() => toggleCollapse("service")}>
          <img src={Vector} alt="chevron" style={{ transform: collapsedSections["service"] ? "rotate(0deg)" : "rotate(180deg)" }} />
        </button>
      </div>
      <div className="category">
        <h2 onClick={() => toggleCollapse("security")}>Securité</h2>
        {!collapsedSections["security"] && <p>{aboutData.security}</p>}
        <button className="button" onClick={() => toggleCollapse("security")}>
          <img src={Vector} alt="chevron" style={{ transform: collapsedSections["security"] ? "rotate(0deg)" : "rotate(180deg)" }} />
        </button>
      </div>
    </div>
  );
};
export default AboutTable;

