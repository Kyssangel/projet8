
import { NavLink } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <main className="main">
      <div className="error">
        <h2 className="errorNumber">404</h2>
        <h3 className="errorText">
          Oups! La page que vous demandez n existe pas.
        </h3>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="errorBackLink">Retourner sur la page d accueil</li>
        </NavLink>
      </div>
    </main>
  );
};

export default ErrorComponent;

