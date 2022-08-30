import logo from './logo.svg';
import './App.css';
import N from './Navbar';
import { R } from './Random';
import { useState } from 'react';
function App() {
  const [value,setValue]=useState("");
  const [search,setSearch]=useState("")
  return (
    <div className="App" style={{background:"./photo.jpg"}}>
    <N value={value}/>
    <R/>
    </div>
  );
}

export default App;
