import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VoteProvider } from './context/VoteContext';
import Header from './components/Header';
import VotingPage from './pages/VotingPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    // The Provider wraps the whole app, so every component can access the context
    <VoteProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<VotingPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </VoteProvider>
  );
}

export default App;