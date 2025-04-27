import { createContext, useContext, useState } from "react";

// 1. Create Context
export const MusicPlayerContext = createContext();

// 2. Create Provider
export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const closePlayer = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  return (
    <MusicPlayerContext.Provider value={{ currentSong, isPlaying, playSong, closePlayer }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// Custom Hook
export const useMusicPlayer = () => useContext(MusicPlayerContext);
