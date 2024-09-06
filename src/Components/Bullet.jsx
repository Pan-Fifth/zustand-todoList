import React from 'react'
import labStore from '../PanStorage/PanStorage'


export default function Bullet() {

    const {arr,delArr} = labStore((state)=>({
        arr:state.arr,
        delArr:state.delArr,

    }))
    console.log('bullet' ,arr)

const hdlDel=(id)=>{
    delArr(id)
    console.log(id)
}

  return (
    <div className='flex-col text-2xl'>
        {arr.map((obj,index)=>(

                <li className='flex h-[70px] gap-3 items-center m-2 ' key={index}><span className='border border-black rounded w-3/4 p-3 bg-green-400'>{index+1}. {obj.title}</span><button className='border border-black rounded w-1/4 p-3 bg-red-300' onClick={()=>hdlDel(obj.id)}>&#128465;</button></li>

        ))}

    </div>
  )
}
