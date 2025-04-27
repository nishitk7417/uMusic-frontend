import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";  

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentSong(song);
      setIsPlaying(true);
    } else {
      toast.error("Please login first to play music!", {
        position: "top-center", 
        autoClose: 3000,        
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
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
