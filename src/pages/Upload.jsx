import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Loader from "../components/Loader.jsx"; 

const Upload = () => {
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !coverImage) {
      alert("Please upload both song file and cover image.");
      return;
    }

    const formData = new FormData();
    formData.append("audioFile", file);
    formData.append("coverImage", coverImage);
    formData.append("title", songName);
    formData.append("artist", artist);
    formData.append("genre", genre);

    try {
      setLoading(true); 

      const res = await axios.post("/api/v1/song/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Song uploaded successfully!");
      setSongName("");
      setArtist("");
      setGenre("");
      setFile(null);
      setCoverImage(null);
    } catch (error) {
      const message = error?.response?.data?.message || "Upload failed";
      alert(message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <Navbar />
      {loading && <Loader />} {/* Show loader when uploading */}

      <div className="min-h-[100vh] w-[100vw] flex justify-center items-center bg-gray-900 text-white">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-md w-full max-w-md shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-violet-400 mb-6">Upload New Song</h2>

          <div className="mb-4">
            <label className="block mb-1">Song Name</label>
            <input
                placeholder="Enter the Song name..."
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Artist</label>
            <input
                placeholder="Enter the Artist name..."
              type="text"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Genre</label>
            <select
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            >
                <option value="">Select Genre</option>
                <option value="Pop">Pop</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="EDM">EDM</option>
                <option value="Classical">Classical</option>
                <option value="Folk">Folk</option>
                <option value="Lo-fi">Lo-fi</option>
                <option value="Other">Other</option>
            </select>
</div>


          <div className="mb-4">
            <label className="block mb-1">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full bg-gray-700 text-white"
              onChange={(e) => setCoverImage(e.target.files[0])}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1">Song File</label>
            <input
              type="file"
              accept="audio/*"
              className="w-full bg-gray-700 text-white"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded"
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Upload;
