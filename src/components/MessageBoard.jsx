import { useState } from 'react';

// 1. มี 2 states : inputMessage กับ boardMessage
// 2. มี 3 events :
//    onChange ที่ input มี callback คือ handleChange
//    onSubmit ที่ form มี callback คือ handleSubmit
//    onClick ที่ button มี 2 callback คือ handleDelete
// 3. ประกาศ 3 functions :  handleChange, handleSubmit กับ handleDelete

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState('');
  const [boardMessage, setBoardMessage] = useState([]);

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newBoardMessage = [...boardMessage];
      newBoardMessage.push(inputMessage);
      setBoardMessage(newBoardMessage);
      setInputMessage('');
    } else {
      alert('Please enter the message !');
    }
  };

  const handleDelete = (todoIndex) => {
    const newBoardMessage = [...boardMessage];
    newBoardMessage.splice(todoIndex, 1);
    setBoardMessage(newBoardMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleSubmit}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleChange}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {boardMessage.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
