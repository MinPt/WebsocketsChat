import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import roomsApi from "../../services/rooms";
import Room from "./Room";
import queryString from "query-string";
import {Container} from "react-bootstrap";

const Rooms = ({location}) => {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        const {name} = queryString.parse(location.search);
        setName(name);
        getRooms();
    }, []);

    const getRooms = async () => {
        const rooms = await roomsApi.getRooms();
        setRooms(rooms);
    };

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div>
                <h3>Create room</h3>
                <input style={{color: "black"}} className="m-0 border-0 p-1" value={room}
                       onChange={(e) => setRoom(e.target.value)}/>
                <Link to={`/chat?name=${name}&room=${room}`}>
                    <button className="myButton p-1">Create</button>
                </Link>
            </div>
            <div className="d-flex flex-column align-items-center w-100">
                {rooms.map((item, index) => (
                    <Room name={name} room={item} key={index}/>
                ))}
            </div>
        </Container>
    );
};

export default Rooms;
