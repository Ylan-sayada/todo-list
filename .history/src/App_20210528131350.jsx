import React from 'react'
import TodoContent from './components/TodoContent'
import TodoInput from './components/TodoInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo list</h1>
       <TodoInput/>
       <TodoContent/>
      </header>
    </div>
  );
}

export default App;
