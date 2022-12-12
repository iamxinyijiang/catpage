import React, {useState} from 'react'
//import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock'

function WelcomeMessage({myprop}){
  return <p>{myprop}</p>
}

const message='Hi Cat!'

const Counter= () =>{
  const [count, setCount] = useState(0)
  return(
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count+1)}> Click me!</button>
  </div>)
  }

  const Sensor= () =>{
    let[stopBy, sense] = useState(0)
    return(
      <div>
        <p>{stopBy? "Cursor entered!": "Cursor left!"}</p>
        <button 
        onMouseEnter={()=> sense(stopBy = true)} 
        onMouseLeave={()=> sense(stopBy = false)}>Mover your mouse cursor here.
        </button>
      </div>
    )
  }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage myprop={"Hi"}/>
        <Counter />
        <Sensor />
        <Clock />
        {message === 'Hello!'? 'The message was "Hello!"': `The message was not "Hello!". It was "${message}".`}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
