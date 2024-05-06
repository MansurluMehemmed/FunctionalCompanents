import { useEffect, useState } from 'react'

import './App.css'
import { Random } from './Companents/Random/Random'

function App() {
  const [state,setState] = useState('none');
  useEffect(()=>{
    window.addEventListener('keydown',(e)=>{
      console.log(e.code)
      if(e.code === 'Escape'){

        setState('none')
      }
    })
  },[])
  return (
    <>
        {/* <Random/> */}
    
          {/* <button onClick={()=>{setState('block')}}>Open</button>
          <div style={{display:state,backgroundColor:'pink', width:'100px',height:'100px'}}>
              jhisdsdfs
              <button onClick={()=>setState('none')}>Close</button>
          </div> */}
          <button onClick={()=>{setState('block')}}>Open</button>
          <div style={{display:state,backgroundColor:'pink', width:'100px',height:'100px'}}>
              Düzünə Amil
              Çəpinə Nurlan
          </div>
    </>
  )
}

export default App
