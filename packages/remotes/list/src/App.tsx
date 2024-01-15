import './App.css'

type DataType = {[key:string]:any};

function App({data, message}:{data:Array<DataType>,message?:string}) {  

  return (
    <>
      <div className="card">
        <div><h1>{message}</h1></div>
        <ul className="list">
        <li className="list-item">
          <span>SrNo</span><div className="separator">&nbsp;</div>
          <span>First Name</span><div className="separator">&nbsp;</div>
          <span>Middle Name</span><div className="separator">&nbsp;</div>
          <span>Last Name</span><div className="separator">&nbsp;</div>
          <span>Age</span><div className="separator">&nbsp;</div>
          <span>Gender</span></li>
          {
            data?.map((item, i)=>{
              return (
                <li key={i} className='list-item'>{
                  Object.entries(item).map((el:any, i:number)=>{
                    return (
                      (i==0?
                      <span key={i}>{el[1]}</span>
                      : <><div className="separator">&nbsp;</div><span key={i}>{el[1]}</span></>
                      )
                    )
                  })
                }</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
