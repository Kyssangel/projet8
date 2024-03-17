

// style
import redstar from "../assets/images/redStar.png";
import greystar from "../assets/images/greyStar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Loop to display star by rating */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt="etoile rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt="etoile grise"
          />
        )
      )}
    </div>
  );
};

export default Rating;