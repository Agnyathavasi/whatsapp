import './css/App.css';
import Contacts from './components/contacts';
import MainPage from './components/mainsection';
import { useState } from 'react';

function App() {

  const [displaying,setDisplaying] = useState(0)

  function handle(id){
    setDisplaying(id);
  }

  return (
    <div className="App">
      <div className="left">
        <Contacts onSelect={handle}/>
      </div>
      <div className="right">
        <MainPage toDisplay={displaying}/>
      </div>
    </div>
  );
}

export default App;
