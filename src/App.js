import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import homeIcon from "./assets/home.svg";
import saveIcon from "./assets/bookmark.svg";
import upgradeIcon from "./assets/rocket.svg";
import sendIcon from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAi } from "./openai";
import { useState, useRef, useEffect } from "react";

function App() {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello there! I am Buci GPT, your personal AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAi(text);
    setMessages(
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true }
    );

    console.log(res);
  };

  const handleEnterKey = async (e) => {
    if (e.key === "Enter") await handleSend();
  };

  const handleQeury = async (e) => {
    const text = e.target.value;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAi(text);
    setMessages(
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true }
    );

    console.log(res);

  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Buci GPt</span>
          </div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}>
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query" value={"What is programming ?"} onClick={handleQeury}>
              <img src={msgIcon} alt="Qeury" />
              What is programming ?
            </button>
            <button className="query" value={"Pizza or Macaroni ?"} onClick={handleQeury} >
              <img src={msgIcon} alt="Qeury" />
              Pizza or Macaroni ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={homeIcon} alt="Home" className="listItemImg" /> Home
          </div>
          <div className="listItems">
            {" "}
            <img src={saveIcon} alt="Saved" className="listItemImg" /> Saved
          </div>
          <div className="listItems">
            <img src={upgradeIcon} alt="Upgrade" className="listItemImg" />{" "}
            Upgrade
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {/* <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="text">
              Hello there! I am Buci GPT, your personal AI assistant. How can I
              help you today?",
            </p>
          </div> */}

          {messages.map((message, i) => {
            return (
              <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                <img
                  className="chatImg"
                  src={message.isBot ? gptImgLogo : userIcon}
                  alt=""
                />
                <p className="text">{message.text}</p>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              onKeyDown={handleEnterKey}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Send A Message ..."
            />
            <button className="send"  onClick={handleSend}>
              <img src={sendIcon} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
