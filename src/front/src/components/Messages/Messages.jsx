import Message from "../Message/Message";

import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((item, index) => (
        <Message
          text={item.text}
          user={item.user}
          key={index}
          mine={item.user === name}
        />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
