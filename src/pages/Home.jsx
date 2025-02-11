import ThumbnailDownloader from "../components/ThumnailDownloader";

const Home = () => {
  return (
    <div className="p-6">
      <ThumbnailDownloader />

      {/* Article for SEO */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          Download YouTube Thumbnails in HD
        </h2>
        <p>
          Want to download YouTube thumbnails in high resolution? Our tool lets
          you extract and save YouTube thumbnails in just one click. Simply
          enter the video URL, and hit "Get Thumbnail".
        </p>
        <h3 className="text-xl font-semibold mt-4">How to Use?</h3>
        <ul className="list-disc pl-5">
          <li>Copy the URL of the YouTube video.</li>
          <li>Paste it into the input box above.</li>
          <li>Click "Get Thumbnail".</li>
          <li>Download the high-quality image.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Why Use This Tool?</h3>
        <p>
          This tool is useful for YouTubers, bloggers, and designers who need
          high-resolution thumbnails for their content. It's **100% free and
          requires no sign-up**.
        </p>
      </div>
    </div>
  );
};

export default Home;
