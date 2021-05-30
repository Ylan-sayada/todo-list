import React from 'react'
import TodoContainer from './components/TodoContainer'
import TodoContent from './components/TodoContent'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo list</h1>
       <TodoContainer/>
      </header>
    </div>
  );
}

export default App;
