import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/action/counterAction';
import { disableSwitch, enableSwitch } from './redux/action/switchAction';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter);
  const switchx = useSelector((state)=>state.switch);

  return (  
    <div className='container'>
        <h3>Count: <span>{counter}</span></h3>
        <div className='btn-collection'>
        <button
         onClick={()=>(dispatch(increment()))}
         className='btn'>Increment</button>
        <button 
         onClick={()=>(dispatch(decrement()))}
        className='btn'>Decrement</button>
        </div>

        <h3>Counter: {switchx.enable ? "ON": "OFF"}</h3>
        <div className='btn-collection'>
        <button
         onClick={()=>(dispatch(enableSwitch()))}
         className='btn'>Enable</button>
        <button 
         onClick={()=>(dispatch(disableSwitch()))}
        className='btn'>Disable</button>
        </div>
    </div>
  )
}

export default App