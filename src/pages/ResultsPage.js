import React from 'react';
import { useVote } from '../context/VoteContext';

const ResultsPage = () => {
  const { candidates, leadingCandidate } = useVote();

  return (
    <div>
      <h1>Voting Results</h1>
      <div className="results-container">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="result-item">
            <span className="result-text">
              {candidate.name}:
            </span>
            <span className="vote-count">{candidate.votes} votes</span>
          </div>
        ))}
      </div>
      <div className="leading-candidate">
        <h2>Leading Candidate: {leadingCandidate}</h2>
      </div>
    </div>
  );
};

export default ResultsPage;