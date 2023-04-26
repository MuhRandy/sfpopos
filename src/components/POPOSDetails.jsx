import data from "../sfpopos-data.json";
import { useParams } from "react-router";
import "./POPOSDetails.css";

export default function POPOSDetails(props) {
  const img = "https://placehold.co/300";
  const params = useParams();
  const { id } = params;
  const { title, desc, hours, features, geo } = data[id];
  return (
    <div className="POPOSDetails">
      <div>
        <img src={img} alt="placeholder" />
      </div>

      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>
          {geo.lat}
          {geo.lon}
        </p>
      </div>
    </div>
  );
}
