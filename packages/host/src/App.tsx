import Header from 'remoteHeader/Header';
import './App.css'
import Users from './Users/Users';


function App() {
  return (
    <>
      <Header />      
      <main style={{margin:'5px auto'}}>
        <div className="card" style={{placeItems:'center'}}>
          <h1>Module Federation with Vite + React</h1>
          <p>
            In this App,<br/>
            Header Component is a rendered from remote <a href='http://localhost:4201' target='_blank'>http://localhost:4201</a>.<br/>
            List Component is a rendered from remote <a href='http://localhost:4202' target='_blank'>http://localhost:4202</a>.
          </p>
          <div className='user-list'>
            <Users />
          </div>
        </div> 
      </main>
    </>
  )
}

export default App
