import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const VoteContext = createContext();

// Initial data for candidates
const initialCandidates = [
  { id: 1, name: 'Candidate A', votes: 0 },
  { id: 2, name: 'Candidate B', votes: 0 },
  { id: 3, name: 'Candidate C', votes: 0 },
];

// 2. Create the Provider Component
export const VoteProvider = ({ children }) => {
  const [candidates, setCandidates] = useState(initialCandidates);

  // Function to handle voting
  const handleVote = (candidateId) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  // Logic to find the leading candidate
  const getLeadingCandidate = () => {
    if (candidates.every(c => c.votes === 0)) {
        return 'No votes yet';
    }
    const maxVotes = Math.max(...candidates.map(c => c.votes));
    const leaders = candidates.filter(c => c.votes === maxVotes);
    
    if (leaders.length > 1) {
        return "It's a tie!";
    }
    return leaders[0].name;
  };

  const leadingCandidate = getLeadingCandidate();

  return (
    <VoteContext.Provider value={{ candidates, handleVote, leadingCandidate }}>
      {children}
    </VoteContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useVote = () => {
  return useContext(VoteContext);
};