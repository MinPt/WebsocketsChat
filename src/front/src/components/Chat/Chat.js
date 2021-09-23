import queryString from "query-string";
import io from "socket.io-client";
import {useState, useEffect} from "react";
import "./Chat.css";
import {withRouter} from "react-router";
import Input from "../Input/Input";
import Info from "../Info/Info";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({location, history}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const ENDPOINT = "localhost:8080";

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name);

        socket.emit("join", {name, room}, (error) => {
            if (error) history.push("/");
        });

        return () => {
            console.log("Disconnected");
            socket.disconnect();
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    return (
        <div className="insideContainer">
            <Info room={room}/>
            <Messages messages={messages} name={name}/>

            <Input
                sendMessage={sendMessage}

                onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                type="text"
            />
        </div>

    );
};

export default withRouter(Chat);
