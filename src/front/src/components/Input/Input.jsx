import "./Input.css";

const Input = (props) => {
    return (
        <div className="form">
            <input className="input" placeholder="Enter your text" {...props} />
            <button className="sendButton" onClick={(e) => props.sendMessage(e)}>
                Send
            </button>
        </div>
    );
};

export default Input;
