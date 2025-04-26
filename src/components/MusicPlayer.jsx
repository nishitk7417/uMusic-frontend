const MusicPlayer = ({ song, onClose }) => {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center justify-between shadow-lg z-50 animate-slideUp">
        <div className="flex items-center gap-4">
          <img src={song.coverImage} alt="cover" className="w-12 h-12 rounded-md" />
          <div>
            <h4 className="text-md font-semibold">{song.title}</h4>
            <p className="text-xs text-gray-400">{song.artist}</p>
          </div>
        </div>
  
        <audio src={song.audioFile} controls autoPlay className="w-68" />
  
        <button onClick={onClose} className="text-xl font-bold ml-4">×</button>
      </div>
    );
  };
  
  export default MusicPlayer;
  