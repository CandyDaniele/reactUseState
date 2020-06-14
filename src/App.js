import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [contador, setContador] = useState(1)
  let [texto, setTexto] = useState("")
  let [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Contador {contador}
        </p>
        <button onClick={e => setContador(contador+1) }>Incrementar</button>

        <label>Texto:</label>
        <input onChange={ e => setInput(e.target.value)} value={input} />
        <button onClick={ e => setTexto(input) }>Capturar Texto</button>
        <label>O Texto digitado foi: {texto} </label>
      </header>
    </div>
  );
}

export default App;
