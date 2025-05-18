import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import SongCard from "../components/SongCard.jsx";
import MusicPlayer from "../components/MusicPlayer.jsx";
import axios from "axios";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/song/songs`); 
        setSongs(res.data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSongs();
  }, []);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen w-screen pt-[6rem] text-white p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-violet-400">Explore Songs</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {songs.length > 0 ? (
            songs.map((song) => (
              <SongCard key={song._id} song={song} onPlay={handlePlay} />
            ))
          ) : (
            <p className="text-center col-span-full">No songs found.</p>
          )}
        </div>
      </div>

      {currentSong && <MusicPlayer song={currentSong} onClose={() => setCurrentSong(null)} />}
    </>
  );
};

export default Songs;
