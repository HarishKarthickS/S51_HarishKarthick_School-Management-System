// ThreadList.js
import React from 'react';

function ThreadList({ threads, onThreadClick }) {
  return (
    <ul>
      {threads.map(thread => (
        <li key={thread.id}>
          <a href="#" onClick={() => onThreadClick(thread.id)}>
            {thread.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ThreadList;