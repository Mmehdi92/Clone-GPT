import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import homeIcon from "./assets/home.svg";
import saveIcon from "./assets/bookmark.svg";
import upgradeIcon from "./assets/rocket.svg";

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
         
            <div className="listItems"><img src={homeIcon} alt="Home" className="listItemImg" /> Home</div>
            <div className="listItems"> <img src={saveIcon} alt="Saved" className="listItemImg" /> Saved</div>
            <div className="listItems"><img src={upgradeIcon} alt="Upgrade" className="listItemImg" /> Upgrade</div>
     
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
