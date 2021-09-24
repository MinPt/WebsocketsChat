import {Link} from "react-router-dom";
import "./Room.css";

const Room = ({room, name}) => {
    console.log(room)
    return (
        <Link
            className="w-100 m-5"
            style={{textDecoration: "none", color: "black"}}
            to={`/chat?name=${name}&room=${room.room}`}
        >
            <div className="room p-2">
                <h4 className="mx-3">Room: {room.room}</h4>
                <div className="d-flex align-items-center">
                    <h4 className="mx-3">Users: </h4>
                    {room.users.map(user => <span className='mx-1'> {user.name},</span>)}

                </div>
            </div>
        </Link>
    );
};

export default Room;
