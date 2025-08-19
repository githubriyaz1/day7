import React from 'react';
import { useVote } from '../context/VoteContext';

const VotingPage = () => {
  const { candidates, handleVote } = useVote();

  return (
    <div>
      <h1>Cast Your Vote</h1>
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <span className="candidate-name">{candidate.name}</span>
            <button className="vote-button" onClick={() => handleVote(candidate.id)}>
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingPage;