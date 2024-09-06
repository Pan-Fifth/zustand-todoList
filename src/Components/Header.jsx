import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between h-[80px] bg-green-400 items-center'>
        <h1 className='text-5xl'>NAVBAR</h1>
        <div className='flex text-5xl text-bold gap-5'>
            <button>Home</button>
            <button>About</button>
            <button>Login</button>
        </div>
        
    </div>
  )
}
