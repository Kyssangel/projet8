

const Host = ({ host }) => {
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited;

  return (
    <figure className="host">
      <figcaption className="host__name">
        <p className="host__firstname">{name}</p>
        <p className="host__lastname">{lastname}</p>
      </figcaption>

      <img src={host.picture} alt="photo du gérant" className="host__picture" />
    </figure>
  );
};

export default Host;