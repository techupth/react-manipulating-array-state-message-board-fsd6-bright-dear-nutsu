import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = () => {
    setMessageList([...messageList, messageInput]);
    setMessageInput("");
  };
  const handleRemoveMessage = (index) => {
    const removeMessage = [...messageList];
    removeMessage.splice(index, 1);
    setMessageList(removeMessage);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleAddMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((message, index) => (
          <div key={index} className="message">
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleRemoveMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
