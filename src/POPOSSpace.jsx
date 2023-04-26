import { useState } from "react";
import { IconThumbUp } from "@tabler/icons-react";
import "./POPOSSpace.css";

export default function POPOSSpace(props) {
  const [like, setLike] = useState(0);
  const { name, address, img } = props;
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={img} alt="placeholder" />
      <div className="like">
        <IconThumbUp
          onClick={() => {
            setLike(like + 1);
          }}
        />
        <span>{like}</span>
      </div>
      <div>{address}</div>
    </div>
  );
}
