export default function POPOSSpace(props) {
  const { name, address, img } = props;
  return (
    <div className="POPOSSpace">
      <img src={img} alt="placeholder" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  );
}
