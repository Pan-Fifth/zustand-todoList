import React from 'react'
import labStore from '../PanStorage/PanStorage'
import { useState } from 'react'

export default function TodoList() {
const [txt,setTxt] = useState('')
const {addArr} = labStore((state)=>({
    addArr:state.addArr,

}))

const hdlChange =(e)=>{
    setTxt(e.target.value)
    console.log(e.target.value)
}
const hdlClick =()=>{
    addArr(txt)
 console.log('click')
}

  return (
    <div className='text-center'>
        <h1 className='text-3xl text-bold'>TodoList</h1>
        <div className='flex p-2 gap-3'>
            <input onChange={hdlChange} type="text" className='border rounded border-black w-3/4'/>
            <button onClick={hdlClick} className='w-1/4 border text-2xl text-bold border-black rounded'>ADD</button>
        </div>
    </div>
  )
}
