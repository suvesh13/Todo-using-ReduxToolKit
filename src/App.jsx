import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  
  return (
    <>
      <h1>Learn Redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
