import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "../sfpopos-data.json";

export default function POPOSList() {
  return <div className="POPOSList">{spaces}</div>;
}

const spaces = data.map(({ title, address, hours }, i) => {
  const image = "https://placehold.co/300";
  return (
    <POPOSSpace
      id={i}
      key={title}
      name={title}
      address={address}
      img={image}
      hours={hours}
    />
  );
});
