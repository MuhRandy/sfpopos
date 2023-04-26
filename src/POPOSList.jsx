import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "./sfpopos-data.json";

export default function POPOSList() {
  return <div className="POPOSList">{spaces}</div>;
}

const spaces = data.map(({ title, address, hours }) => {
  const image = "https://placehold.co/300";
  return (
    <POPOSSpace
      key={title}
      name={title}
      address={address}
      img={image}
      hours={hours}
    />
  );
});
