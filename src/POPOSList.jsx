import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";

export default function POPOSList() {
  const image = "https://placehold.co/300";
  return (
    <div className="POPOSList">
      <POPOSSpace name="Area 1" address="Jl. Sala Empat 72" img={image} />
      <POPOSSpace name="Area 2" address="Jl. Sala Empat 72" img={image} />
      <POPOSSpace name="Area 3" address="Jl. Sala Empat 72" img={image} />
      <POPOSSpace name="Area 4" address="Jl. Sala Empat 72" img={image} />
      <POPOSSpace name="Area 5" address="Jl. Sala Empat 72" img={image} />
      <POPOSSpace name="Area 6" address="Jl. Sala Empat 72" img={image} />
    </div>
  );
}
