import { useState } from "react";

const ThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const getThumbnail = () => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      setThumbnailUrl(
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      );
    } else {
      alert("Invalid YouTube URL");
    }
  };

  const extractVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // 🔥 Fix: Force Download
  const downloadThumbnail = () => {
    if (!thumbnailUrl) return;

    const a = document.createElement("a");
    a.href = thumbnailUrl;
    a.download = "youtube-thumbnail.jpg"; // Forces browser to download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">YouTube Thumbnail Downloader</h1>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter YouTube Video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button
        onClick={getThumbnail}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 cursor-pointer"
        disabled={!videoUrl}
      >
        Get Thumbnail
      </button>

      {thumbnailUrl && (
        <div className="mt-6">
          <img
            src={thumbnailUrl}
            alt="YouTube Thumbnail"
            className="w-full rounded-lg"
          />
          <button
            onClick={downloadThumbnail}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Download Thumbnail
          </button>
        </div>
      )}
    </div>
  );
};

export default ThumbnailDownloader;
