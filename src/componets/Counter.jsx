import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'


function Counter() {

  const [amount,setAmount]=useState("")
  const {count}= useSelector(state=>state.counterReduce)
  const dispatch=useDispatch()

  const handleincrementByAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(parseInt(amount)))
    }
    else{
      alert("please enter the value")
    }
 }
  return (
    <>
    <div className='text-white p-5 bg-dark d-flex align-item-center justify-content-center w-100 flex-column'>
    <h1>Counter App</h1>
    <div className='w-100 mt-5 border rounded border-white p-5'>
    <h1>{count}</h1>
    <div className='mt-5 d-flex align-item-center justify-content-around  '>
        <button onClick={()=>dispatch(increment())} className='btn btn-warning'>Increment</button>
        <button  onClick={()=>dispatch(reset())} className= 'btn btn-danger'>Reset</button>
        <button  onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
    </div>
    <div className='mt-5 d-flex justify-content-center'>
        <input onChange={(e)=>setAmount(e.target.value)} type='text' className='form-control w-100' placeholder='enter the value'/>
        <button onClick={handleincrementByAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Counter