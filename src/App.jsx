import "./assets/css/App.css";
import Contacts from "./components/contacts";
import MainPage from "./components/mainsection";
import { useSelector } from "react-redux";

function App() {
  const activeChatId = useSelector((state) => state.chat.activeChatId);

  return (
    <div className="App">
      <div className="left">
        <Contacts />
      </div>
      <div className="right">
        <MainPage toDisplay={activeChatId ? activeChatId : 0} />
      </div>
    </div>
  );
}

export default App;
