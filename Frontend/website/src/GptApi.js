import React, { useState } from 'react';

// Make sure REACT_APP_API_URL is set in your .env file
const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const GptApi = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  // Function to handle event button
  const handleSubmit = async (event) => {
    // stops button click
    event.preventDefault();
    // Call the function to submit the question
    await submitQuestion();
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const submitQuestion = async () => {
    setLoading(true);
    //api structure
    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant."
      },
      {
        role: "user",
        content: question //user question
      }
    ];
  
    try {
      const response = await fetch(`${apiBaseUrl}/ask-gpt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }), 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setAnswer(result.message); 
    } catch (error) {
      console.log('Fetch error:', error);
      setAnswer('Sorry, an error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask a question..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default GptApi;
