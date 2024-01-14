import { useState } from 'react';
import Header from 'remoteHeader/Header';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Module Federation with Vite + React</h1>
      <div className="card" style={{placeItems:'center'}}>
        <button style={{width:'150px',height:'50px'}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          On this page, Header Component is a rendered from remote <a href='http://localhost:4201' target='_blank'>http://localhost:4201</a> .
        </p>
      </div> 
    </>
  )
}

export default App
