
import './App.css';
import Header from './Header';
import { useState } from "react";

function App() {
  const [del, setDel] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const unmount = () => {
    setDel(true);
    setRefresh(true);
  }

  const mount = () => {
    setDel(false);
    setRefresh(false);
  }
  return (
    <div className="wrapper">
      { !del ? <button onClick={unmount}>Component Unmounting </button> : null }
      { del || refresh ? null : <Header /> }
      { refresh ? <button onClick={mount}> Component Mounting </button> : null }
    </div>
  )
}

export default App;
