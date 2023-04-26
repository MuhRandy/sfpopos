import { useState } from "react";
import { IconThumbUp } from "@tabler/icons-react";
import "./POPOSSpace.css";
import { Link } from "react-router-dom";

export default function POPOSSpace(props) {
  const [like, setLike] = useState(0);
  const { name, address, img, hours, id } = props;
  return (
    <div className="POPOSSpace">
      <Link className="Link" to={`/details/${id}`}>
        <img src={img} alt="placeholder" />
      </Link>
      <div className="like">
        <IconThumbUp
          onClick={() => {
            setLike(like + 1);
          }}
        />
        <span>{like}</span>
      </div>
      <h1>
        <Link className="Link" to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  );
}
