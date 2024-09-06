import { useState } from 'react'
import labStore from './PanStorage/PanStorage'
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import Bullet from './Components/Bullet'


function App() {
  
  const {test1}= labStore((state)=>({

    test1: state.test1,
  }))

  console.log(test1)
  return (
    <div>
      <Header/>
      <TodoList/>
      <Bullet/>
    </div>

  )
}

export default App


