import React from 'react';
import './App.css';
import GptApi from './GptApi'; // Assuming QuestionForm.js is in the same directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Ask any question that your heart desires!
        </p>
        <GptApi />
      </header>
    </div>
  );
}

export default App;
