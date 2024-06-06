import { useState } from "react";

function MessageBoard() {
  // ประกาศตัวแปร state
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  // ประกาศตัวแปรมาดักจับข้อความที่กรอกเข้ามาจากช่องInput
  const handleSubmit = (event) => {
    event.preventDefault();
    if (messageInput) {
      const newMessage = [...messageList];
      newMessage.push(messageInput);
      setMessageList(newMessage);
      setMessageInput("");
    } else {
      alert("Enter message!!");
    }
  };
  // ประกาศตัวแปรเมื่อuserกดกากบาทให้ทำการลบรายการmessageออกโดยรับargumentมาเป็น messageIndex
  const handleDelete = (messageIndex) => {
    const newMessage = [...messageList];
    newMessage.splice(messageIndex, 1);
    setMessageList(newMessage);
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
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {/* ใช้ .map เพื่อเข้ามาดึงข้อมูลจากarrayที่userกรอกเข้ามาออกมาเเสดงผล */}
        {messageList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                // เรียกใชัevent onClick สำหรับ ลบ list message
                onClick={() => {
                  handleDelete(index);
                }}
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
//...
