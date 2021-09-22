import { Link } from "react-router-dom";

const Info = ({ room }) => {
  return (
    <div className="d-flex justify-content-between p-3">
      <span style={{ color: "white" }}>{room}</span>
      <Link style={{ textDecoration: "none" }} to="/">
        &#10060;
      </Link>
    </div>
  );
};

export default Info;
