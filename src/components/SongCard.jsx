import { useMusicPlayer } from "../context/MusicPlayerContext.jsx";

const SongCard = ({ song }) => {
  const { playSong } = useMusicPlayer(); 

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition duration-300">
      <img
        src={song.coverImage}
        alt={song.title}
        className="w-full h-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{song.title}</h3>
      <p className="text-gray-400 text-sm">{song.artist}</p>

      <button
        className="mt-4 text-white px-4 py-2 rounded-full"
        onClick={() => playSong(song)}
      >
        Play
      </button>
    </div>
  );
};

export default SongCard;
