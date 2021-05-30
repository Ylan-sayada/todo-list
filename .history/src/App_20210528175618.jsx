import React from 'react';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo list</h1>
       <TodoContainer style={{margin:"auto 0",textAlign:"center"}}/>
      </header>
    </div>
  );
}

export default App;
