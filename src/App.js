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

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">Buci GPt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Qeury" />
              What is programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Qeury" />
              How to ... ?
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
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nemo temporibus ratione deleniti eaque architecto illo sit itaque laboriosam quaerat. Labore eius quo rerum dolorum className="chatImg" 
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi eveniet numquam dignissimos necessitatibus. Illo placeat quidem dolorem vitae est vero quaerat temporibus! Cumque nam, esse totam dolore fuga libero itaque dolores laborum minima modi, voluptate nisi molestiae eligendi sequi autem delectus deleniti sit aspernatur temporibus consectetur nemo facere necessitatibus. Perferendis quas iste dolore vitae repellendus soluta reiciendis similique in eum natus illum deleniti nemo maiores temporibus pariatur sit eaque aperiam beatae veritatis, eveniet itaque expedita facere saepe. Reprehenderit quibusdam optio commodi, numquam magni beatae ex iste ipsam quidem voluptates itaque inventore natus ipsum aliquam hic excepturi alias velit animi mollitia!
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send A Message ..." />
            <button className="send">
              <img src={sendIcon} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
