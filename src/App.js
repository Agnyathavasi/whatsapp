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
      <Contacts onSelect={handle}/>
      <MainPage toDisplay={displaying}/>
    </div>
  );
}

export default App;
