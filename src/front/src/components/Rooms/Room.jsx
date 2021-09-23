import {Link} from "react-router-dom";
import "./Room.css";

const Room = ({room, name}) => {
    return (
        <Link
            className="w-100 m-5"
            style={{textDecoration: "none", color: "black"}}
            to={`/chat?name=${name}&room=${room}`}
        >
            <div className="room p-2">
                <h4 className="mx-3">Room: {room}</h4>
            </div>
        </Link>
    );
};

export default Room;
