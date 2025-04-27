import { useMusicPlayer } from "../context/MusicPlayerContext.jsx";

const MusicPlayer = () => {
  const { currentSong,  closePlayer } = useMusicPlayer();

  if (!currentSong) return null; // If no song selected, don't show player

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center justify-between shadow-lg z-50 animate-slideUp">
      <div className="flex items-center gap-4">
        <img src={currentSong.coverImage} alt="cover" className="w-12 h-12 rounded-md" />
        <div>
          <h4 className="text-md font-semibold">{currentSong.title}</h4>
          <p className="text-xs text-gray-400">{currentSong.artist}</p>
        </div>
      </div>

      <audio src={currentSong.audioFile} controls autoPlay className="w-68" />

      <button onClick={closePlayer} className="text-xl font-bold ml-4">×</button>
    </div>
  );
};

export default MusicPlayer;
