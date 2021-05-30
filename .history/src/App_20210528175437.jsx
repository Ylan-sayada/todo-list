import React from 'react';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo list</h1>
       <TodoContainer style={{margin:"0 auto"}}/>
      </header>
    </div>
  );
}

export default App;
