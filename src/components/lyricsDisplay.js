import React from 'react';

function LyricsDisplay({ lyrics, error }) {
  return (
    <div className='m-20'>
      {error && <p>Error: {error}</p>}
      <pre>{lyrics}</pre>
    </div>
  );
}

export default LyricsDisplay;
