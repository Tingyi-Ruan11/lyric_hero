import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/searchForm";
import React, { useState } from "react";
import LyricsDisplay from "./components/lyricsDisplay";
import { FaMusic } from "react-icons/fa";

function App() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(null);

  const fetchLyrics = async (evt) => {
    evt.preventDefault();
    setError(null); // Reset error before new API call
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artist}/${title}`
      );
      if (!response.ok) {
        throw new Error("Song not found");
      }
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (err) {
      setError(err.message);
      setLyrics("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="titile and icon" className="flex flex-row items-center mt-20 gap-5">
          <h1 className="text-5xl">Lyrics Hero</h1>
          <FaMusic className=" fill-violet-400" />
        </div>
        <SearchForm
          artist={artist}
          setArtist={setArtist}
          title={title}
          setTitle={setTitle}
          fetchLyrics={fetchLyrics}
        />
        <LyricsDisplay lyrics={lyrics} error={error} />
      </header>
    </div>
  );
}

export default App;
