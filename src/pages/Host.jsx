const Host = ({ host }) => {
  return (
    <figure className="host">
      <figcaption className="host__name">
        <p className="fullname">{host.name}</p>
      </figcaption>

      <img src={host.picture} alt="photo du gérant" className="host__picture" />
    </figure>
  );
};

export default Host;
