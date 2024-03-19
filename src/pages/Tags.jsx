

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <p className="tag__text">{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tags;
