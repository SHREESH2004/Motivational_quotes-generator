import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () => {
    axios
      .get('/api/quotes')
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchQuotes(); // Fetch quotes initially
  }, []);

  return (
    <div className="app-container">
      <h1>Shreesh's Personal Web</h1>
      <p>Welcome to my website!</p>
      <p>Total Quotes: {quotes.length}</p>
      <button className="change-button" onClick={fetchQuotes}>
        Change Quotes
      </button>
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <h3>{quote}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
