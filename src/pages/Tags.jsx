function TagList({ logements }) {
    // Assurez-vous que logements est un tableau et qu'il contient des éléments
    if (!Array.isArray(logements) || logements.length === 0) {
      return null; // Retourne null si logements est invalide ou vide
    }
  
    // Créez un tableau de tous les tags de tous les logements
    const Tags = logements.flatMap((logement) => logement.tags);
  
    return (
      <div>
        <h2>Liste de tags :</h2>
        <ul>
          {Tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TagList;
  