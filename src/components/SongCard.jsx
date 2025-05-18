import { useMusicPlayer } from "../context/MusicPlayerContext.jsx";

const SongCard = ({ song }) => {
  const { playSong } = useMusicPlayer();

  return (
    <div>
      <div className="bg-gray-800 rounded-lg shadow-md w-48 h-70 p-2 flex flex-col items-center text-center hover:shadow-lg transition duration-300 group relative">
        <div className="relative w-full h-44">
          <img
            src={song.coverImage}
            alt={song.title}
            className="w-full h-full object-cover rounded-md"
          />
          <button
            className="absolute inset-0 w-10 h-10 top-31 left-2 bg-red-400 bg-opacity-50 animate-bounce rounded-full  opacity-0 group-hover:opacity-100 transition-opacity duration-400 "
            onClick={() => playSong(song)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </button>
        </div>

        {/* Song Info */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <p className="text-red-400 text-sm">{song.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
