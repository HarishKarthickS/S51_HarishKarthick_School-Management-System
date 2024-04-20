// Forum.js (main component)
import React, { useState, useEffect } from 'react';
import ThreadList from './ThreadList';
import ThreadDetail from './ThreadDetail';

function Forum() {
  const [threads, setThreads] = useState([]);
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  useEffect(() => {
    // Fetch threads from backend API
    fetch('/api/threads')
      .then(response => response.json())
      .then(data => setThreads(data.threads));
  }, []);

  const handleThreadClick = (threadId) => {
    setSelectedThreadId(threadId);
  };

  return (
    <div>
      {selectedThreadId ? (
        <ThreadDetail threadId={selectedThreadId} />
      ) : (
        <ThreadList threads={threads} onThreadClick={handleThreadClick} />
      )}
    </div>
  );
}

export default Forum;


