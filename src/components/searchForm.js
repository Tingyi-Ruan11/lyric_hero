import React from 'react';

function SearchForm({ artist, setArtist, title, setTitle, fetchLyrics }) {
  return (
    <form onSubmit={fetchLyrics} className='mt-20'>
      <input 
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist name"
        className='text-black'
      />
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Song title"
        className='text-black'
      />
      <button type="submit" className=' bg-violet-400 hover:bg-violet-600'>Get Lyrics</button>
    </form>
  );
}

export default SearchForm;
