import React from 'react';
import TodoContainer from './components/TodoContainer';
import "./App.scss";

function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <TodoContainer />
      </header>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      </style>
    </div>
  );
}

export default App;
